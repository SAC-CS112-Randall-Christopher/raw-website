# RAW article publication record: October 25, 2026

Idempotency key: raw-website/2026-10-25/ai-assistant-action-approval

Status: existing draft PR27 reconciled onto main; final verification pending. The earlier owner-lane blocker is resolved by PR28.

Topic: AI Assistant Approvals: Decide What It Can Do Before It Acts.
URL: https://randallautomationworks.com/insights/ai-assistant-action-approval
Branch: codex/article-ai-assistant-approval-20261025
Current base: main at 6f3f1c0df15cef98c86f830a1c2e9421d65ecc1d. Original base: feat/raw-workflow-films at 9c260360e61cacb70ab9da23ec9d068705e74a5d.

Reader: Western Colorado business owner buying an office/field assistant.
Buying question: what can the assistant change, who approves it and how is the outcome confirmed?
Distinct contribution: per-action approval record, synthetic task-versus-message-versus-booking handoff, uncertain-result reconciliation and five concrete acceptance tests. Develops action authority rather than repeating read-only integration readiness.
Destinations: services, RAW Workspace public demonstration, related integration checklist and contact. Incoming link: Services.

## Evidence
Microsoft Graph sendMail primary documentation checked October 25, 2026: https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0 . Its 202 response does not establish completed processing or delivery. The article limits this statement to that provider example. EX-104 and its workflow are explicitly synthetic educational material, not supported product functionality. RAW capabilities are bounded to the existing public demonstration and scoped configuration.

## Earlier production dependency
At the first review, PR26 was draft/unmerged and live RAW used its films and PR25 copper design. A main-based article deployment could have rolled back those changes, so this article was initially stacked on PR26 and kept draft. PR28 subsequently brought the relevant production source onto main; the reconciliation below resolves that earlier blocker without merging the owner PRs.

## Publication gate
Prepared dates are provisional October 25, 2026. Update visible/schema/index/sitemap dates together if publication occurs later. No publication is established by this draft receipt. Exact final head, PR checks, merge, deployment and live checks must be appended to the PR receipt after execution. Never create a second article for the same weekly topic on retry.

## Scope
Current repository guides, article inventory, prior publication records, live public product/early-access information and pending PRs were reviewed before topic selection. Existing layouts and navigation are retained. No application engineering, customer/employer data, fabricated customer outcomes, prices, savings, accuracy, search metrics or Search Console access. No provider calls that incur a fee or spending increase.

## Completed pre-PR checks

Production build, artifact validator, complete existing R2 media integrity guard, all 29 tests and lint passed. Updated existing sitemap test expectations for the added route and actually edited dates.

Independent editorial/source review found no material issue. The suggested TTP stain-grade package clarification was incorporated. Chromium production-preview checks passed at 1440x900, 390x844 and 360x800: no horizontal overflow or page errors; one H1; self-canonical; index/follow; Article and Breadcrumb metadata; consistent visible/schema dates; section links and keyboard focus; all 6 article-linked internal page paths returned HTTP 200; incoming links from /insights and /services navigated to the article; affected sitemap dates match. Screenshots were inspected at desktop and narrow mobile for readable hero/body/example/CTA presentation. Browser evidence is in docs/evidence/article-2026-10-25.json; full screenshots are retained in the October 25 task evidence folder. Git diff --check passed. These are emulated browser checks, not physical-device tests or Search Console verification.

## Dependency reconciliation: October 25, 2026

PR28 merged at 17:15:51 UTC as 6f3f1c0df15cef98c86f830a1c2e9421d65ecc1d. Fresh connector comparison and local ancestry inspection confirm main is three commits ahead and zero behind the original film baseline. Its additional changes are the SEO identity/FAQ work and current-film demo transcript page; the action-approval article is absent. The film manifest, media delivery, site shell, hosting configuration and dependency lock match the original production baseline.

Merged current main into the retained article branch without rewriting existing history. Sitemap retains the demo route and updated older-article dates, adds the approval article, and updates only Services/Insights dates for this article. The expected sitemap count is 29 (main 28 plus this article). PR25/26 themselves need not be merged because their relevant production source is now included on main. The article text remains unchanged. Retarget existing PR27 to main and require fresh exact-head editorial, build, tests, lint, responsive, links, metadata and hosted checks before merge. Production verification still follows existing hosting, not source reconciliation alone.

## Reconciled-source verification

The full npm test path passed: production Worker build, artifact validator, complete public R2 media hash guard and all 32 Node tests. npm run lint and git diff --check passed. The 29-route metadata sweep includes the existing demo page and new article. Fresh Chromium checks at 1440x900, 390x844 and 360x800 passed metadata, indexability, Article/Breadcrumb schema, dates, all six internal article page destinations, section navigation, keyboard focus, incoming Services/Insights links and affected sitemap dates, with no horizontal overflow or page errors. Refreshed docs/evidence/article-2026-10-25.json includes the current main layout schemas. Desktop and narrow-mobile screenshots were inspected.

Independent reconciled-source review confirms the article hash remains 44d5a75ab7c6ce26ba53d34ddb7901f778dc6e26acaf5d6a66a226826d6ad721 and owner files match main. The final committed head and hosted check results belong in the PR receipt. The live homepage, product and current-demo contents were captured before article publication for an after-release preservation comparison. No TTP changes were made.
