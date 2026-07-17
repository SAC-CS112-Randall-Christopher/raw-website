# Randall Automation Works website

A portable, static-first Next.js website for Randall Automation Works, a Western Colorado AI automation and systems-integration consultancy. The site contains no required staging-platform branding, authentication, runtime APIs or hard-coded staging URL.

## Current status

The selected brand name is **Randall Automation Works**, founded by Chris Randall. **R.A.W.** is used only as a secondary monogram paired with the full business name. Before a public launch, confirm the legal entity, permanent domain, public email and phone, form provider, scheduling link and final legal language.

The contact form is intentionally disconnected during private staging. It validates locally but does not transmit visitor information.

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the local or permanent origin.
3. Run `npm ci`.
4. Run `npm run dev`.

The private Sites checkout uses its included Vinext development and build scripts. No Sites-specific API is used by the website application.

## Production build

Run `npm run build`. The current build produces a Cloudflare-compatible Worker artifact through Vinext. The application code uses standard Next.js App Router, React, CSS and public assets.

Before public launch:

- Set `NEXT_PUBLIC_SITE_URL` to the canonical `https://` domain.
- Connect a client-owned contact-form provider.
- Add the public email, phone and optional scheduling URL.
- Confirm business entity and legal language.
- Review the privacy policy after selecting analytics, spam protection and form services.

## Hosting

### Cloudflare Workers or Pages

The included Vinext build is already Cloudflare-oriented. The repository now
includes a root `wrangler.jsonc`, a pinned Workers Builds Node.js version, and
repeatable build/deploy scripts. See [`CLOUDFLARE.md`](./CLOUDFLARE.md) for the
exact GitHub import settings, verification steps, domain variable, and custom
domain handoff.

### Vercel

The application is standard Next.js, but this checkout's build script is tailored to Vinext. For Vercel, remove the Vinext-specific Vite adapter and restore the standard Next.js scripts (`next dev`, `next build`, `next start`) before importing the repository. Set `NEXT_PUBLIC_SITE_URL`, deploy, then attach the custom domain in Project Settings → Domains.

### Netlify

Use Netlify's current Next.js adapter after replacing the Vinext build scripts with standard Next.js scripts. Set `NEXT_PUBLIC_SITE_URL`, deploy from the repository and add the custom domain in Domain Management.

Keep DNS, hosting, form delivery, analytics and scheduling under client-owned accounts.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public launch | Canonical domain used by metadata, sitemap and robots files |
| `NEXT_PUBLIC_CONTACT_FORM_ACTION` | After form-provider selection | Reserved for a replaceable form endpoint |
| `NEXT_PUBLIC_SCHEDULING_URL` | Optional | Client-owned scheduling link |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional | Reserved for a replaceable analytics provider |

Never place passwords, API secrets or private tokens in variables prefixed with `NEXT_PUBLIC_`.

## Contact-form adapter

`components/contact-form.tsx` currently performs browser-side validation only. When hosting is selected, replace its submit handler with one of:

- a client-owned form endpoint;
- a small same-origin API route that sends mail through a client-owned provider; or
- a host-native form adapter.

Add spam protection only after the public domain and form provider are selected. Keep the consent language and the warning against submitting sensitive information.

## Project structure

- `app/page.tsx` — home page
- `app/[slug]/page.tsx` — static interior-page renderer
- `app/page-content.ts` — page copy and metadata
- `app/globals.css` — complete responsive visual system
- `components/site-shell.tsx` — shared header and footer
- `components/contact-form.tsx` — replaceable form adapter
- `app/sitemap.ts` and `app/robots.ts` — SEO foundations
- `public/images/` — locally hosted production imagery

## External dependency inventory

- Next.js and React: application framework
- Vinext and Cloudflare tooling: current private-stage/Worker build adapter
- Google Fonts through `next/font`: Manrope and Source Serif 4, self-hosted by the build output
- Generated regional hero image: stored locally in `public/images`

There are currently no required databases, external APIs, analytics services, scheduling services, authentication providers or form providers.

## Accessibility and content

The site uses semantic landmarks, a skip link, keyboard-operable navigation, visible focus states, labeled forms, responsive layouts and reduced-motion support. Final launch QA should include automated and manual WCAG 2.2 AA checks, representative Android/iOS testing and review of every public business fact.
