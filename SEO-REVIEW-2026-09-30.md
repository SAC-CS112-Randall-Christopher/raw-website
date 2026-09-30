# Local SEO and visual review — September 30, 2026

The active project root is `C:\Projects\RAW Website`. This is the existing
`SAC-CS112-Randall-Christopher/raw-website` application, on separate local branch
`codex/seo-visual-review-20260930`, based on `028e005` from `main`.

Publication is on hold. Nothing has been pushed, merged, deployed, purchased,
or changed in an account dashboard. Hosting configuration, package files and
unrelated Q-Trades work are unchanged. The original task-folder checkout is
retained as a backup; use the Projects checkout for further work.

## Changes ready for review

- Four portal/demo routes have distinct titles, descriptions, self-canonicals,
  social metadata and explicit `noindex, follow`. They remain outside the sitemap.
- All twelve existing font subsets use public `/fonts/` URLs. The two Latin
  files preload once. The original fonts, variable weights and Unicode ranges
  are retained with open-font licenses, without build-machine paths.
- The homepage has the approved Montrose title and clear Montrose base. The
  tagline stays unchanged. Explicit homepage route metadata restores the correct
  title and canonical during browser Back/Forward navigation.
- The existing examples page expands the front-office/admin AI helper and SDK
  integration using deterministic C# and multiple-model task/workload routing.
  No clients, unpublished tasks, measured results or metrics were added.
- Privacy text names the observed Cloudflare hosting/analytics beacon, Formspree
  contact delivery and Google Calendar booking. Launch placeholders and
  unverified retention assertions were removed. Terms retain existing engagement
  boundaries, replace launch placeholders with actual contact information and
  add no new governing-law, liability or vendor-contract provisions.
- Organization and Service schema replace deprecated ProfessionalService.
  Montrose is a named location, with no street or home address.
- Sitemap dates record known September 30 edits for home, examples, privacy and
  terms. All 22 existing sitemap routes and useful articles/FAQs remain.
- Production HTTP or www requests reaching Worker code redirect permanently
  to HTTPS apex with paths/queries preserved. Local preview works normally.
  Existing dashboard redirect settings are unchanged.
- A narrow-grid correction confines demo activity-table overflow to its scroll
  area on mobile. The contact honeypot CSS now matches the form class, preserving
  the field while hiding it from sight and keyboard navigation.
- The approved regional illustration is the responsive homepage hero. Its
  versioned filename preserves old cached references. Correct dimensions and
  illustration alt text are used, with the existing 640/1024/1600px Cloudflare
  image delivery, format negotiation, eager priority and original-image fallback.

## Hero provenance and transfer resolution

Chris supplied `ChatGPT Image Sep 30, 2026, 05_04_47 PM.png` directly in the
Projects folder and authorized its use. The readable PNG was visually inspected:
1672 x 941 pixels, 2,973,356 bytes, matching the approved Library asset metadata.
The original supplied file is preserved and excluded from Git locally; its
byte-identical public copy is `public/images/hero-western-colorado-2026.png`.

Library asset: `libfile_df5f5bfbf01081918bf207dc183f08f1`, named
`RAW-Western-Colorado-Hero-2026.png`. Both inspected local copies have SHA-256
`cc90a13a1433a8ec69e798a179e05b8b071a9de3bbc08e4f00eb667b7b47c969`.
No Library source hash was supplied, so this records the local copy's hash.
Further context is in `public/images/HERO-PROVENANCE.md`.

The original supported Library transfer failed with
`AttributeError: module 'os' has no attribute 'setxattr'` on Windows. It produced
no final materialized file. The helper was not bypassed or modified, and metadata
was not stripped. The user-supplied local input resolved that blocker. No new
image was generated and no pixel edit was performed. This is an illustrative
regional composite, not a photograph of an actual property.

## Verified checks

- Safe copy: independent checkout `.git` directory confirmed; target conflicts
  checked; all 107 tracked/untracked work files compared by SHA-256; branch,
  HEAD and Git status matched. The original checkout and supplied image remain.
- `npm test` at the new Projects root: verified Vinext build/artifact validation
  and 14/14 rendered tests passed, including all 22 sitemap pages, four demos,
  public fonts, hero dimensions and permanent path/query redirects.
- `npm run lint` at the new root: passed after the final source changes.
- Site TypeScript review: passed with external Cloudflare ambient declarations.
  Standalone project-wide tsc still needs the untouched starter database/Worker
  type bindings; no database or dependency change was introduced for this task.
- `git diff --check`: passed.
- Isolated Chrome: 1440px desktop, 390px mobile and 360px mobile each passed
  navigation, Back/Forward title/canonical restoration, loaded fonts, 12 reviewed
  routes, responsive layout, new hero decoding/aspect and native contact
  validation. Honeypot remained hidden and present. No POST requests or
  JavaScript errors occurred; no contact form was submitted.
- The new desktop and mobile screenshots were opened and inspected. The image
  retains its aspect and serene regional composition; copy, cards, navigation
  and form controls fit the tested layouts.

Screenshots and the browser report are in `local-review/`, excluded from Git
locally. Useful files: `desktop-home-viewport.png`, `mobile-home.png`,
`desktop-implementation-examples.png`, `mobile-contact.png` and
`browser-results.json`.

The review adapter serves this checkout's compiled Worker and built assets.
The Windows Vinext preview adapter returned 404 for existing built assets, so
the portable adapter was used without changing product hosting. Cloudflare image
requests used the new local PNG as a layout fixture. This preview does not
measure production CDN compression, transfer size or performance. The browser
and temporary preview server were closed after verification.

## Chris's remaining decisions

1. **Business identity:** What exact legal contracting name should the website
   identify — Chris Randall trading as Randall Automation Works, or a registered
   entity's exact name?
2. **Privacy and terms:** Do you have approved privacy/terms and inquiry
   retention/deletion procedures to use, or should these go through legal review?
   Final governing-law/liability language and applicable privacy/consent/provider
   arrangements remain owner/legal decisions. Current copy does not invent them.
3. **Cloudflare edge rule:** Approve the documented apex-only HTTP-to-HTTPS 301
   Single Redirect, preserving paths and queries while retaining the existing
   www rule? The current assets configuration serves matching files before
   Worker code, so this edge rule would also cover plain-HTTP font/image requests.
   Exact expression and target are in `CLOUDFLARE.md`; no account change was made.

Publication needs separate approval after those decisions. Once approved and
published, verify live apex HTTP pages/assets and www redirects with queries,
font responses, demo metadata and actual Cloudflare image delivery.

Chris confirmed there was no prior local RAW checkout; it had been GitHub-only.
No applicable AGENTS.md or checkout .agents/skills exists in this repository or
the checked new-root ancestors. No Search Console or Business Profile access
was used, and no ranking or production-performance claim is made.
