# RAW weekly article - October 4, 2026

- Title: **Before an AI assistant reads your SOPs, name the current version**
- Canonical URL: https://randallautomationworks.com/insights/prepare-sops-for-ai-assistant
- Repository: `SAC-CS112-Randall-Christopher/raw-website`
- Branch: `codex/article-current-sops-20261004`
- Base: `0c096edd51c527302f2252270ee4a01a927e6384` on `main`.
- Draft publication PR: [#17](https://github.com/SAC-CS112-Randall-Christopher/raw-website/pull/17).
- Verified content commit: `396905d271a1cf8cee1dbe1d7ee48d945ea7e4ad`; the PR identifies the final revision including this receipt update.
- Status: local quality gates passed. The linked PR will record the merge commit and completed live verification; check it before retrying this topic.
- Authorization: Chris's standing authorization and the October 4 delegation authorize article-only merge and normal hosting publication after substantive quality and verification pass.

## Editorial decision and deduplication

Reader: a Western Colorado service-business owner considering an internal knowledge assistant.
Buying question: are the current procedures ready to connect, or does ownership/version cleanup need to happen first?
Contribution: a six-field source register, a three-document synthetic closeout example, and replacement/withdrawal/conflict/access/failed-refresh acceptance checks.
Destinations: Services, AI assistant setup overview, first-project guidance and Contact.
Incoming contextual link: the internal knowledge/runbook example on `/workflow-automation-examples`; the Insights index features the new article.

Read the five prior articles, current public service/setup pages, open RAW PR #6, and the September 30 receipt. The September 30 model-routing article is already published through PRs #15 and #16 and is not repeated here. Both proposed October 4 article URLs returned HTTP 404 in the live preflight.

## Sources and factual boundaries

Primary sources checked October 4, 2026:

- [Microsoft: view file version history](https://support.microsoft.com/en-us/sharepoint/data-and-lists/view-the-version-history-of-an-item-or-file-in-a-list-or-library): version history tracks earlier versions when enabled; business approval is a separate decision.
- [Microsoft: design and develop a RAG solution](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide): the ingestion/search-index pipeline is separate from answering; representative documents and queries support evaluation.
- [RAW Services](https://randallautomationworks.com/services) and [AI assistant setup](https://randallautomationworks.com/responsible-ai-and-security): current public service scope.

All example business details, documents and workflow states are explicitly synthetic. No customers, private systems, savings, prices, accuracy figures, certifications or firsthand experience are invented. No factual owner question is required to publish this synthetic guidance.

## Local verification

- The bounded Vinext production build and packaged Worker artifact validation passed. The 14 existing rendered-page tests passed after updating the added route count and the changed pages' expected sitemap dates.
- `npm run lint` and `git diff --check` passed.
- A single isolated Chrome session checked 1440px desktop, 390px mobile and 360px mobile: unique title/description, self-canonical, indexability, Open Graph Article dates, Article/Breadcrumb JSON-LD, one H1, visible date, section anchors and no horizontal overflow.
- All 29 internal links returned HTTP 200. Insights navigation, the contextual incoming link, robots and the single dated canonical sitemap entry passed. Screenshots of the hero, synthetic example and next step were visually inspected.
- Evidence is retained outside the repository in `../review/raw-local/` and `../review/preflight/`.

Windows sandbox process restrictions required approved execution of the existing build/test/lint tools. No runtime, dependency, hosting, credential, security, legal, subscription or edge-rule settings changed. Verification does not establish search ranking, real-device performance or customer results.
