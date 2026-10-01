# RAW article publication receipt — September 30, 2026

- Title: **Route first, reason when needed**
- Canonical URL: https://randallautomationworks.com/insights/route-first-reason-when-needed
- Repository: `SAC-CS112-Randall-Christopher/raw-website`
- Branch: `codex/article-route-first-20260930`, isolated from the previous SEO work.
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

Draft PR and verification evidence will be recorded before merging. Publication
uses the existing RAW Cloudflare integration. The previously documented edge-rule
403 is outside this article's scope; no retry or settings change is required.
