# RAW article publication record: October 25, 2026

Idempotency key: raw-website/2026-10-25/ai-assistant-action-approval

Status: draft, publication blocked by the separate deployed owner lane.

Topic: AI Assistant Approvals: Decide What It Can Do Before It Acts.
URL: https://randallautomationworks.com/insights/ai-assistant-action-approval
Branch: codex/article-ai-assistant-approval-20261025
Base: feat/raw-workflow-films at 9c260360e61cacb70ab9da23ec9d068705e74a5d (PR26, stacked on PR25).

Reader: Western Colorado business owner buying an office/field assistant.
Buying question: what can the assistant change, who approves it and how is the outcome confirmed?
Distinct contribution: per-action approval record, synthetic task-versus-message-versus-booking handoff, uncertain-result reconciliation and five concrete acceptance tests. Develops action authority rather than repeating read-only integration readiness.
Destinations: services, RAW Workspace public demonstration, related integration checklist and contact. Incoming link: Services.

## Evidence
Microsoft Graph sendMail primary documentation checked October 25, 2026: https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0 . Its 202 response does not establish completed processing or delivery. The article limits this statement to that provider example. EX-104 and its workflow are explicitly synthetic educational material, not supported product functionality. RAW capabilities are bounded to the existing public demonstration and scoped configuration.

## Production dependency
PR26 remains draft/unmerged; live RAW uses its films and PR25 copper design. A main-based article deployment could roll back those changes. This article is stacked on PR26 to preserve the current design, but must not merge owner PRs or publish over their production lane. Release after that lane has reached main and fresh exact-head checks pass.

## Publication gate
Prepared dates are provisional October 25, 2026. Update visible/schema/index/sitemap dates together if publication occurs later. No publication is established by this draft receipt. Exact final head, PR checks, merge, deployment and live checks must be appended to the PR receipt after execution. Never create a second article for the same weekly topic on retry.

## Scope
Current repository guides, article inventory, prior publication records, live public product/early-access information and pending PRs were reviewed before topic selection. Existing layouts and navigation are retained. No application engineering, customer/employer data, fabricated customer outcomes, prices, savings, accuracy, search metrics or Search Console access. No provider calls that incur a fee or spending increase.

## Completed pre-PR checks

Production build, artifact validator, complete existing R2 media integrity guard, all 29 tests and lint passed. Updated existing sitemap test expectations for the added route and actually edited dates.

Independent editorial/source review found no material issue. The suggested TTP stain-grade package clarification was incorporated. Chromium production-preview checks passed at 1440x900, 390x844 and 360x800: no horizontal overflow or page errors; one H1; self-canonical; index/follow; Article and Breadcrumb metadata; consistent visible/schema dates; section links and keyboard focus; all 6 article-linked internal page paths returned HTTP 200; incoming links from /insights and /services navigated to the article; affected sitemap dates match. Screenshots were inspected at desktop and narrow mobile for readable hero/body/example/CTA presentation. Browser evidence is in docs/evidence/article-2026-10-25.json; full screenshots are retained in the October 25 task evidence folder. Git diff --check passed. These are emulated browser checks, not physical-device tests or Search Console verification.
