import media from "../docs/raw-demo-media.json" with { type: "json" };

const videos = new Set(["raw-highlight.mp4", "raw-full-demo.mp4"]);
const origin = "https://media.randallautomationworks.com";
const forwarded = ["Range", "If-Range", "If-None-Match", "If-Modified-Since"];

/** Stream only the two reviewed public R2 films through their stable website URLs.
 * R2 handles ranges and validators. Never buffer a complete film in the Worker,
 * or forward visitor credentials, arbitrary URLs, paths or query parameters.
 */
export async function publicDemoVideo(request, fetchMedia = fetch) {
  const url = new URL(request.url);
  const name = url.pathname.slice("/products/raw-workspace/".length);
  if (url.pathname !== `/products/raw-workspace/${name}` || !videos.has(name)) return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  }

  const asset = media.assets[name];
  const headers = new Headers();
  for (const header of forwarded) {
    if (request.headers.has(header)) headers.set(header, request.headers.get(header));
  }
  const target = new URL(`/raw-workspace/${asset.sha256}/${name}`, origin);
  let source;
  try {
    source = await fetchMedia(new Request(target, { method: request.method, headers, redirect: "manual" }));
  } catch {
    return new Response("Video storage unavailable", { status: 503 });
  }
  if (![200, 206, 304, 416].includes(source.status)) {
    await source.body?.cancel();
    return new Response("Video storage unavailable", { status: 503 });
  }
  if (source.status === 200 || source.status === 206) {
    const length = source.headers.get("Content-Length");
    const range = source.headers.get("Content-Range");
    const parts = range?.match(/^bytes (\d+)-(\d+)\/(\d+)$/);
    const validSize = source.status === 200
      ? length !== null && Number(length) === asset.bytes
      : parts && Number(parts[3]) === asset.bytes && Number(parts[1]) <= Number(parts[2])
        && Number(parts[2]) < asset.bytes && length !== null
        && Number(length) === Number(parts[2]) - Number(parts[1]) + 1;
    if (!validSize || !source.headers.get("Content-Type")?.startsWith("video/mp4") || source.headers.has("Content-Encoding")) {
      await source.body?.cancel();
      return new Response("Video does not match the reviewed publication", { status: 503 });
    }
  }
  const outgoing = new Headers(source.headers);
  outgoing.delete("Set-Cookie");
  outgoing.set("Cache-Control", "public, max-age=0, must-revalidate");
  if (url.searchParams.get("download") === "1") {
    outgoing.set("Content-Disposition", `attachment; filename="${name}"`);
  } else outgoing.delete("Content-Disposition");
  if (request.method === "HEAD") await source.body?.cancel();
  return new Response(request.method === "HEAD" ? null : source.body, { status: source.status, headers: outgoing });
}
