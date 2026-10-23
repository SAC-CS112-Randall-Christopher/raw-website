# RAW website video publication

Published on 2026-10-23 using the owner's existing Cloudflare Worker and
authorized local Wrangler session. The requested placements are live:

| Placement | Public page | Film |
| --- | --- | --- |
| Homepage featured RAW product | [randallautomationworks.com](https://randallautomationworks.com/#workspace-offer-title) | 80-second highlight |
| RAW product demonstration | [RAW Workspace: see it in action](https://randallautomationworks.com/raw-workspace#see-it-in-action) | 3 minutes 59 seconds |

Each player has native controls, inline playback, an opening poster and default
English captions. Videos load after the visitor starts playback. The homepage
links directly to the full demo, and both pages provide a transcript. The copy
identifies fictional Pine Ridge business data and condensed processing waits.

## Published artifacts

The source films are preserved in
[DMPH PR #4](https://github.com/SAC-CS112-Randall-Christopher/DMPH/pull/4),
commit `e233f2a0366861c05e4101bda5fcc94f2ab3ed27`. The website implementation
was built and deployed from commit `3b6935f0b9260d9b92222217fd86b64e549d63da`.

| Public asset | Duration | Bytes | Format |
| --- | --- | --- | --- |
| [raw-highlight.mp4](https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4) | 80.042 seconds | 11,562,703 | 1080p H.264, AAC stereo |
| [raw-full-demo.mp4](https://randallautomationworks.com/products/raw-workspace/raw-full-demo.mp4) | 239.018 seconds | 24,454,900 | 1080p H.264, AAC stereo |

The highlight is the original export byte for byte. The full demo was encoded
for the existing static asset size limit with FFmpeg/libx264, CRF 22, slow
preset and fast-start MP4. All 7,170 video frames remain, and the original AAC
audio packets were copied unchanged. Both packaged films passed complete
decoding and fast-start checks. Exact source and publication SHA-256 values,
codec details and audio packet hashes are in [raw-demo-media.json](raw-demo-media.json).

## Deployment and seeking

- Existing Worker: `randall-automation-works`.
- Production version: `713028df-b08b-481f-8d2b-13cd4caeb7da`.
- Deployment time: `2026-10-23T22:47:54.777Z`.
- Wrangler's deployment listing confirmed that version receives 100% of traffic.
- Previous production version: `501465ca-73c5-4a2d-b9cc-c28ed32c91d3`.

Real browser verification exposed that direct static Assets responses ignored
byte-range requests, preventing reliable seeking. Only the two new public MP4
paths now run through the existing Worker first. Their complete Assets streams
populate content-hash-keyed native Cache API entries with the independently
verified artifact lengths; Cloudflare then serves requested ranges. This does
not buffer or manually slice the films in JavaScript. Client cookies,
authorization headers and query strings do not enter the cache. Public browser
responses revalidate, so a later replacement at the same URL is not hidden by
a long browser cache lifetime.

The protected studio gateway keeps its existing routing priority. Deployment
preserved the existing dashboard-managed variables and secrets. No storage
bucket, account, subscription or paid service was added. New spend: **$0**.

For rollback, the previous production version remains the durable reference.
Inspect the current deployment and use the existing authorized Wrangler
rollback command for the explicit version above. Rollback is not part of this
publication. The new public assets and the previous promotional asset URLs are
preserved in repository history.

## Verification

- Production build and all **28 tests** passed; no failed or skipped tests.
- ESLint and Wrangler deployment dry run passed.
- Independent Codex review found no material issue in the implementation,
  media derivative or range-serving correction. Its five focused tests passed.
- Fresh local Wrangler preview: four browser cases passed; see
  [preview verification](raw-demo-preview-verification.json).
- Live custom domain: desktop 1440 × 1000 and mobile 390 × 844 Chromium checks
  passed for both players. These exercised keyboard playback, default English
  captions (21 highlight cues / 63 full-demo cues), middle/end seeking,
  navigation through the actual homepage link, poster/caption/transcript
  availability, no initial MP4 download and no autoplay. Both films returned
  **206** for `bytes=1024-2047`, matching the exact packaged bytes. No JavaScript
  page errors or horizontal overflow were observed.

- Both live films also played from beginning to end at **normal speed (1×)**,
  reaching 80.042 and 239.018 seconds with `ended: true` and no media error.
  This is an automated playback check, in addition to the source-film review;
  it does not imply a new subjective listening review on every device.

The complete receipt, including progress samples, is in
[live verification](raw-demo-live-verification.json).

Captured live layouts: [desktop highlight](evidence/raw-demo-live-desktop-highlight.png),
[desktop full demo](evidence/raw-demo-live-desktop-full-demo.png),
[mobile highlight](evidence/raw-demo-live-mobile-highlight.png) and
[mobile full demo](evidence/raw-demo-live-mobile-full-demo.png).

Reproduce the checks using the existing local Playwright/Chromium runtime:

```sh
python scripts/check_raw_demo_publication.py \
  --base-url https://randallautomationworks.com --label live --complete
```

The script requires the existing Chromium path (or `--chromium`) and writes
receipts and screenshots under ignored `outputs/browser-live/`. Mobile checks
use Chromium mobile viewport/touch emulation; they do not certify Safari or
every physical phone. The source-film review and product demonstration limits
remain documented in DMPH's delivery handoff.
