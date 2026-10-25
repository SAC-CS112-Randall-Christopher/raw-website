# RAW Business Workspace offer

The product page is `/raw-workspace`, with a featured homepage placement and
main-navigation/footer links. It uses the existing booking/contact paths. No
price or self-service signup availability is asserted. Contact consent,
honeypot and fallback behavior remain intact.

The homepage embeds the **1:43 highlight**; the product page embeds the
**3:33 full demo**. Both use actual Pine Ridge Rental & Service recordings,
genuine connected AI answers and owner-approved **Ryan** narration. The films
connect existing business information, RAW-owned database fields, inspectable
reports, contextual email drafts, planner tasks and calendar blocks.

AI reads the newly saved delivery instructions, answers the 961-account inquiry,
and offers a follow-up from Maya's message. After owner approval it creates the
personal task and October 26th, 9–9:30 AM Denver calendar block, before the
October 28th rental. The owner reviews the $2,250 rental subtotal and editable
unsent reply. Availability, delivery and unconfirmed charges remain pending.
The imported email sample sends nothing. Source refresh preserves RAW-owned
fields and linked work.

Current film source is DMPH
`ae7d57c6675d1e4b2f6dcab294738025236c1027`,
`deliverables/raw-workspace-connected/` (DMPH PR 4). The filmed application is
`2f0fded11aefe20c4050b39091bcefd717257ce6` (RAW PR 60), retaining the existing
fictional business and earlier data. Existing still screenshots remain actual
captures from `453aa5ccb844dbc26a64979393e6266d52b6d43a` with synthetic records.

The media pipeline, original narration/footage, native edits and safe service
receipts live in DMPH. `docs/raw-demo-media.json` pins all eight exact public
assets and their source commit. Both MP4s are byte-identical to the reviewed
1080p/30 H.264/AAC fast-start exports, with 3,087 / 6,377 frames and unchanged
AAC packets. Each fits the existing Cloudflare asset limit.

Players have controls, inline playback, `preload="none"`, distinct viewing
posters and default English captions. Each has its own transcript and actual
MP4 attachment download link. They do not autoplay. The structured product,
FAQ, video and breadcrumb data match visible content and media metadata;
this does not guarantee search indexing or AI citations.

No new hosting, account, storage binding, analytics service or paid dependency
was added. The existing Worker, booking/contact paths and protected gateway
are preserved. Promotional copy avoids trials and pilots.

Run `npm test` for the production artifact and rendered-page/asset checks.
The browser checker verifies desktop/mobile playback, caption/range bytes,
actual downloads, client navigation and exact full HTTP hashes. Deployment
and live results are recorded in [raw-demo-publication.md](raw-demo-publication.md).
