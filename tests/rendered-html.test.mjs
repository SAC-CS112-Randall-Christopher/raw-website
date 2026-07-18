import assert from "node:assert/strict";
import test from "node:test";

const productionTitle = /<title>Western Colorado AI Automation \| Randall Automation Works<\/title>/i;
const developmentPreviewMeta = /<meta(?=[^>]*\bname=["']codex-preview["'])[^>]*>/i;
const productionCanonical = /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/randallautomationworks\.com\/?["'])[^>]*>/i;

test("renders production branding without staging metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, productionTitle);
  assert.match(html, productionCanonical);
  assert.match(html, /Not every useful automation needs AI/i);
  assert.match(html, /Python &amp; data automation/i);
  assert.doesNotMatch(html, developmentPreviewMeta);
});

test("publishes code-first capabilities on Services and About pages", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("capability-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const [servicesResponse, aboutResponse] = await Promise.all([
    worker.fetch(new Request("http://localhost/services", { headers: { accept: "text/html" } }), env, ctx),
    worker.fetch(new Request("http://localhost/about", { headers: { accept: "text/html" } }), env, ctx),
  ]);
  const services = await servicesResponse.text();
  const about = await aboutResponse.text();

  assert.equal(servicesResponse.status, 200);
  assert.equal(aboutResponse.status, 200);
  assert.match(services, /Code-first automation and systems integration/i);
  assert.match(services, /Python automation/i);
  assert.match(services, /Visual Basic and VBA/i);
  assert.match(about, /Python scripting and workflow automation/i);
  assert.match(about, /JSON, API and structured-data connections/i);
});

test("publishes production robots and sitemap URLs", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("seo-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const ctx = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const robotsResponse = await worker.fetch(new Request("http://localhost/robots.txt"), env, ctx);
  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  const robots = await robotsResponse.text();
  const sitemap = await sitemapResponse.text();

  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);
  assert.match(robots, /https:\/\/randallautomationworks\.com\/sitemap\.xml/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/utilities-and-special-districts/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/insights<\/loc>/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/insights\/first-ai-automation-project/i);
  assert.doesNotMatch(`${robots}\n${sitemap}`, /\.invalid/i);
});

test("renders the first Insights article as an indexable Article", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const ctx = {
    waitUntil() {},
    passThroughOnException() {},
  };
  const response = await worker.fetch(
    new Request("http://localhost/insights/first-ai-automation-project", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /How to Choose a Practical First AI Automation Project/i);
  assert.match(html, /https:\/\/randallautomationworks\.com\/insights\/first-ai-automation-project/i);
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /"@type":"BreadcrumbList"/i);
  assert.doesNotMatch(html, /noindex/i);
});
