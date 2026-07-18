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
