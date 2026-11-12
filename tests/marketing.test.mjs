import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import { createRequire } from "node:module";
import { DatabaseSync } from "node:sqlite";

const require = createRequire(import.meta.url);
function loadTs(file, context, dependencies = {}) {
  const source = ts.transpileModule(readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const compiledModule = { exports: {} };
  vm.runInNewContext(`(function(require,module,exports){${source}\n})`, context)(name => dependencies[name] ?? require(name), compiledModule, compiledModule.exports);
  return compiledModule.exports;
}
const globals = { URL, URLSearchParams, Request, Response, TextDecoder, FormData, console };
const definitions = loadTs("lib/marketing-events.ts", globals);
const { collectMarketingEvent } = loadTs("lib/marketing-collector.ts", globals, { "./marketing-events": definitions });
const payload = { event: "booking_click", page: "/gis-and-field-operations", landing: "/gis-and-field-operations", channel: "google", campaign: "none", test: true };
const request = (data = payload, extra = {}) => new Request("https://randallautomationworks.com/api/marketing-events", {
  method: "POST", headers: { Origin: "https://randallautomationworks.com", "Content-Type": "application/json", ...extra }, body: JSON.stringify(data),
});

test("measurement writes aggregate counters, isolates tests and rejects private data", async () => {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync(new URL("../db/marketing-metrics.sql", import.meta.url), "utf8"));
  const db = { prepare: sql => ({ bind: (...values) => ({ run: async () => sqlite.prepare(sql).run(...values) }) }) };
  assert.equal((await collectMarketingEvent(request(), db)).status, 204);
  assert.equal((await collectMarketingEvent(request(), db)).status, 204);
  assert.equal((await collectMarketingEvent(request({ ...payload, test: false }), db)).status, 204);
  const rows = sqlite.prepare("SELECT environment,count FROM marketing_daily ORDER BY environment").all();
  assert.equal(rows[0].environment, "production"); assert.equal(rows[0].count, 1);
  assert.equal(rows[1].environment, "test"); assert.equal(rows[1].count, 2);
  for (const data of [
    { ...payload, email: "private@example.invalid" }, { ...payload, page: "/contact?email=private" },
    { ...payload, landing: "/admin/dmph/login.html" }, { ...payload, channel: "private-referrer" },
    { ...payload, event: "inquiry_success" }, { ...payload, campaign: "unapproved text" },
  ]) assert.equal((await collectMarketingEvent(request(data), db)).status, 400);
  assert.equal(sqlite.prepare("SELECT SUM(count) total FROM marketing_daily").get().total, 3);
  assert.equal((await collectMarketingEvent(request(payload, { Origin: "https://other.invalid" }), db)).status, 403);
  assert.equal((await collectMarketingEvent(request(payload, { "Sec-Fetch-Site": "cross-site" }), db)).status, 403);
  assert.equal((await collectMarketingEvent(request(payload, { "Sec-GPC": "1" }), db)).status, 204);
  assert.equal(sqlite.prepare("SELECT SUM(count) total FROM marketing_daily").get().total, 3);
  assert.equal((await collectMarketingEvent(request({ ...payload, message: "x".repeat(2000) }), db)).status, 413);
  assert.equal((await collectMarketingEvent(request())).status, 503);
  assert.equal((await collectMarketingEvent(request(), { prepare() { throw new Error("offline"); } })).status, 503);
  sqlite.close();
});

