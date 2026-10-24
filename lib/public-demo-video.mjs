import media from "../docs/raw-demo-media.json" with { type: "json" };

const videos = new Set(["raw-highlight.mp4", "raw-full-demo.mp4"]);

/** Cache the complete public asset, then let Cloudflare's Cache API serve ranges.
 * Assets binding responses currently ignore Range. Never buffer/slice a film in JS.
 * Only the two reviewed, bounded public films enter this path; no private headers
 * or query strings become an origin request or part of a shared cache entry.
 */
export async function publicDemoVideo(request, env, cache) {
  const url = new URL(request.url);
  const name = url.pathname.slice("/products/raw-workspace/".length);
  if (url.pathname !== `/products/raw-workspace/${name}` || !videos.has(name)) return null;
  const download = url.searchParams.get("download") === "1";
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  }

  const asset = media.assets[name];
  const etag = `"${asset.sha256}"`;
  url.search = `?demo-sha256=${asset.sha256}`;
  const key = new Request(url, { method: "GET" });
  const headers = new Headers();
  for (const name of ["If-None-Match", "If-Modified-Since"]) {
    if (request.headers.has(name)) headers.set(name, request.headers.get(name));
  }
  const ifRange = request.headers.get("If-Range");
  if (request.method === "GET" && request.headers.has("Range") && (!ifRange || ifRange === etag)) {
    headers.set("Range", request.headers.get("Range"));
  }
  const lookup = new Request(url, { headers });
  const store = cache ?? caches.default;
  let response = await store.match(lookup);
  if (!response) {
    const origin = new URL(url.pathname, url.origin);
    const source = await env.ASSETS.fetch(new Request(origin));
    if (source.status !== 200) return source;
    const length = source.headers.get("Content-Length");
    if ((length !== null && Number(length) !== asset.bytes) || !source.headers.get("Content-Type")?.startsWith("video/mp4") || source.headers.has("Content-Encoding")) {
      console.warn("Public demo asset rejected", { name, length: source.headers.get("Content-Length"), type: source.headers.get("Content-Type"), encoding: source.headers.get("Content-Encoding") });
      await source.body?.cancel();
      return new Response("Video asset does not match the reviewed publication", { status: 503 });
    }
    const stored = new Headers(source.headers);
    stored.delete("Set-Cookie");
    stored.set("ETag", etag);
    // The Assets binding can omit the wire Content-Length header. This exact
    // packaged length is independently hashed and checked by the build tests.
    stored.set("Content-Length", String(asset.bytes));
    stored.set("Accept-Ranges", "bytes");
    stored.set("Cache-Control", "public, max-age=31536000");
    await store.put(key, new Response(source.body, { headers: stored }));
    response = await store.match(lookup);
  }
  if (!response) return new Response("Video cache unavailable", { status: 503 });
  const outgoing = new Headers(response.headers);
  outgoing.set("Cache-Control", "public, max-age=0, must-revalidate");
  if (download) outgoing.set("Content-Disposition", `attachment; filename="${name}"`);
  if (request.method === "HEAD") await response.body?.cancel();
  return new Response(request.method === "HEAD" ? null : response.body, { status: response.status, headers: outgoing });
}
