# RAW weekly article draft — October 18, 2026

- Title: **Before Connecting AI to Business Software: An Integration Readiness Checklist**
- Intended canonical URL: https://randallautomationworks.com/insights/ai-integration-readiness-checklist
- Repository: `SAC-CS112-Randall-Christopher/raw-website`
- Base: `dc0bbcb` on `main`.
- Status: draft prepared for a pull request. Not merged or published.
- Publication dates are prepared for October 18, 2026. They are conditional on publication that day; update the visible, social, structured-data, index and sitemap dates together if publication happens later. This receipt does not establish publication.

## Editorial decision

Reader: a Western Colorado small-business owner considering an AI connection to existing business software.
Buying question: what access and operating evidence should a vendor demonstrate before the owner accepts an integration pilot?
Distinct contribution: a field-level data contract; an explicitly fictional request-status walkthrough with separate source-update and last-successful-sync times; seven acceptance cases for normal operation, stale data, deletion/permissions, retries/replays, invalid fields, review boundaries and recovery.

This is an integration-readiness decision, distinct from the existing workflow audit, first-project, consultant selection, SOP preparation, model routing and local-versus-hosted articles. The current index, existing article topics, page-content service descriptions, README, scripts and prior publication receipts were reviewed.

Destinations: Services, workflow examples, engagement process, related routing article and Contact. An incoming contextual card is added within the existing Services integration section. The Insights index leads with the new guide and preserves all previous articles. Existing design, navigation, contact form and booking destinations remain unchanged. The free 30-minute consultation CTA matches the existing offer in `app/[slug]/page.tsx` and prior articles.

## Sources and claim boundaries

Primary documentation checked October 18, 2026:

- https://learn.microsoft.com/en-us/graph/delta-query-overview — supported-resource change tracking, deletions, delays, replays and synchronization resets. Used as a clearly labeled provider example, not a universal integration promise.
- https://learn.microsoft.com/en-us/graph/throttling — HTTP 429 and Retry-After behavior. The article directs readers to the actual selected provider's policy.

All business, request-record, timing and freshness-threshold details in the worked example are fictional. No actual customer, private record, price, savings, accuracy, certification, firsthand result or ready-made integration is claimed. The article makes no RAW Workspace subscription or integration-readiness claim. No Search Console, Business Profile, keyword-volume or ranking data is claimed.

## Completed local checks

- Disk preflight: approximately 30 GB available. Node v24.19.0 satisfies the repository's >=22.13 requirement.
- `npm run install:ci`: passed; locked Vinext tarball integrity verified; 507 packages installed using the repository's bounded installer. No dependency or lockfile edits.
- `npm test`: passed. Bounded production build, Worker artifact validation and all **15 rendered-HTML tests** passed. The sitemap metadata test verifies all **26** unique indexable routes.
- New rendered test checks self-canonical, visible/schema dates, Article/Breadcrumb JSON-LD, six table-of-contents targets, both primary source links, contextual incoming links and service/contact destinations.
- `npm run lint`: passed, exit 0.
- `git diff --check`: passed.
- Direct requests to the built Worker for all **19 internal page paths** linked from the new article returned HTTP 200. This verifies server responses, not browser interaction.
- Check logs retained separately; they are not part of the website publication.

## Open quality gate: browser rendering

Desktop/mobile visual inspection remains **blocked**, not passed. Python Playwright and installed Chromium were found, but the isolated browser exited before opening a page with `socket() failed: Operation not permitted (1)`. The approved sandbox-escalated attempt failed before launch with a sandbox setup error. No screenshots or pixel inspection are claimed. The preview server started successfully, but a separate sandboxed process could not reach its port; rendered Worker tests above do not substitute for responsive-layout QA.

Before publication, complete visual and interaction review at 1440, 390 and 360 pixels, including overflow, readable article/criteria layout, section navigation, incoming links and CTA. Run independent final review and the existing PR/checks/merge workflow only after the full quality gate passes. Then verify the production canonical page, index, sitemap and actual publication date. Local checks do not prove deployment, ranking or real-device behavior.
