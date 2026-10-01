# RAW article publication receipt — September 30, 2026

- Title: **Route first, reason when needed**
- Canonical URL: https://randallautomationworks.com/insights/route-first-reason-when-needed
- Repository: `SAC-CS112-Randall-Christopher/raw-website`
- Branch: `codex/article-route-first-20260930`, isolated from the previous SEO work.
- Pull request: [#15 — Publish RAW article: Route first, reason when needed](https://github.com/SAC-CS112-Randall-Christopher/raw-website/pull/15).
- Article content commit: `184a1f897ed497ce92d3e2798c6d8d42dbb08e6f`; the linked PR identifies the final reviewed revision and merge commit.
- Base: verified `main` at `cdd798c42ccd781b0a44902d29d19ebaeb802b7d` (PR #14 merged).
- Publication date: September 30, 2026 in Colorado; October 1 UTC.
- Authorization: the owner approved this catch-up article and the existing draft PR → checks → merge → Cloudflare automatic deployment workflow.

## Topic deduplication

This article covers bounded small-model routing, deterministic application validation
and authorization, larger-model reasoning and synthesis, clarification/fallback,
end-to-end evaluation, maintainability, and Tev1's model/license limitations.
The work-order example is explicitly fictional and read-only.

The next Sunday article run must inspect the current Insights index, this receipt,
and merged article PRs. Treat this title and topic as already covered once this PR
is merged. Do not republish it under a different title as the missed article.

## Public sources checked

Checked October 1, 2026 UTC / September 30, 2026 MDT:

- [Together AI's Tev1 model card](https://huggingface.co/togethercomputer/Tev1-4B-experimental): a language-model fine-tune for bounded decisions; weights release license being finalized; evaluated behavior has stated limits.
- [Tev1 repository](https://github.com/togethercomputer/tev1): code and original documentation MIT licensed; model weights and dataset terms separate.
- [Ollama's Tev1 documentation](https://ollama.com/library/tev1): confidence describes option-probability concentration, not chance of correctness.
- [OWASP query parameterization](https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html) and [prompt injection prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html): query and application permission boundaries.

No private implementation details, records, benchmark numbers or model stack are
published. No ROI, performance, accuracy or client-result claims are made.

## Publication evidence

- `npm test`: the verified Vinext build and artifact checks passed; all 14 rendered-page tests passed, including distinct indexable metadata for all 23 sitemap routes. The existing expected sitemap count was updated for the added article.
- `npm run lint` and `git diff --check`: passed.
- Isolated installed Chrome: 1440px desktop, 390px mobile and 360px mobile passed title, description, self-canonical, Article dates, single heading, indexability, anchor targets and overflow checks. Screenshots were visually inspected. All 29 internal linked paths returned HTTP 200.
- Insights card navigation, the incoming software-integration example link, and the contact page's existing consultation booking destination passed. No form was submitted.
- Local browser evidence is retained under `.sites-runtime/article-review/`, outside Git. This preview verifies layout and interaction, not production performance.

Publication uses the existing RAW Cloudflare integration. Verify the final PR head
and its Cloudflare check before merge, then verify the live article, index, incoming
link and sitemap before claiming publication. Merge status and deployment evidence
belong to the linked PR and its check; this receipt's presence alone is not proof
of a completed deployment.

The previously documented edge-rule 403 is outside this article's scope; no retry
or settings change is required.
