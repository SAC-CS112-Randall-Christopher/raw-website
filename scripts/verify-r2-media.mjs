import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

if (process.argv.length !== 2) throw new Error("This command only verifies the two reviewed public videos; it does not upload or overwrite objects.");
const root = new URL("../", import.meta.url);
const media = JSON.parse(await readFile(new URL("docs/raw-demo-media.json", root), "utf8"));
async function digest(stream) {
  const hash = createHash("sha256");
  let bytes = 0;
  for await (const chunk of stream) { bytes += chunk.byteLength; hash.update(chunk); }
  return { bytes, sha256: hash.digest("hex") };
}
for (const name of ["raw-highlight.mp4", "raw-full-demo.mp4"]) {
  const expected = media.assets[name];
  if (!Number.isSafeInteger(expected?.bytes) || expected.bytes <= 0 || !/^[a-f0-9]{64}$/.test(expected.sha256)) {
    throw new Error("Invalid approved video manifest: " + name);
  }
  const file = new URL("media/raw-workspace/" + name, root);
  const local = await digest(createReadStream(file));
  if (local.bytes !== expected.bytes || local.sha256 !== expected.sha256) throw new Error("Local reviewed file changed: " + name);
  const key = `raw-workspace/${expected.sha256}/${name}`;
  const url = "https://media.randallautomationworks.com/" + key;
  const response = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(180000) });
  if (response.status !== 200 || Number(response.headers.get("Content-Length")) !== expected.bytes ||
      !response.headers.get("Content-Type")?.startsWith("video/mp4") || response.headers.has("Content-Encoding")) {
    await response.body?.cancel();
    throw new Error("R2 publication unavailable or mismatched; verify the authorized upload before deployment: " + name);
  }
  const remote = await digest(response.body);
  if (remote.bytes !== expected.bytes || remote.sha256 !== expected.sha256) throw new Error("R2 object checksum mismatch; never overwrite this immutable path: " + name);
  console.log(`${name}: verified ${remote.bytes} bytes, SHA-256 ${remote.sha256}`);
}
