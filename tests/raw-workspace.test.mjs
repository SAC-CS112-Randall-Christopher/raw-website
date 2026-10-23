import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
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
  assert.equal(video.duration, "PT3M59S");
  assert.equal(video.contentUrl, "https://randallautomationworks.com/products/raw-workspace/raw-full-demo.mp4");
  const faq = graph.find((s) => s["@type"] === "FAQPage");
  for (const item of faq.mainEntity) assert.ok(html.includes(item.name));
  assert.match(html, /<video[^>]+controls/);
  assert.match(html, /raw-full-demo\.vtt/);
  assert.match(html, /raw-demo-transcript\.txt/);
  assert.match(html, /fictional Pine Ridge/);
  assert.doesNotMatch(html, /24 seconds|PT24S/);
  assert.match(html, /calendar\.app\.google\/Qwnjw6tS5TdDo5Hh7/);
  const mainText = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1].replace(/<script[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  assert.doesNotMatch(mainText, /\b(trials?|pilots?|early access)\b/i);
  const homepage = await home.text();
  assert.match(homepage, /Featured product · RAW Business Workspace/);
  assert.match(homepage, /Explore RAW Workspace/);
  assert.match(homepage, /<video[^>]+controls[^>]+preload="none"/);
  assert.match(homepage, /raw-highlight\.mp4/);
  assert.match(homepage, /raw-highlight\.vtt/);
  assert.match(homepage, /\/raw-workspace#see-it-in-action/);
  assert.doesNotMatch(homepage, /<video[^>]+autoplay/);
  const homeScripts = [...homepage.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const highlight = homeScripts.find((s) => s["@type"] === "VideoObject");
  assert.equal(highlight.duration, "PT1M20S");
  assert.equal(highlight.contentUrl, "https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4");
  assert.match(await sitemap.text(), /https:\/\/randallautomationworks.com\/raw-workspace/);
  for (const asset of ["overview.png", "quotes.png", "video-poster.png", "social-card.png", "captions.vtt", "raw-workspace-landscape.mp4"]) {
    const file = new URL(`../dist/client/products/raw-workspace/${asset}`, import.meta.url);
    assert.ok((await stat(file)).size > 0, asset);
  }
  const media = JSON.parse(await readFile(new URL("../docs/raw-demo-media.json", import.meta.url), "utf8"));
  for (const [asset, expected] of Object.entries(media.assets)) {
    const bytes = await readFile(new URL(`../dist/client/products/raw-workspace/${asset}`, import.meta.url));
    assert.equal(bytes.length, expected.bytes, `${asset}: complete packaged file`);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected.sha256, `${asset}: reviewed media`);
    assert.ok(bytes.length < 25 * 1024 * 1024, `${asset}: existing Cloudflare static-asset limit`);
  }
  for (const [name, count, duration] of [["raw-highlight.vtt", 21, 80.042], ["raw-full-demo.vtt", 63, 239.018]]) {
    const captions = await readFile(new URL(`../dist/client/products/raw-workspace/${name}`, import.meta.url), "utf8");
    assert.match(captions, /^WEBVTT/);
    const stamps = [...captions.matchAll(/(\d\d:\d\d:\d\d\.\d{3}) --> (\d\d:\d\d:\d\d\.\d{3})/g)];
    assert.equal(stamps.length, count);
    const seconds = (value) => value.split(":").reduce((a, n) => a * 60 + Number(n), 0);
    let previous = 0;
    for (const [, start, end] of stamps) {
      assert.ok(seconds(start) >= previous && seconds(end) > seconds(start) && seconds(end) <= duration, name);
      previous = seconds(end);
    }
  }
});
