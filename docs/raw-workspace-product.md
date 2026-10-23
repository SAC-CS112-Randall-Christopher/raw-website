# RAW Business Workspace offer

The public product page is `/raw-workspace`, with a featured homepage placement,
main navigation and footer links. The page uses the existing booking and contact
paths. No product price or self-service signup availability is asserted.

The 24-second video and screenshots were made from the actual `sb_harness` app
at `453aa5ccb844dbc26a64979393e6266d52b6d43a`, using seeded synthetic business
records. A local production-mode display removes development-only interface
controls through the app's supported configuration. The recording signed in,
opened customer context, saved an equipment quote from source rates and ran an
equipment report. No external email was sent and no live AI-provider inference
was used in the product showcase.

The media pipeline and full capture provenance are in the user's DMPH
repository, `products/raw-workspace/` and `deliverables/`. The page includes
SoftwareApplication, FAQPage, VideoObject and breadcrumb structured data plus
unique canonical and social metadata. This makes the product information
explicit and accessible; it is not a guarantee of indexing or AI citations.

Assets are served from `public/products/raw-workspace/` through the site's
existing Cloudflare static assets. No new hosting, storage binding, account,
analytics service or paid media dependency was added. Captions are provided as
WebVTT, and the video is H.264/AAC with fast-start metadata. All promotional copy
avoids trials and pilots.

Run `npm test` for the production artifact and all rendered-page checks. The
product test checks the destination, page copy, metadata, visible FAQ/schema
agreement, captions and packaged assets. Desktop and 390px mobile layouts were
also checked in Chromium for overflow and console errors.
