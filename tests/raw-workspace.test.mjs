import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import test from "node:test";
const media = JSON.parse(await readFile(new URL("../docs/raw-demo-media.json", import.meta.url), "utf8"));

test("promotes Connected Frontiers and preserves existing media for old links", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const request = (path) => worker.fetch(new Request(`https://randallautomationworks.com${path}`), env, ctx);
  for (const path of ["/raw-workspace", "/raw-workspace/", "/raw-workspace/demo", "/raw-workspace/demo/?contact=private"]) {
    const page = await request(path);
    assert.equal(page.status, 308, path);
    assert.equal(page.headers.get("Location"), "https://connectedfrontiers.com/platform/");
  }
  const homepage = await (await request("/")).text();
  assert.match(homepage, /Connected Frontiers/);
  for (const target of ["https://connectedfrontiers.com/", "https://connectedfrontiers.com/platform/", "https://connectedfrontiers.com/industries/", "https://connectedfrontiers.com/how-it-works/"]) assert.ok(homepage.includes(`href="${target}"`), target);
  assert.doesNotMatch(homepage, /RAW Business Workspace|RAW Workspace|RAW Harness|<video/);
  assert.match(homepage, /href="\/small-businesses"/);
  assert.doesNotMatch(await (await request("/sitemap.xml")).text(), /\/raw-workspace/);
  for (const asset of ["overview.png", "quotes.png", "video-poster.png", "social-card.png", "captions.vtt", "raw-workspace-landscape.mp4"]) {
    const file = new URL(`../dist/client/products/raw-workspace/${asset}`, import.meta.url);
    assert.ok((await stat(file)).size > 0, asset);
  }
  for (const [asset, expected] of Object.entries(media.assets)) {
    const isVideo = asset.endsWith('.mp4');
    const location = isVideo ? `../media/raw-workspace/${asset}` : `../dist/client/products/raw-workspace/${asset}`;
    const bytes = await readFile(new URL(location, import.meta.url));
    assert.equal(bytes.length, expected.bytes, `${asset}: complete packaged file`);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected.sha256, `${asset}: reviewed media`);
    if (isVideo) {
      await assert.rejects(stat(new URL(`../dist/client/products/raw-workspace/${asset}`, import.meta.url)), { code: 'ENOENT' }, 'R2 films are excluded from Workers static assets');
    } else assert.ok(bytes.length < 25 * 1024 * 1024, `${asset}: static asset limit applies only to remaining assets`);
  }
  for (const [name, details] of Object.entries(media.videos)) {
    const count=details.caption_cues, duration=details.duration;
    const captionFile=name.replace(/\.mp4$/, '.vtt');
    const captions = await readFile(new URL(`../dist/client/products/raw-workspace/${captionFile}`, import.meta.url), "utf8");
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
