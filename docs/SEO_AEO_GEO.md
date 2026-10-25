# Public discovery fixes — October 25, 2026

This branch starts from `feat/raw-connected-films` (`f46f67f`), preserving the
approved Ryan B films, content-addressed R2 origin, private DMPH gateway and
current marketing site. Cached `main` (`0ef1c49`) is older than the live media.
The separate pending redesign/article branch is not included.

The actual public audit covered all 27 URLs in the live sitemap. Three older
articles had FAQ schema that paraphrased/differed from the visible answers. They
now render both from the same reviewed text; publication dates stay intact and
modification dates reflect this edit. Organization, founder, WebSite and product
identities are connected using stable IDs. No ratings, customer results or
unverified product integrations were added.

`/raw-workspace/demo` makes the existing full film the primary page content with
the same public transcript, captions, verified duration and fictional-data /
synthetic-narration disclosure. It is linked from the product page and sitemap.
Video/media files, narration and R2 delivery are unchanged.

The live homepage still reported a 96-second highlight in JSON-LD during the
audit, despite its 108-second caption. This branch's existing manifest-driven
source correctly uses `PT1M48S`; a deployment and actual live recheck are required.
This document does not claim live fixes, search indexing or AI citations.

## Local verification

After the documented pinned install:

```sh
bash scripts/build-verified.sh
node --test --test-isolation=none --test-reporter=spec tests/*.test.mjs
npm run lint
```

The production Worker build and 32 tests passed, including unique metadata for
28 indexable routes, visible FAQ equality, public transcript, media-manifest
durations and private studio controls. The two unchanged local films were
independently checked with SHA-256 and ffprobe. Full remote R2 downloads in
`npm run verify:videos` were not repeated for metadata/transcript-only changes;
do not describe that check as a new remote media verification. Desktop/mobile
review uses the production Worker and local assets without third-party requests.

## Existing-host activation

The tracked Sites project returned `NOT_FOUND` in this session; Cloudflare CLI
authentication is absent. No deployment or replacement Site was made. On MAIN,
local Codex should inspect current git/PR state, use the existing authenticated
hosting account and the repository's verified deploy procedure, preserve all
gateway/media bindings, and confirm the existing no-added-cost entitlement.
Do not provision or purchase services to finish this edit.

After authorized publication, verify `/raw-workspace/demo`, `/sitemap.xml`, all
three corrected insight articles and the actual homepage `VideoObject.duration`.
Run DMPH's bounded `site-audit` command and retain a new live receipt. Indexing,
real AI answers/referrals and inquiry results require separate observations.
