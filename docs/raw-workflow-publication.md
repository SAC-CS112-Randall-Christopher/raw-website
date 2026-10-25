# Rebuilt RAW workflow films

Status: deployed and live-verified, October 24, 2026 (America/Denver).
Production Worker `a16eaa23-fe24-4eac-9ed5-c1d5d803f0bb` receives 100% of
traffic, deployment `647ce37d-6f6f-4677-b3fe-8d9b3f93649d` at
`2026-10-25T02:58:33.07122Z`, from website source
`1fed501c1b1b8414388396f6bc483eaa3fb9d6b4`. The preceding Copper version
`196707c1-105c-48e8-84b4-8a3870b90f90` remains available for rollback.

The owner's selected conversational Ryan B voice remains. The editorial
presentation is rebuilt around actual connected product workflows, following
the reference study in DMPH `docs/RAW_DEMO_REFERENCE_STUDY.md`. The useful report
appears in the opening seconds; the same customer connects correspondence,
RAW-owned information, an AI inquiry/result, a task and a calendar appointment.

| Placement | Duration | Exact reviewed SHA-256 |
| --- | --- | --- |
| Homepage highlight | 95.680s / 1:36 | 5cd983b6d0e3554008e74bdfb7540fc659e33e3107fece0784e8940faac94c8c |
| RAW Workspace full demo | 213.440s / 3:33 | 01dcb2d3f4895208cb33ec06de32961fbff0d8110605a9106b79e349aed98bd5 |

- [Homepage highlight](https://randallautomationworks.com/#workspace-demo)
  and [direct phone MP4 download](https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4?download=1).
- [Full RAW demo](https://randallautomationworks.com/raw-workspace#see-it-in-action)
  and [direct phone MP4 download](https://randallautomationworks.com/products/raw-workspace/raw-full-demo.mp4?download=1).

DMPH delivery source: `afec167490a8b6b6855c032c722c999bd655c6f2`,
`deliverables/raw-workflow-demo/`. Its independent review covers the exact
encoded pictures, factual mapping, caption placement and normal-speed
complete playback. The owner's creative approval remains separate. The
packet contains SRT/VTT captions, transcripts, separate decoded product-frame
posters, detailed workflow receipts and immutable R2 links for portable MLT
edits/original narration. All five complete R2 objects passed SHA-256 checks.

All eight website assets match that source byte for byte. MP4s stay in
`media/raw-workspace/`, outside the static asset directory; the existing
allowlisted Worker routes stream their content-addressed R2 objects. No
hosting-size recompression, source upscaling or additional audio encode occurs.
The final VTT files contain 27/53 cues and retain the phone-reviewed opening
placement. `docs/raw-demo-media.json` pins the exact assets and source commit.

The change builds on Copper source `a42904d025bc11f4864e8808767aa1c72f63c948`.
Pages, styles, booking actions, Worker/gateway implementation, Cloudflare
configuration and the owner's removed public download/transcript UI actions
are unchanged. Direct `?download=1` routes remain available for owner handoff.
The browser checker follows those actual URLs instead of requiring removed
page links.

Observed local verification: production build/artifact validation, complete
R2 movie hash guard, all 29 website tests, lint and Wrangler deployment dry
run pass. The current preview verifies both pages at desktop/390px sizes,
caption loading, keyboard playback, client navigation, seeking/ranges, four
actual attachment downloads and all eight public asset hashes. See
`raw-workflow-preview.json` and `evidence/raw-workflow-preview-*.png`.
Independent source/package/preview review found no material issue.

The deployment receipt `raw-workflow-deployment.json` confirms 100% traffic
and anonymous studio checks: login HTML 200, private state API 401, both private
and non-indexable. No owner password, session or private bucket was changed.
Both movie routes and static captions/posters use `max-age=0, must-revalidate`
on the website, avoiding an old browser-cached sidecar after this update.

`raw-workflow-live.json` records completed normal-speed public playback of
both exact films, no media/page errors, four desktop/mobile player cases,
four actual downloads and complete hashes of all eight public assets. Live
screenshots are preserved as `evidence/raw-workflow-live-*.png`. Both native
players finished with `ended=true` at rate 1. These are live browser checks,
not merely origin availability or a local candidate review.

GitHub reports `Workers Builds: randall-automation-works` SUCCESS on exact
publication source `1fed501c1b1b8414388396f6bc483eaa3fb9d6b4`; the separate
reported check metadata is in `raw-workflow-hosted-checks.json`. The local
29-test/build/lint evidence and the manual deployment/live results above are
separate proof stages. This draft PR stacks on #25 and does not merge it.

The production worktree is kept only while needed for this publication's
review; original DMPH sources and accepted native captures remain in the
separate DMPH production lane. Do not retire the owner studio runtime or
unrelated Copper/article worktrees as part of this media change.

The build uses existing WSL Node 24 and the exact locked dependencies. A slow
Windows-mounted dependency install was preserved in an ignored output folder;
the working `node_modules` link uses the ext4 cache at
`/home/rawfounder/.local/share/raw-website-builds/workflow-283dbdf55081`.
No dependency version or build pipeline was changed.

Physical-phone and owner creative acceptance remain separate from emulated
mobile playback. Dense records benefit from landscape/full-screen viewing.
No paid API/narration service was used. Existing authorized R2 billing covers
the public media; private True to Plan buckets and owner passwords are outside
this change.
