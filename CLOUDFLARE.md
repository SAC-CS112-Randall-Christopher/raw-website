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
| Deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |

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

## HTTPS redirect review

The Worker now redirects HTTP requests for the production hostname to HTTPS
with status 308, preserving the path and query string. It also provides a
canonical apex redirect when a `www` request reaches the Worker. Local preview
hostnames remain usable. The existing dashboard-managed `www` redirect is
unchanged.

The current `assets` configuration serves matching static files before Worker
code. To cover HTTP asset requests too, Chris approved an apex-only Cloudflare edge
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
