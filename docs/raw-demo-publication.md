# RAW website video publication

The revised films were published on October 23, 2026 on MAIN (October 24 UTC),
using the existing Cloudflare Worker and authorized local Wrangler session.

| Placement | Public page | Film |
| --- | --- | --- |
| Homepage featured RAW product | [Randall Automation Works](https://randallautomationworks.com/#workspace-offer-title) | 89-second highlight |
| RAW product demonstration | [RAW Workspace: see it in action](https://randallautomationworks.com/raw-workspace#see-it-in-action) | 3 minutes 43 seconds |

Both native players have controls, inline playback, a poster, default English
captions and transcript links. Playback begins after the visitor starts it.
The homepage links to the full demonstration. Copy identifies fictional
Pine Ridge Rental & Service data, private sign-in and condensed processing waits.

## What the revised film proves

The owner types a real account question. The connected assistant returns 961
active accounts, including 15 unknown types, followed by the native chart and
supporting records. A fresh email inquiry reads Maya's actual fictional request
and returns a summary and reply wording. The owner saves that exact wording as
an editable, unsent draft and creates a linked task and internal calendar block
for October 26, 9:00–9:30 a.m. America/Denver. The full film also shows report
history, a weekday 8 a.m. report schedule, financial evidence and dated readings.

VoiceStudio uses the installed KittenTTS Hugo preset at speed 0.92. There is
no narration acceleration after generation; music is quieter at -36 dB.
All recording, narration, recognition and rendering used existing local tools
and hardware. Existing ChatGPT authorization supplies the actual inquiries.

## Published artifacts

Source master commit:
[d0e0443f9c0207fa5118ef3669ec1a2227a01d77](https://github.com/SAC-CS112-Randall-Christopher/DMPH/commit/d0e0443f9c0207fa5118ef3669ec1a2227a01d77),
folder `deliverables/raw-demo-revision`, in
[DMPH PR #4](https://github.com/SAC-CS112-Randall-Christopher/DMPH/pull/4).
The website was built, tested and deployed from
`a42b4fd85edc6ecdb75b567506cef5ec90c193c7`.

| Public asset | Duration | Bytes | Format |
| --- | --- | --- | --- |
| [raw-highlight.mp4](https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4) | 88.704 seconds | 8,372,432 | 1080p H.264 / AAC stereo |
| [raw-full-demo.mp4](https://randallautomationworks.com/products/raw-workspace/raw-full-demo.mp4) | 223.082 seconds | 20,139,719 | 1080p H.264 / AAC stereo |

The highlight is the reviewed source export byte for byte. The full web copy
uses libx264 slow CRF 22 to fit the existing 25 MiB static asset limit. All
6,692 frames and the exact original AAC packets remain; the duration and
captions are unchanged. Both packaged files pass complete decoding and actual
fast-start structure checks. Source/publication SHA-256 values, audio packet
hashes, dimensions and frame counts are in [raw-demo-media.json](raw-demo-media.json).
The original films remain preserved in Git history and the DMPH delivery.

## Deployment

- Existing Worker: `randall-automation-works`.
- Production version: `65e6df6c-604c-4fd0-beef-98b4dbb8147a`.
- Deployment time: `2026-10-24T00:18:01.881058Z`.
- Wrangler's fresh deployment listing confirms that version receives 100% of traffic.
- Previous production version: `713028df-b08b-481f-8d2b-13cd4caeb7da`.

The existing seekable-public-video path is retained. Only the two public MP4
paths run through the Worker and a content-hash-keyed native Cache API entry.
Complete Assets streams populate the cache; Cloudflare serves byte ranges.
The Worker does not buffer or manually slice whole videos in JavaScript.
Client cookies, authorization headers and query strings do not enter the cache.
Public browser responses revalidate when a film changes at its existing URL.

The protected studio gateway keeps its existing routing priority. Deployment
uses the existing owner account and preserves dashboard-managed configuration.
No storage bucket, paid API, new model, purchase or subscription was added.
New spend: **$0**. The previous version above is the explicit rollback reference;
no rollback was performed.

## Verification

- Production build and all **28 tests** passed, without failures or skips.
- ESLint and Wrangler deployment dry run passed.
- Independent Codex review found no material issue in the revised copy, code,
  media package or source provenance. Actual committed DMPH blobs match the
  source hashes. Sampled web frames preserve readable report, email, calendar
  and schedule details after compression.
- Local Wrangler preview: all four desktop/mobile browser cases passed,
  including native keyboard playback, default captions, exact 206 range bytes,
  middle/end seeking and navigation through the actual homepage link. See
  [preview verification](raw-demo-preview-verification.json).
- Live custom domain: all four desktop/mobile cases passed, with 19/49 loaded
  default English caption cues, exact 206 range bytes, correct client navigation,
  no autoplay/initial MP4 download, no horizontal overflow and no page errors.
  All six complete HTTP response hashes and byte counts match the media manifest.
- Both public films played from beginning to end at **normal speed (1x)**,
  reaching 88.704 and 223.082 seconds with `ended: true`, without media or page
  errors. See [live verification](raw-demo-live-verification.json) and the
  [local command logs](evidence/raw-demo-local-checks.txt).

Verified live layouts:
[desktop highlight](evidence/raw-demo-live-desktop-highlight.png),
[desktop full demo](evidence/raw-demo-live-desktop-full-demo.png),
[mobile highlight](evidence/raw-demo-live-mobile-highlight.png) and
[mobile full demo](evidence/raw-demo-live-mobile-full-demo.png).

Reproduce with the existing local Playwright/Chromium runtime:

```sh
python scripts/check_raw_demo_publication.py \
  --base-url https://randallautomationworks.com --label live --complete
```

The checker verifies all six complete HTTP response hashes against the media
manifest, in addition to native player behavior and byte-range seeking.
Mobile checks use Chromium viewport/touch emulation; they do not certify
physical phones or Safari. Complete playback and local ASR do not establish
human preference for the synthetic voice or a physical speaker listening test.

## Demonstration limits

AI reads permitted records, answers the report question and prepares reply
wording. The owner saves the draft, task and appointment. The existing
assistant's retained private correspondence context correctly prevented shared
AI writes; a separate narrowed connection did not finish provider setup.
Neither failure is presented as a successful AI save. No email or invitation
was sent, no equipment booking was confirmed, and recurring execution/email
delivery are not demonstrated. The configured report schedule has no run yet.

The separate protected-studio owner-password initialization still requires
its hidden local prompt. This public-video update does not complete that setup.
Complete source-film proof and limitations are in the DMPH revision handoff.
