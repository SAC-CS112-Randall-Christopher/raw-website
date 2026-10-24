# RAW Business Workspace offer

The public product page is `/raw-workspace`, with a featured homepage placement,
main navigation and footer links. The page uses the existing booking and contact
paths. No product price or self-service signup availability is asserted.

At the owner's request, the homepage now embeds the finished **80-second
highlight** and `/raw-workspace#see-it-in-action` embeds the **3:59 full demo**.
Both use the actual RAW desktop interface and fictional Pine Ridge Rental &
Service data. Provider authorization happened privately; the verified connected
assistant used the existing eligible ChatGPT subscription. Processing waits are
condensed and labeled. The assistant supplied reply wording in chat; the owner
copied it into an editable unsent capture draft and created the follow-up.
No email was sent. Recurring delivery and universal subscription compatibility
are not claimed.

Current film source: DMPH commit `e233f2a0366861c05e4101bda5fcc94f2ab3ed27`,
`deliverables/raw-demo-video/`, reviewed in DMPH PR #4. The filmed application is
`sb_harness` feature `df00f4742a7f1d3512dc18bae316e27a51f5ca38` plus the verified
timestamp/source-scope fixes at `c3a3864f83ad36d749394fa7812dec59ea99df1f`
(sb_harness PR #58). Existing still screenshots remain actual captures from
`453aa5ccb844dbc26a64979393e6266d52b6d43a` with synthetic records.

The media pipeline and full capture provenance are in the user's DMPH
repository. Website asset hashes, source hashes, exact durations/frame counts
and unchanged audio-packet proof are in `docs/raw-demo-media.json`. The page includes
SoftwareApplication, FAQPage, VideoObject and breadcrumb structured data plus
unique canonical and social metadata. This makes the product information
explicit and accessible; it is not a guarantee of indexing or AI citations.

Assets are served from `public/products/raw-workspace/` through the site's
existing Cloudflare static assets. No new hosting, storage binding, account,
analytics service or paid media dependency was added. Both players use native
controls, inline playback, `preload="none"`, a poster and default English WebVTT
captions; they do not autoplay. The full transcript is linked on both pages.
Both videos are 1080p H.264/AAC with fast-start metadata. The highlight is the
exact reviewed export. The full demo is a 24,454,900-byte web derivative made
with FFmpeg/libx264 slow CRF 22 and copied AAC audio; it retains all 7,170 frames,
239.018 seconds and the original audio packets. This fits the existing
[25 MiB static-asset limit](https://developers.cloudflare.com/workers/platform/limits/#static-assets).
All promotional copy avoids trials and pilots.

Run `npm test` for the production artifact and all rendered-page checks. The
product test checks the destination, page copy, metadata, visible FAQ/schema
agreement, both player destinations, captions and byte-exact packaged assets.
Live deployment/browser results are recorded in `docs/raw-demo-publication.md`.
