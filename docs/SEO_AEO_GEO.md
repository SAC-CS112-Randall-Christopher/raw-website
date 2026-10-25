# Public discovery release — October 25, 2026

Release through the existing GitHub → Cloudflare Workers Builds connection.
An executor-side Cloudflare login and MAIN are not requirements for that route.
Promote the tested PR to `main`, observe its actual Cloudflare check run and
verify the changed public URLs. A successful GitHub merge alone is not live proof.

## Preserve the actual production baseline

The initial SEO branch used older `feat/raw-connected-films` (`f46f67f`). A fresh
release inspection found that current production already serves the Copper
design and workflow films from `feat/raw-workflow-films` (`9c26036`). Those
already-live revisions are now integrated without rewriting either owner branch.
The separate action-approval article branch is not included.

Correction: live `PT1M36S` highlight metadata was valid for the current 95.680s
film; comparing it with the older 108-second local film was not a defect finding.
The current full film is 213.440s. Both exact films, captions, posters, source
manifest and delivery configuration are preserved. The new watch-page transcript
is regenerated from this film's existing public text, not the superseded cut.

## SEO changes

Three older articles now share visible/schema FAQ text, with original publication
dates preserved and modification dates reflecting this edit. Stable business,
founder, website and product identities describe actual published information.
No ratings, customer results, new integrations or accounting claims were invented.

`/raw-workspace/demo` provides a focused watch page and readable current transcript,
captions and matching video metadata. It is linked below the product information
and from the sitemap. Existing watching/booking actions stay in place; download
buttons and transcript-download actions are not restored to the product players.
The protected DMPH gateway, bindings, contact integration and current films stay
unchanged. No new infrastructure or paid service is required.

## Verification

```sh
bash scripts/build-verified.sh
node --test --test-isolation=none --test-reporter=spec tests/*.test.mjs
npm run lint
```

The production Worker build, artifact validation, 32 tests and lint pass on the
reconciled source. Tests cover 28 sitemap routes, FAQ visibility, the readable
transcript matching the current public source, manifest-derived durations and
private gateway controls. Desktop/mobile watch-page review uses production HTML
and local assets, with nonlocal/movie transfers blocked. Before release, the
existing full remote media-integrity guard must pass through Workers Builds.

After publication, rerun DMPH `site-audit` and verify the new page, actual company
identity, corrected FAQ text and current `PT1M36S` / `PT3M33S` metadata. Search
indexing, consumer AI citations and commercial outcomes require separate evidence.
