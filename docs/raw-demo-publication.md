# Current RAW film publication

The selected Ryan B films supersede the release below. Use the
[current production record](raw-ryan-b-publication.md) and `raw-ryan-b-*`
receipts for the verified 1:48 highlight / 3:48 full demo and working downloads.

# Previous connected-workspace films — historical

The owner approved the Ryan films and requested a focused cleanup: remove
narrated data-origin and email-not-sent caveats, plus the matching editorial
labels, posters and public player descriptions. The verified product story,
actual source recordings, Ryan voice and spoken ordinal dates are retained.

The replacement package is deployed from website source
`ec36dd8a96c79732b6c4f5f97d91dc1ee54d4d35`. Worker version
`519a2143-daa8-4ba7-980a-80789a992669` receives **100%** of production
traffic. Live playback and download verification passed. The previous version
`b6cf7eb0-75c6-4789-a6fa-20e313f5b355` remains available for rollback.

| Placement | Public page | Replacement |
| --- | --- | --- |
| Homepage | https://randallautomationworks.com/#workspace-offer-title | Highlight: 1:37 / 96.981 seconds |
| RAW Business Workspace | https://randallautomationworks.com/raw-workspace#see-it-in-action | Full demo: 3:23 / 203.114 seconds |

Both players retain controls, inline playback, default English captions,
separate viewing posters, transcripts, a real booking link and anonymous
`?download=1` MP4 downloads. They do not autoplay or fetch the MP4 before use.

## Exact source package

DMPH source `b1de67e322a15365d7de80fbb28f563d8e702c99`,
`deliverables/raw-workspace-connected/`, contains the independently accepted
exports, original narration, selected recordings, portable native MLT edits,
SRT/VTT captions, transcripts and factual review receipts. All **211 manifested
files** match their working SHA-256 checksums and exact committed Git blobs.
Earlier source takes and finished versions remain preserved.

The website copies all eight reviewed public assets **byte for byte**:
1080p/30 H.264, AAC 48 kHz stereo and fast-start MP4, captions, transcripts and
the two viewing posters. The MP4s are **7,956,375 / 16,841,446 bytes** with
**26 / 55 caption cues**. `raw-demo-media.json` pins all eight asset hashes,
the source commit, durations, frame counts and unchanged AAC packets.

Both films retain the owner-approved local Qwen3-TTS **Ryan** voice at natural
speed, using ordinal dates. Production uses existing hardware, FFmpeg, native
MLT, Chromium and offline speech recognition. **New spend: $0.**

## Demonstrated work and review

The actual Pine Ridge Rental & Service story connects imported business
information and saved delivery instructions with a genuine AI answer,
inspectable **961-account** reporting, a **401-account** town variant,
contextual email summary/reply preparation and approved AI-created task/calendar
work. The rental begins **October 28th**; its linked follow-up is **October 26th,
9–9:30 AM America/Denver**. The quote remains a **$2,250 rental subtotal**,
with availability, delivery and other charges still pending.

The task-completion crop emphasizes the actual saved work/date result. The
calendar detail retains the timezone. No source pixels or business records
were rewritten. The full cut retains financial and maintenance evidence,
a completed recurring report, and snapshot 3 preserving RAW-owned work.
The underlying email-follow-up feature remains in
[RAW PR 60](https://github.com/SAC-CS112-Randall-Christopher/sb_harness/pull/60).

Both exact exports passed complete decoding, caption validation, local speech
recognition, independent Codex review of all eight chronological sheets,
decisive action frames, both posters and 40 desktop/390px samples. Both completed
**1x** local playback with exact served hashes, range responses and no media or
page errors. DMPH's **38 tests** passed. This is separate from website release
checks, physical-phone behavior and human listening preference.

## Website release checks

Run `npm test`, `npm run lint`, artifact validation and Wrangler dry run before
publishing. Then run the actual local preview and custom-domain checker:

```sh
python scripts/check_raw_demo_publication.py \
  --base-url https://randallautomationworks.com --label live --complete
```

The checker covers desktop and 390px layouts, native captions, keyboard
playback, actual homepage-to-full-demo navigation, exact 206 bytes, seeking,
all eight full HTTP hashes and four real attachment downloads. `--complete`
plays both public films at normal speed. All four live cases and downloads passed; all eight HTTP asset hashes match.
Both public films completed normal-speed playback at **96.981 / 203.114 seconds**,
with no media/page errors. Production build and all **29 tests**, ESLint, artifact
validation and Wrangler dry run passed. Cloudflare Workers Builds passed for
the exact deployed source. Current receipts are `raw-demo-preview-verification.json`,
`raw-demo-live-verification.json`, `raw-demo-deployment.json` and
`raw-demo-hosted-checks.json`.

The content-hash-keyed public MP4 cache and attachment handling are unchanged.
The existing Worker configuration, private gateway and authorized bindings
are preserved with `keep_vars`; no account, paid service or storage is added.
The separate protected studio still requires the owner's hidden local password
setup and start commands documented in `DMPH-STUDIO.md`.

## MAIN release runtime

Build and run Wrangler using the installed Linux Node runtime and Linux
`node_modules`. MAIN's actual existing Windows Wrangler config is selected
for the WSL Wrangler process with
`XDG_CONFIG_HOME=/mnt/c/Users/chris.t0/AppData/Roaming/xdg.config`.
Do not copy tokens, replace the user's home or use Windows Node with Linux
native dependencies. The default WSL config has no authorized session.
