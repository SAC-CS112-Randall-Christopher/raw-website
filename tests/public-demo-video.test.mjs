import assert from "node:assert/strict";
import test from "node:test";
import { publicDemoVideo } from "../lib/public-demo-video.mjs";
import media from "../docs/raw-demo-media.json" with { type: "json" };

const url = "https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4";
const asset = media.assets["raw-highlight.mp4"];
const metadata = { "Content-Type": "video/mp4", "Content-Length": String(asset.bytes), ETag: '"r2-object-etag"', "Accept-Ranges": "bytes" };

test("exposes only the two approved film paths and GET/HEAD", async () => {
  const unexpected = () => { throw new Error("Unexpected origin access"); };
  for (const path of ["/", "/admin/dmph/exports/film.mp4", "/products/raw-workspace/other.mp4", "/other/raw-highlight.mp4", "/products/raw-workspace/raw-highlight.mp4/extra"]) {
    assert.equal(await publicDemoVideo(new Request("https://randallautomationworks.com" + path), unexpected), null);
  }
  assert.equal((await publicDemoVideo(new Request(url, { method: "POST" }), unexpected)).status, 405);
});

test("streams a content-addressed R2 origin without visitor credentials or arbitrary queries", async () => {
  let cancelled = false;
  const body = new ReadableStream({ cancel() { cancelled = true; } });
  const response = await publicDemoVideo(new Request(url + "?target=https://untrusted.example", { headers: { Authorization: "private", Cookie: "private=value" } }), async request => {
    assert.equal(request.url, `https://media.randallautomationworks.com/raw-workspace/${asset.sha256}/raw-highlight.mp4`);
    assert.deepEqual([...request.headers], []);
    assert.equal(request.redirect, "manual");
    return new Response(body, { headers: { ...metadata, "Set-Cookie": "must-not-share" } });
  });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Set-Cookie"), null);
  assert.equal(response.headers.get("ETag"), '"r2-object-etag"');
  assert.equal(response.headers.get("Cache-Control"), "public, max-age=0, must-revalidate");
  await response.body.cancel();
  assert.equal(cancelled, true);
});

test("preserves R2 byte ranges and matching/mismatching If-Range semantics", async () => {
  for (const matching of [true, false]) {
    const response = await publicDemoVideo(new Request(url, { headers: { Range: "bytes=2-4", "If-Range": matching ? '"r2-object-etag"' : '"older"' } }), async request => {
      assert.equal(request.headers.get("Range"), "bytes=2-4");
      assert.equal(request.headers.get("If-Range"), matching ? '"r2-object-etag"' : '"older"');
      return matching ? new Response("abc", { status: 206, headers: { ...metadata, "Content-Length": "3", "Content-Range": `bytes 2-4/${asset.bytes}` } }) : new Response("full", { headers: metadata });
    });
    assert.equal(response.status, matching ? 206 : 200);
    assert.equal(await response.text(), matching ? "abc" : "full");
  }
});

test("preserves conditional 304, unsatisfiable 416 and HEAD without reading a film", async () => {
  const unchanged = await publicDemoVideo(new Request(url, { headers: { "If-None-Match": '"r2-object-etag"' } }), async request => {
    assert.equal(request.headers.get("If-None-Match"), '"r2-object-etag"');
    return new Response(null, { status: 304, headers: { ETag: '"r2-object-etag"' } });
  });
  assert.equal(unchanged.status, 304);
  assert.equal(unchanged.body, null);
  const invalid = await publicDemoVideo(new Request(url, { headers: { Range: `bytes=${asset.bytes + 1}-` } }), async () => new Response(null, { status: 416, headers: { "Content-Range": `bytes */${asset.bytes}` } }));
  assert.equal(invalid.status, 416);
  assert.equal(invalid.headers.get("Content-Range"), `bytes */${asset.bytes}`);
  let cancelled = false;
  const head = await publicDemoVideo(new Request(url, { method: "HEAD" }), async request => {
    assert.equal(request.method, "HEAD");
    return new Response(new ReadableStream({ cancel() { cancelled = true; } }), { headers: metadata });
  });
  assert.equal(head.body, null);
  assert.equal(cancelled, true);
});

test("downloads remain attachments while playback stays inline", async () => {
  for (const download of [false, true]) {
    const response = await publicDemoVideo(new Request(url + (download ? "?download=1" : "")), async () => new Response("film", { headers: metadata }));
    assert.equal(response.headers.get("Content-Disposition"), download ? 'attachment; filename="raw-highlight.mp4"' : null);
    await response.body.cancel();
  }
});

test("rejects absent, redirected, wrong-sized, wrong-typed or encoded publication data", async () => {
  const sources = [
    () => new Response("missing", { status: 404 }),
    () => new Response(null, { status: 302, headers: { Location: "https://untrusted.example" } }),
    () => new Response("wrong", { headers: { ...metadata, "Content-Length": "5" } }),
    () => new Response("wrong", { headers: { ...metadata, "Content-Type": "text/html" } }),
    () => new Response("wrong", { headers: { ...metadata, "Content-Encoding": "gzip" } }),
    () => new Response("bad range", { status: 206, headers: { ...metadata, "Content-Length": "3", "Content-Range": "bytes 2-4/99" } }),
    () => { throw new Error("Unavailable origin"); },
  ];
  for (const source of sources) assert.equal((await publicDemoVideo(new Request(url), source)).status, 503);
});
