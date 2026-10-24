# RAW public video storage

Chris authorized a separate R2 media bucket and use of the existing account's
R2 billing on 2026-10-24. The public films no longer need to fit the Workers
static-assets 25 MiB per-file limit. The subsequent sharp edit uses native
DPR2/DPR3 lossless captures, complete readable regions and one final video
encode. The owner subsequently selected **option B, conversational Ryan**. Its
accepted 1:48 highlight / 3:48 full-demo source is DMPH
`230a443b2b42c6163ebf95a6aa1afe2a2d0f291b`,
`deliverables/raw-workspace-ryan-b/`. The website copies all eight assets
unchanged; new origin/publication receipts use the `raw-ryan-b-*` prefix.
Both films and both lossless edit archives already pass complete public R2
hashes and exact ranges. Website cutover has separate preview/deployment/live
evidence and must not be inferred from origin availability alone.

The new films are now live and both completed normal-speed public playback.
See the [current production record](docs/raw-ryan-b-publication.md) for exact
source/deployment pins, hosted checks, downloads and independent review.

## Configured resources

- Bucket: `randall-automation-works-media`, Standard storage, Western North America.
- Public custom domain: `https://media.randallautomationworks.com`.
- Domain ownership and HTTPS certificate: active; minimum TLS 1.2.
- The rate-limited `r2.dev` development URL remains disabled.
- Browser CORS: GET/HEAD from the apex and www website origins only, with range
  and cache validators. Exact policy: [deploy/r2-media-cors.json](deploy/r2-media-cors.json).
- `truetoplan-project-documents-prod` is a separate bucket. Its objects,
  permissions, domains, lifecycle and application configuration were not changed.

Only approved public media belongs here. A public custom domain makes objects
retrievable by anyone who knows their path; CORS is not authentication.
Do not upload credentials, studio sessions, private project documents or account data.

## Publishing

Keep approved MP4s in `media/raw-workspace/`, outside `public/` and therefore
outside the generated Workers static assets. Preserve the source file and
update its exact bytes and SHA-256 in `docs/raw-demo-media.json`.

Upload each unchanged MP4 to:

```text
randall-automation-works-media/raw-workspace/<sha256>/<filename>.mp4
```

Run `npm run verify:videos` after the authorized upload. It verifies the local
files and streams the complete public objects through SHA-256 verification.
It is read-only and never treats a cached public 404 as permission to overwrite
an object. `npm run build` runs this check after artifact validation, so the
documented local and hosted publication paths verify R2 before changing a Worker.
For future automated uploads, use an atomic create-only write, such as R2's
`If-None-Match: *`, rather than a public existence check followed by a PUT.

Use the existing authorized Wrangler session, `r2 object put --remote --file ...`,
`--content-type video/mp4`, Standard storage, and
`--cache-control 'public, max-age=31536000, immutable'`. Never overwrite a
content-addressed object with different bytes. Hash the full public download
before changing the website publication manifest. Keep the last release for rollback.

The website's existing `/products/raw-workspace/raw-highlight.mp4` and
`raw-full-demo.mp4` URLs stream only their corresponding approved R2 objects.
They preserve R2 byte ranges and validators without buffering a film. Website
cookies, authorization headers and arbitrary query parameters never reach R2.
`?download=1` provides the same bytes with an attachment filename for phones.
The stable website URLs revalidate; immutable R2 URLs can be cached long term.

Captions, transcripts and posters remain normal static assets. Normal deployment
still requires the repository checks, independent review and live verification.

## Cost and evidence

The owner's current billing screenshots show 3.77 GB-months, zero billable
storage and $0 due. The earlier CLI 28.3 GB reading was current stored volume,
not the monthly averaged billing quantity. Do not describe it as a paid invoice.
R2 Standard includes 10 GB-months, one million Class A and ten million Class B
operations monthly; account-wide usage and Cloudflare's rounding determine any
overage. Internet egress is free. Standard storage beyond the allowance is
$0.015/GB-month. There is no new subscription, Stream activation or paid TTS/API.

Current verified public object hashes, ranges, conditional requests, CORS and
HTTPS are recorded in [docs/raw-r2-verification.json](docs/raw-r2-verification.json).
That receipt identifies whether it covers the R2 origin or the final website
cutover; do not treat an origin-only receipt as a deployed website check.

The original hosting cutover completed at source `bec63fca1782345825cc723bba6fc745da6eae7e`,
Worker version `e19bfba6-81d7-4c20-a27d-907204421e54` at 100 percent. The films
are byte-identical to the previous reviewed release. Both complete real-time
playbacks ended successfully, along with desktop/mobile captions, seeking,
downloads and full hashes. See [live checks](docs/raw-r2-live.json),
[preview checks](docs/raw-r2-preview.json) and the
[deployment receipt](docs/raw-r2-deployment.json). The sharper film edit and
new voice auditions are separate work; those original hosting receipts do not
represent the newer film revision.

## Previous sharp release — historical

The previous accepted films are 105.877s / 212.010s with 28 / 57 cues. They explicitly
show the connected-inbox workflow and retain Ryan with ordinal dates. Source and
website MP4s are byte-identical; public R2 full hashes and ranges pass before any
Worker change. The source delivery also preserves original narration and links
to verified lossless MLT edit archives. Uncropped account settings remain private.
The new website publication is now verified at source
`611af4832db898a3b6800a362b6322e006a7ba07`, Worker version
`170dfcf3-2ba5-4180-a6bd-1c1ccc97149d` at 100 percent, deployed on
`2026-10-24T17:02:56.422901Z`. The source passed Workers Builds. The previous
version `e19bfba6...` remains available for rollback. See the sanitized
[deployment receipt](docs/raw-polished-deployment.json) and exact-source
[hosted check](docs/raw-polished-hosted-checks.json).

Both exact public films completed normal-speed playback to 105.877 / 212.010
seconds, `ended=true`, with no media or page errors. Four desktop/390px cases,
four real downloads, eight complete asset hashes, 28/57 captions, exact 206
bytes, keyboard playback, seeking and client navigation pass. See
[live checks](docs/raw-polished-live.json),
[live images](docs/raw-polished-live-images/),
[preview checks](docs/raw-polished-preview.json) and
[origin/archive checks](docs/raw-polished-origin.json).
The independent reviewer accepted the exact source films, eight matching website
assets and fresh preview evidence. Phone checks use Chromium touch/viewport
emulation; they do not claim a physical iPhone/Safari test. Dense records are
best viewed full screen. The DMPH worktree remains for owner review/editing;
the temporary website checkout is retired after clean-state and remote proof.

The owner requested another local voice comparison. Five matched-volume MP3/WAV
auditions are available at
https://media.randallautomationworks.com/raw-workspace/voice-auditions/20261024-polish-1/index.html.
They remain public review copies. The owner chose option B; the new source
package above applies that exact Ryan instruction and seed 41 at natural speed.
Its per-scene narration and concatenations are sample-exact at 48 kHz. The
approved audition is distinct from subjective listening to every new sentence.

Primary references: [public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/),
[CORS](https://developers.cloudflare.com/r2/buckets/cors/),
[pricing](https://developers.cloudflare.com/r2/pricing/).
