#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"
wrangler="${SITES_PROJECT_ROOT}/dist/server/wrangler.json"

[[ -f "${worker}" ]] || {
  echo "Missing Sites Worker entry: dist/server/index.js" >&2
  exit 66
}
[[ -f "${hosting}" ]] || {
  echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
  exit 66
}
[[ -f "${wrangler}" ]] || {
  echo "Missing generated Worker configuration: dist/server/wrangler.json" >&2
  exit 66
}

node --input-type=module - "${worker}" "${hosting}" "${wrangler}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath, wranglerPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));
const config = JSON.parse(await readFile(wranglerPath, "utf8"));
const flags = config.compatibility_flags ?? [];
if (!flags.includes("nodejs_compat") || new Set(flags).size !== flags.length) {
  throw new Error("Generated Worker configuration must include nodejs_compat exactly once and no duplicate compatibility flags");
}

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/server/index.js must have an ESM default export with fetch(request, env, ctx)");
}
NODE

echo "Validated Sites artifact: ESM Worker, hosting manifest and unique compatibility flags are present."