function formHarness(providerOk) {
  const stored = new Map(), calls = [], statuses = [];
  const context = {
    ...globals,
    window: { location: { hostname: "randallautomationworks.com", pathname: "/contact", search: "?service=gis&from=gis-field&email=never-measure" } },
    document: { referrer: "https://www.google.com/search?q=never-measure" }, navigator: {},
    sessionStorage: { getItem: key => stored.get(key), setItem: (key, value) => stored.set(key, value) },
    fetch: async (url, options) => { calls.push({ url, options }); return { ok: url.startsWith("https://formspree.io/") ? providerOk : true }; },
    FormData: class extends FormData { constructor(form) { super(); for (const [key, value] of Object.entries(form.fields)) this.set(key, value); } },
  };
  const client = loadTs("lib/marketing-client.ts", context, { "./marketing-events": definitions });
  const component = loadTs("components/contact-form.tsx", context, {
    react: { useState: value => [value, next => statuses.push(next)], useRef: value => ({ current: value }), useEffect() {} },
    "../lib/marketing-client": client, "../lib/marketing-events": definitions,
  });
  const form = { fields: { name: "Test only", email: "test@example.invalid", message: "Private message", consent: "on" }, reportValidity: () => true, resets: 0, reset() { this.resets++; } };
  return { context, client, form, calls, statuses, submit: component.ContactForm().props.onSubmit };
}

test("inquiries count only after provider success and measurement never receives form values", async () => {
  const failed = formHarness(false);
  await failed.submit({ preventDefault() {}, currentTarget: failed.form });
  assert.equal(failed.statuses.at(-1), "error"); assert.equal(failed.form.resets, 0);
  assert.equal(failed.calls.filter(c => c.url === "/api/marketing-events").length, 0);

  const success = formHarness(true);
  await success.submit({ preventDefault() {}, currentTarget: success.form });
  assert.equal(success.statuses.at(-1), "success"); assert.equal(success.form.resets, 1);
  const inquiry = success.calls.find(c => c.url.startsWith("https://formspree.io/"));
  assert.equal(inquiry.options.body.get("website_source"), "google");
  assert.equal(inquiry.options.body.get("website_service_link"), "gis-field");
  const event = success.calls.find(c => c.url === "/api/marketing-events");
  assert.equal(JSON.parse(event.options.body).event, "inquiry_success");
  assert.doesNotMatch(event.options.body, /example.invalid|Private message|never-measure|Test only/);
});

test("privacy preferences, blocked storage and failed analytics do not break the inquiry", async () => {
  const h = formHarness(true);
  h.context.navigator.globalPrivacyControl = true;
  await h.submit({ preventDefault() {}, currentTarget: h.form });
  assert.equal(h.calls.length, 1); assert.equal(h.statuses.at(-1), "success");
  h.context.navigator.globalPrivacyControl = false;
  h.context.sessionStorage.getItem = () => { throw new Error("blocked"); };
  h.context.sessionStorage.setItem = () => { throw new Error("blocked"); };
  h.context.fetch = async url => { if (url.startsWith("https://formspree.io/")) return { ok: true }; throw new Error("measurement offline"); };
  await h.submit({ preventDefault() {}, currentTarget: h.form });
  assert.equal(h.statuses.at(-1), "success");
});

test("rapid duplicate submits deliver one inquiry", async () => {
  const h = formHarness(true);
  let finish;
  h.context.fetch = () => new Promise(resolve => { finish = resolve; });
  const first = h.submit({ preventDefault() {}, currentTarget: h.form });
  await h.submit({ preventDefault() {}, currentTarget: h.form });
  finish({ ok: false }); await first;
  assert.equal(h.statuses.filter(s => s === "submitting").length, 1);
});

test("a deliberate test session stays isolated after internal navigation", () => {
  const h = formHarness(true);
  h.context.window.location.search = "?measurement_test=1";
  h.client.recordMarketingEvent("page_view");
  h.context.window.location.pathname = "/";
  h.context.window.location.search = "";
  h.client.recordMarketingEvent("booking_click");
  assert.ok(h.calls.every(call => JSON.parse(call.options.body).test === true));
  h.context.window.location.search = "?measurement_test=0";
  h.client.recordMarketingEvent("page_view");
  assert.equal(JSON.parse(h.calls.at(-1).options.body).test, false);
});

test("public measurement paths stay aligned with the canonical sitemap", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/sitemap.xml"), { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } }, ctx);
  const paths = [...(await response.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
  assert.equal(JSON.stringify([...paths].sort()), JSON.stringify([...definitions.marketingPaths].sort()));
});
