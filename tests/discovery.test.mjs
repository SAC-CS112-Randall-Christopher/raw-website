import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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

test("the demo watch page exposes the unchanged public transcript, captions and verified duration", async () => {
  const html = await render("/raw-workspace/demo");
  const manifest = JSON.parse(await readFile(new URL("../docs/raw-demo-media.json", import.meta.url)));
  const transcript = JSON.parse(await readFile(new URL("../lib/raw-demo-transcript.json", import.meta.url)));
  const video = schemas(html).find(node => node["@type"] === "VideoObject");
  assert.equal(video.duration, manifest.videos["raw-full-demo.mp4"].duration_iso);
  assert.equal(video.transcript, transcript.join("\n\n"));
  for (const paragraph of transcript) assert.ok(text(html).includes(text(paragraph)), "transcript is readable without scripts");
  assert.match(html, /<video[^>]*preload="none"/);
  assert.match(html, /raw-full-demo\.vtt/);
  assert.match(html, /fictional business data and synthetic narration/);
  assert.match(html, /https:\/\/randallautomationworks.com\/raw-workspace\/demo/);
  const homeVideo = schemas(await render("/")).find(node => node["@type"] === "VideoObject");
  assert.equal(homeVideo.duration, manifest.videos["raw-highlight.mp4"].duration_iso);
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
  assert.match(sitemap, /\/raw-workspace\/demo<\/loc>/);
  assert.doesNotMatch(sitemap, /\/admin\//);
});
