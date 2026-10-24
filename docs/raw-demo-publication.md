# RAW result-led website video publication

The revised films give useful results priority over setup and routine navigation.
Each has independent narration, a distinct viewing poster, its own transcript
and a real adjacent invitation to discuss a business workflow.

| Placement | Public page | Film |
| --- | --- | --- |
| Homepage | [Randall Automation Works](https://randallautomationworks.com/#workspace-offer-title) | 1:15 highlight |
| RAW Business Workspace | [See it in action](https://randallautomationworks.com/raw-workspace#see-it-in-action) | 2:58 full demonstration |

Both native players have controls, inline playback and default English captions.
Playback starts after visitor interaction. The homepage's actual link opens the
full demonstration. Fictional data and condensed processing waits are disclosed.

## Demonstrated outcome

The opening shows **961 active accounts**, followed by the genuine connected
assistant inquiry, chart and contributing customer records. A narrower Pine Ridge
view has **401** accounts; the original saved report remains available.

Maya at Alder Grove Landscaping requests an excavator for three days starting
**October 28, 2026**. The actual source rate is **$750/day**, giving a **$2,250 USD
rental subtotal**. Availability, delivery, insurance and tax remain pending, and
the quote total is visibly unconfirmed. The assistant reads the imported message,
summarizes it and prepares reply wording using the reviewed quote. The owner
reviews and saves the unsent draft, then saves a task and linked internal calendar
block for **October 26, 10:00–10:30 America/Denver**, before the rental. Decisive
save actions and their readable results remain in the edit.

The full film also shows a **$180 discrepancy to investigate** between $84,000
of rental charges and an $84,180 control; a dated **1,420-hour** equipment reading
against a **1,350-hour** service target; and a genuinely completed scheduled report
run with an inspectable result. The original weekday **08:00** schedule was
restored afterward. No report email was delivered.

## Media and deployment

The source delivery, both native edits, selected original WebMs/WAVs, captions,
separate scripts and fictional service receipts are in `deliverables/raw-demo-result-led`
in [DMPH PR #4](https://github.com/SAC-CS112-Randall-Christopher/DMPH/pull/4).
The exact source commit and all eight asset hashes/byte counts are pinned in
[raw-demo-media.json](raw-demo-media.json).

Both MP4s fit the existing 25 MiB asset limit and are copied byte for byte from
the reviewed 1080p/30 H.264/AAC exports. There is no additional website compression.
The package checks original AAC packets, every frame, captions, complete decoding
and actual fast-start atom order.

VoiceStudio uses installed KittenTTS **Hugo** at speed **0.92**, no later speech
acceleration, and locally generated music at **−36 dB**. The preceding revision
already used this engine/preset; the changes are the scripts, timing, story and
framing. No new model, paid API, stock purchase, service or subscription was added.
**New spend: $0.**

The existing Worker is `randall-automation-works`. The sanitized
[deployment receipt](raw-demo-deployment.json) records its deployed source commit,
production version, 100% traffic assignment and prior rollback version. The
protected gateway keeps routing priority and `keep_vars` preserves its bindings.

Only the two public MP4 paths use the existing content-hash-keyed native Cache
API entries, populated from complete Assets streams. Cloudflare serves byte
ranges without JavaScript buffering or manual slicing. Browser responses
revalidate the stable URLs when films change. User credentials, cookies and
queries do not enter the video cache.

## Verification

See [preview verification](raw-demo-preview-verification.json),
[live verification](raw-demo-live-verification.json) and
[local check evidence](evidence/raw-demo-local-checks.txt) for actual-file proof.

The verified production build and all **28 tests** passed, with no failures or
skips. ESLint and Wrangler dry run passed. Independent Codex review accepted the
final films, all eight exact Git/source asset matches and all four preview
layouts without a remaining material finding. The live custom-domain checks
cover desktop/mobile default 43/18 caption cues, keyboard playback, exact range
bytes, navigation, no autoplay or initial MP4 download, and no page errors.
Both public films completed beginning-to-end playback at **1x**, reaching
**74.538** and **178.346 seconds** with `ended: true` and no media errors.
All eight complete HTTP response hashes match the reviewed package.

```sh
python scripts/check_raw_demo_publication.py \
  --base-url https://randallautomationworks.com --label live --complete
```

The checker verifies all eight complete HTTP response hashes, desktop and 390px
mobile layouts, default captions, native keyboard playback, exact 206 bytes,
seeking and the actual homepage-to-full-demo link. `--complete` also plays both
public films beginning to end at normal speed.

Mobile uses Chromium viewport/touch emulation, not physical phones or Safari.
Dense source records are best inspected full screen. Playback, local speech
recognition and loudness checks do not establish human voice preference or a
physical-speaker listening test.

## Demonstration limits

The incoming Gmail message is a **one-time read-only sample** with ongoing sync
off. AI reads, summarizes, reports and prepares wording; the owner saves the
draft, task and calendar block. No email, invitation, equipment reservation,
source-system write or accounting certification is implied. Access restrictions
remain active. Universal subscription compatibility and all-local AI processing
are not claimed. Provider sign-in was completed privately.

The source display correction is preserved in
[RAW PR #59](https://github.com/SAC-CS112-Randall-Christopher/sb_harness/pull/59).
The separate protected-studio password initialization still requires its hidden
local prompt. Public video publication does not complete that setup.
