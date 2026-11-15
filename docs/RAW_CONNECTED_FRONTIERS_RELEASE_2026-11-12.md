# RAW website — Connected Frontiers and search release

## Customer outcome

RAW remains the consultancy. Connected Frontiers replaces the former RAW Business Workspace product promotion in the homepage, navigation, footer, services, examples, About page, inquiry choice and organization metadata. Product links lead to the appropriate Connected Frontiers platform, industry and implementation pages. The old product and demo URLs permanently redirect to the new product overview; old query data is not forwarded to the separate domain. Legacy media URLs remain available, but the old footage is no longer presented as a demonstration of Connected Frontiers.

The release also publishes the existing action-approval guide, aligns the three older articles' visible FAQs and JSON-LD, retains accurate publication dates, updates modification dates, and links the previously isolated small-business service page. Only canonical public pages remain in the 27-URL sitemap.

## Production reconciliation

Before release, Cloudflare deployment bbe9d4c8-904b-403c-bbd7-7f2881b23f43 served version 5acff681-c9af-4d7d-b778-dad919156e91 at 100%. The PR29 handoff receipt associates that version with c823d97c7ffe50b19d84b6a5c807d248df2ed2ce. Main had different films and an older private gateway.

The release integrates current main's search work and preserves the deployed gateway, its Social sign-in tests, public film files, posters, captions, transcripts and media manifest byte for byte from c823d97. No secret values, binding values, authentication rules, databases or private application content are changed. Existing R2 objects are verified rather than uploaded or overwritten.

## Completed local validation

- Clean locked install; production Worker build and artifact validation pass.
- All 35 existing/updated website tests pass, including all sitemap routes, FAQ visibility, legacy redirects, the current private-gateway boundaries and media hashes.
- Full remote R2 checksums match both retained public movies (8,823,342 and 16,116,583 bytes).
- The reconciled private gateway and retained public media/assets/manifest have no diff against c823d97.
- Lint and whitespace checks pass.

Preview rendering, remote build, production publication and live verification will be recorded separately after they actually occur. Search rankings and indexing are not deployment acceptance criteria and are not guaranteed.
