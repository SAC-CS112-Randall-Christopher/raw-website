import assert from "node:assert/strict";
import test from "node:test";
import { publicDemoVideo } from "../lib/public-demo-video.mjs";
import media from "../docs/raw-demo-media.json" with { type: "json" };

const path = "/products/raw-workspace/raw-highlight.mp4";
const url = "https://randallautomationworks.com" + path;

test("limits shared video caching to the two reviewed public assets and GET/HEAD", async () => {
  const env = { ASSETS: { fetch() { throw new Error("Unexpected asset access"); } } };
  for (const path of ["/", "/admin/dmph/exports/film.mp4", "/products/raw-workspace/raw-workspace-landscape.mp4", "/other/raw-highlight.mp4"]) {
    assert.equal(await publicDemoVideo(new Request("https://randallautomationworks.com" + path), env), null);
  }
  const rejected = await publicDemoVideo(new Request(url, { method: "POST" }), env);
  assert.equal(rejected.status, 405);
  assert.equal(rejected.headers.get("Allow"), "GET, HEAD");
});

test("fills a hash-versioned cache without forwarding private headers or arbitrary queries", async () => {
  let ready = false;
  const info = media.assets["raw-highlight.mp4"];
  const cache = {
    async match(request) {
      assert.equal(new URL(request.url).search, `?demo-sha256=${info.sha256}`);
      assert.equal(request.headers.get("Authorization"), null);
      assert.equal(request.headers.get("Cookie"), null);
      assert.equal(request.headers.get("Range"), "bytes=2-4");
      return ready ? new Response("abc", { status: 206, headers: { "Content-Range": `bytes 2-4/${info.bytes}` } }) : undefined;
    },
    async put(request, response) {
      assert.equal(request.method, "GET");
      assert.equal(response.status, 200, "Cache API receives a complete response");
      assert.equal(response.headers.get("ETag"), `"${info.sha256}"`);
      assert.equal(response.headers.get("Set-Cookie"), null);
      assert.equal(await response.text(), "source bytes");
      ready = true;
    },
  };
  const env = { ASSETS: { async fetch(request) {
    assert.equal(request.url, url);
    assert.deepEqual([...request.headers], []);
    return new Response("source bytes", { headers: { "Content-Length": String(info.bytes), "Content-Type": "video/mp4", "Set-Cookie": "must-not-cache" } });
  } } };
  const response = await publicDemoVideo(new Request(url + "?untrusted=query", { headers: { Range: "bytes=2-4", Authorization: "private", Cookie: "private=value" } }), env, cache);
  assert.equal(response.status, 206);
  assert.equal(await response.text(), "abc");
  assert.equal(response.headers.get("Cache-Control"), "public, max-age=0, must-revalidate", "Stable public URLs revalidate after future publications");
});

test("honors a matching If-Range and drops ranges for changed representations and HEAD", async () => {
  const etag = `"${media.assets["raw-highlight.mp4"].sha256}"`;
  for (const [method, validator, expected] of [["GET", etag, "bytes=4-8"], ["GET", '"older"', null], ["HEAD", etag, null]]) {
    let cancelled = false;
    const response = await publicDemoVideo(new Request(url, { method, headers: { Range: "bytes=4-8", "If-Range": validator } }), {}, {
      async match(request) {
        assert.equal(request.headers.get("Range"), expected);
        return new Response(new ReadableStream({ cancel() { cancelled = true; } }), { headers: { "Content-Length": "5" } });
      },
    });
    if (method === "HEAD") {
      assert.equal(response.body, null);
      assert.equal(cancelled, true);
    } else await response.body.cancel();
  }
});

test("provides the verified artifact length when the Assets binding omits a wire length", async () => {
  let stored = false;
  const response = await publicDemoVideo(new Request(url), { ASSETS: { async fetch() {
    return new Response("fixture asset", { headers: { "Content-Type": "video/mp4" } });
  } } }, {
    async match() { return stored ? new Response("cached") : undefined; },
    async put(_request, response) {
      assert.equal(response.headers.get("Content-Length"), String(media.assets["raw-highlight.mp4"].bytes));
      assert.equal(await response.text(), "fixture asset");
      stored = true;
    },
  });
  assert.equal(response.status, 200);
});

test("preserves failed source status and refuses mismatched or unavailable cached video", async () => {
  const emptyCache = { async match() {}, async put() {} };
  const unavailable = await publicDemoVideo(new Request(url), { ASSETS: { async fetch() { return new Response("missing", { status: 404 }); } } }, emptyCache);
  assert.equal(unavailable.status, 404);
  const wrongSize = await publicDemoVideo(new Request(url), { ASSETS: { async fetch() { return new Response("wrong", { headers: { "Content-Length": "5", "Content-Type": "video/mp4" } }); } } }, emptyCache);
  assert.equal(wrongSize.status, 503);
  const notStored = await publicDemoVideo(new Request(url), { ASSETS: { async fetch() { return new Response("source", { headers: { "Content-Length": String(media.assets["raw-highlight.mp4"].bytes), "Content-Type": "video/mp4" } }); } } }, emptyCache);
  assert.equal(notStored.status, 503);
});
