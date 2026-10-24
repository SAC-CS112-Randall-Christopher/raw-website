# RAW connected-workspace films

The Ryan revision introduces RAW as a connected business workspace: supported
AI, existing business information, added database fields, reports, email,
planner and calendar work. Both films use actual Pine Ridge Rental & Service
interface recordings and genuine assistant results, with independent scripts.

| Placement | Page | Film |
| --- | --- | --- |
| Homepage | [Randall Automation Works](https://randallautomationworks.com/#workspace-offer-title) | 1:43 highlight, 102.912 seconds |
| RAW Business Workspace | [Full demonstration](https://randallautomationworks.com/raw-workspace#see-it-in-action) | 3:33 full demo, 212.586 seconds |

Both players have native controls, inline playback, distinct viewing posters,
default English captions and a transcript. They do not autoplay or download the
MP4 before interaction. Real **Book a demo** and **Download MP4** links sit beside
the players. The homepage's actual client link opens the full demonstration.

## Verified product evidence

The owner adds Delivery instructions for Alder Grove Landscaping: **Use the
north gate. Call Maya 30 minutes before arrival.** A genuine AI tool call reads
that saved field and combines it with existing customer information. The report
inquiry returns **961 active accounts**, including 15 unknown types; its chart
opens supporting records. The Pine Ridge variant has **401**, retaining the
original report.

Maya requests three days starting **October 28th, 2026**. The listed $750/day
rate gives a **$2,250 USD rental subtotal**; availability, delivery and other
charges remain pending. The owner reviews the quote and editable unsent reply.
The assistant offers a follow-up, asks when, and creates the approved
high-priority personal task and **October 26th, 9–9:30 AM America/Denver**
My-calendar block. Both stay linked to the customer and source email. The
assistant's actual conversation is restored across pages.

The full film also shows the **$180 discrepancy to investigate**, a dated
**1,420-hour reading** against a **1,350-hour service target**, and a completed
recurring report run. A normal owner import replaces snapshot 2 with snapshot 3,
correcting only a fictional telephone number while retaining all 1,201 rows,
RAW fields and linked work. The completed import status and preserved record
are visible. The original source export remains unchanged.

The proactive email follow-up is in
[RAW PR 60](https://github.com/SAC-CS112-Randall-Christopher/sb_harness/pull/60),
source `2f0fded11aefe20c4050b39091bcefd717257ce6`.

## Media and safe publication

The exact eight public assets come from DMPH
`ae7d57c6675d1e4b2f6dcab294738025236c1027`,
`deliverables/raw-workspace-connected/`, in
[DMPH PR 4](https://github.com/SAC-CS112-Randall-Christopher/DMPH/pull/4).
That delivery includes both MP4s, posters, captions, transcripts, original Ryan
narration, selected recordings, portable native MLT edits and safe review
evidence. All 236 manifested delivery files were checked against both working
bytes and exact committed Git blobs.

Both MP4s are copied **byte for byte**, without further web compression:
1080p/30 H.264, AAC 48 kHz stereo and fast-start. Sizes are **8,666,156** and
**17,708,958 bytes**, within the existing asset limit. Caption counts are
**27 / 58**. [raw-demo-media.json](raw-demo-media.json) pins source commit,
all asset hashes, durations, frame counts and unchanged AAC-packet checks.

The approved **Ryan** voice uses pinned local Qwen3-TTS 1.7B CustomVoice at
natural speed. Dates are spoken with ordinal endings. Local FFmpeg and native
MLT finish the edit; offline speech recognition supports review. The owner
selected Ryan in the existing phone audition. **New spend: $0.**

The two public MP4s retain the existing content-hash-keyed Cloudflare Cache API
path. Native range responses do not buffer or slice films in JavaScript.
`?download=1` adds a Content-Disposition attachment header only to the outgoing
response, leaving shared playback cache entries intact. Credentials, cookies
and visitor queries are not forwarded to the asset origin or shared cache.

The existing `randall-automation-works` Worker and its protected gateway retain
their configuration. `keep_vars` preserves existing authorized bindings. No
new account, storage service, paid endpoint or hosting upgrade is introduced.

## Release checks

The delivery passed complete decode, caption timing, chronological encoded
frame inspection, decisive action inspection, offline speech recognition,
desktop/390px captures, independent Codex review and full **1×** playback with
exact served hashes. This source evidence is separate from website publication.

For this release, the production build and all **29 tests** passed with no
failures or skips. ESLint, artifact validation and Wrangler dry run passed.
The local preview passed four desktop/390px playback cases, client navigation,
default 27/58 captions, exact 206 bytes and all eight HTTP asset hashes. All four
actual MP4 downloads completed with matching filenames, lengths and hashes.
See `raw-demo-preview-verification.json` and `evidence/raw-demo-local-checks.txt`.

Reproduce the browser checks with the actual preview or live custom domain:

```sh
python scripts/check_raw_demo_publication.py \
  --base-url https://randallautomationworks.com --label live --complete
```

The checker exercises desktop and 390px layouts, actual client navigation,
default captions, keyboard playback, exact 206 range bytes, all eight complete
HTTP hashes, and the actual MP4 download link/filename/bytes on both layouts.
`--complete` plays both films beginning to end at normal speed. Current release
results are recorded in `raw-demo-preview-verification.json`,
`raw-demo-live-verification.json`, `raw-demo-deployment.json` and
`evidence/raw-demo-local-checks.txt`.

The live custom domain passed all four cases and all four actual downloads;
all eight complete HTTP asset hashes match the package. Both public films
completed **1× playback**, ending at **102.912 / 212.586 seconds**, with no
media or page errors. Independent Codex review accepted source, eight asset
matches and all preview layouts. No hosted CI result is claimed.

Production source is `0565eab3754b045c08ec07598d48386253a751b6`.
Worker version `b6cf7eb0-75c6-4789-a6fa-20e313f5b355` receives **100%** of
production traffic. The sanitized deployment receipt preserves the previous
version `29ba0f91-51a3-470d-95ef-5730939f18c3` for rollback. These are observed
deployment and live checks, separate from the local build.

## Limits

The email is a one-time **read-only sample**; no email or invitation is sent.
The owner saves added information and reviews drafts; AI creates task/calendar
work after approval. No equipment reservation, unconfirmed availability,
automatic source-system write, accounting certification, universal subscription
compatibility or all-local AI processing is claimed. Processing waits are
condensed and disclosed. Report email delivery needs separate approval.

Phone checks use Chromium viewport/touch emulation, not physical iPhone/Safari.
Dense source records are best viewed full screen. Native controls may cover the
small disclosure footer while paused; captions have their own top band.
Playback and speech recognition do not establish a human listening review.

The separate protected `/admin/dmph/` studio still needs the owner's hidden
local initial-password prompt. Its anonymous route returns **503**, with
no-store/private and noindex headers. The administrator is not initialized;
the guarded studio service is inactive while VoiceStudio and the tunnel run.
See `evidence/raw-demo-studio-status.json`. Video publication does not bypass
that setup. On MAIN, initialize through the hidden prompt, then start:

```powershell
& C:\Projects\DMPH-local-studio\scripts\initialize_admin_windows.ps1
& C:\Projects\DMPH-local-studio\scripts\manage_local_windows.ps1 -Action Start -Open
```

The account remains `DMPHstudio` and first login requires password replacement.
Passwords belong only in hidden local prompts, never chat or command arguments.
