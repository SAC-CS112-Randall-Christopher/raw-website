import assert from "node:assert/strict";
import test from "node:test";

const { default: worker } = await import("../dist/server/index.js");
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };
const render = async path => {
  const response = await worker.fetch(new Request(`http://localhost${path}`), env, ctx);
  assert.equal(response.status, 200, path);
  return response.text();
};
const schemas = html => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const text = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/&(?:amp|quot|#x27);/g, " ").replace(/[^\p{L}\p{N}]+/gu, " ").toLowerCase().trim();

test("retired product routes redirect only safe requests to the relevant new product page", async () => {
  for (const path of ["/raw-workspace", "/raw-workspace/demo"]) {
    for (const method of ["GET", "HEAD"]) {
      const response = await worker.fetch(new Request(`https://randallautomationworks.com${path}?email=private`, {method}), env, ctx);
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("Location"), "https://connectedfrontiers.com/platform/");
    }
    const response = await worker.fetch(new Request(`https://randallautomationworks.com${path}`, {method:"POST",body:"private"}), env, ctx);
    assert.equal(response.status, 405);
    assert.equal(response.headers.get("Location"), null);
  }
  assert.equal((await worker.fetch(new Request("https://randallautomationworks.com/raw-workspace-unrelated"),env,ctx)).status,404);
});

test("FAQ structured answers are exactly supported by visible article text", async () => {
  for (const slug of ["ai-automation-consultant-small-business", "workflow-automation-audit-small-business", "ai-automation-for-small-business"]) {
    const html = await render(`/insights/${slug}`);
    const faq = schemas(html).find(node => node["@type"] === "FAQPage");
    assert.ok(faq?.mainEntity.length);
    for (const question of faq.mainEntity) {
      assert.ok(text(html).includes(text(question.name)), question.name);
      assert.ok(text(html).includes(text(question.acceptedAnswer.text)), question.name);
    }
  }
});

test("brand and website identities stay connected without exposing private routes", async () => {
  const nodes = schemas(await render("/"));
  const website = nodes.find(node => node["@type"] === "WebSite");
  assert.equal(website.publisher["@id"], "https://randallautomationworks.com/#business");
  assert.equal(website["@id"], "https://randallautomationworks.com/#website");
  const sitemap = await render("/sitemap.xml");
  assert.doesNotMatch(sitemap, /\/raw-workspace/);
  assert.match(sitemap, /\/insights\/ai-assistant-action-approval<\/loc>/);
  assert.doesNotMatch(sitemap, /\/admin\//);
});
