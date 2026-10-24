# RAW public video storage

Chris authorized a separate R2 media bucket and use of the existing account's
R2 billing on 2026-10-24. The public films no longer need to fit the Workers
static-assets 25 MiB per-file limit. This does not improve old source footage;
the next edit still requires sharper captures and complete, readable framing.

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

Primary references: [public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/),
[CORS](https://developers.cloudflare.com/r2/buckets/cors/),
[pricing](https://developers.cloudflare.com/r2/pricing/).
