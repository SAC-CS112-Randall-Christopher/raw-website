import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

test("promotes the real RAW product with playable media and answerable product information", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const request = (path) => worker.fetch(new Request(`https://randallautomationworks.com${path}`), env, ctx);
  const [page, home, sitemap] = await Promise.all([request("/raw-workspace"), request("/"), request("/sitemap.xml")]);
  assert.equal(page.status, 200);
  const html = await page.text();
  assert.match(html, /RAW Business Workspace/);
  assert.match(html, /Customers, quotes and the work in between/);
  assert.match(html, /application\/ld\+json/);
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const graph = scripts.find((s) => s["@graph"])["@graph"];
  const product = graph.find((s) => s["@type"] === "SoftwareApplication");
  assert.equal(product.name, "RAW Business Workspace");
  assert.equal(product.url, "https://randallautomationworks.com/raw-workspace");
  assert.equal(product.offers, undefined, "No invented pricing");
  const video = graph.find((s) => s["@type"] === "VideoObject");
  assert.equal(video.duration, "PT24S");
  const faq = graph.find((s) => s["@type"] === "FAQPage");
  for (const item of faq.mainEntity) assert.ok(html.includes(item.name));
  assert.match(html, /<video[^>]+controls/);
  assert.match(html, /captions\.vtt/);
  assert.match(html, /calendar\.app\.google\/Qwnjw6tS5TdDo5Hh7/);
  const mainText = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1].replace(/<script[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  assert.doesNotMatch(mainText, /\b(trials?|pilots?|early access)\b/i);
  const homepage = await home.text();
  assert.match(homepage, /Featured product · RAW Business Workspace/);
  assert.match(homepage, /Explore RAW Workspace/);
  assert.match(await sitemap.text(), /https:\/\/randallautomationworks.com\/raw-workspace/);
  for (const asset of ["overview.png", "quotes.png", "video-poster.png", "social-card.png", "captions.vtt", "raw-workspace-landscape.mp4"]) {
    const file = new URL(`../dist/client/products/raw-workspace/${asset}`, import.meta.url);
    assert.ok((await stat(file)).size > 0, asset);
  }
  const captions = await readFile(new URL("../dist/client/products/raw-workspace/captions.vtt", import.meta.url), "utf8");
  assert.match(captions, /^WEBVTT/);
  assert.match(captions, /00:00:20\.000 --> 00:00:24\.000/);
});
