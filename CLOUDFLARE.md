# Cloudflare deployment

This repository is prepared for Cloudflare Workers Builds. The Vinext build
produces a Worker in `dist/server` and browser assets in `dist/client`; the
root `wrangler.jsonc` deploys those generated files together.

## Import settings

In **Workers & Pages → Create application → Connect GitHub**, select this
repository and use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Non-production deploy command | `npm run verify:videos --if-present && npx wrangler versions upload` |

The `.node-version` file pins the Workers Builds environment to Node.js
22.16.0. Cloudflare installs the locked npm dependencies before running the
build command.

## Domain variable

After the first successful deployment, add these **runtime variables** under
the Worker's **Settings → Variables & Secrets**:

```text
NEXT_PUBLIC_SITE_URL=https://randallautomationworks.com
NEXT_PUBLIC_CONTACT_FORM_ACTION=https://formspree.io/f/mpqvpoza
```

Use the final canonical `https://` origin without a trailing slash. The Worker
uses this value for canonical metadata, `robots.txt`, and `sitemap.xml`.
`keep_vars` is enabled in `wrangler.jsonc` so dashboard-managed variables are
preserved on later deployments.

## Custom domain

Verify the temporary `*.workers.dev` address first. Then open the Worker's
**Settings → Domains & Routes**, add the final custom domain, and confirm that
both the apex domain and the preferred `www` behavior resolve consistently.

## Contact form status

The contact form validates entries in the browser and submits them to the
client-owned Formspree endpoint above. The endpoint is public by design; do not
place private API keys in any variable beginning with `NEXT_PUBLIC_`.

## Local verification

```sh
npm ci
npm test
npx wrangler deploy --dry-run
```

For an authenticated local deployment, run `npm run deploy`.

RAW films now use the separate public R2 bucket described in [R2-MEDIA.md](R2-MEDIA.md).
The build command verifies the full public video objects against the reviewed
manifest after producing the artifact. Both the documented production and
preview Workers Builds paths therefore run that guard before uploading a Worker.
Keep the Workers Builds commands above consistent with the account settings;
a raw `wrangler deploy` without a verified build bypasses that check.
The non-production command remains compatible with older branches that contain
only static films and do not define `verify:videos`.

The existing OAuth session could read the Worker and configure R2 but returned
403 for the Workers Builds triggers endpoint on 2026-10-24. No hosted trigger
settings were changed. The guard is consequently part of this branch's `build`
script, covering the existing documented `npm run build` hosted path without
requiring a broader credential or a global change to older branches.

On 2026-10-23 the DMPH feature gateway was deployed to the existing Worker
using MAIN's authorized Wrangler account. The matching named tunnel, origin
CNAME and two private gateway bindings are configured. Actual custom-domain
fixture login, required password replacement, narration/export, protected
downloads, restart and offline-host checks passed. See [DMPH-STUDIO.md](DMPH-STUDIO.md)
for the remaining owner password input and current 503 availability state.

On Windows, build and test in the existing WSL/Linux runtime. Keep Linux Node
dependencies separate from any native Windows installation. The build helpers
preserve the host's real home and XDG configuration directories so the normal
authorized Wrangler session remains usable; only build scratch files and npm
cache are redirected. Text files use LF endings for Bash/WSL compatibility.
The root deployment configuration is the single source of `nodejs_compat`,
matching the existing production Worker. Do not also add that flag through
the Vite plugin override: the plugin concatenates those arrays, and Cloudflare
rejects duplicate flags with code 10021. Artifact validation now checks the
generated Wrangler configuration for missing or duplicate compatibility flags
before an upload. This caught and reproduced the failed preview upload from
commit `b3fc27a` locally; the Vite override was removed to correct its cause.

## HTTPS redirect review

The Worker now redirects HTTP requests for the production hostname to HTTPS
with status 308, preserving the path and query string. It also provides a
canonical apex redirect when a `www` request reaches the Worker. Local preview
hostnames remain usable. The existing dashboard-managed `www` redirect is
unchanged.

The `assets` configuration serves matching static files before Worker code,
except for the two published RAW MP4 paths listed in `assets.run_worker_first`.
Those paths use the native Cache API for verified byte-range playback; see
[RAW video publication](docs/raw-demo-publication.md). To cover HTTP asset
requests too, Chris approved an apex-only Cloudflare edge
redirect rule. No dashboard settings have been changed in this checkout.

Approved Single Redirect rule:

- Match expression: `http.host eq "randallautomationworks.com" and not ssl`
- Dynamic target: `concat("https://randallautomationworks.com", http.request.uri.path)`
- Status: `301`
- Preserve query string: enabled
- Keep the existing `www` redirect rule and its scope.

See Cloudflare's [HTTPS Single Redirect example](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-admin-https/) and [Single Redirect settings](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/).
After publication and rule application, verify the apex HTTP homepage,
interior pages, a public font/image path, and the existing `www` paths with
queries. The local Worker tests verify the code path; they do not verify
dashboard rules.

Before publication, authenticated read-only API calls verified the existing
RAW account, Worker and domain binding. The current Wrangler OAuth session
returned HTTP 403 / Authentication error when reading redirect rules; it must
not be used to overwrite a ruleset that could not be inspected. Apply this rule
through an existing authorized Cloudflare connection. No new credentials or
broader permissions are required by the website changes.
