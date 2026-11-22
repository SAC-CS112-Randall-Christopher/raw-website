import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/offline-field-inspection-sync-checklist";
const title = "How to Test Offline Field Inspections Before Rollout";
const description = "Test whether offline ArcGIS Field Maps or Survey123 inspections reach the office with the right asset ID, photo and follow-up before rolling out to your crews.";
const publicationDate = "2026-11-22";

export const metadata: Metadata = {
  title: { absolute: "Offline Field Inspection Sync Checklist | Randall Automation Works" }, description,
  alternates: { canonical: canonicalPath }, robots: { index: true, follow: true },
  openGraph: { type: "article", locale: "en_US", siteName: "Randall Automation Works", title, description, url: canonicalPath,
    publishedTime: publicationDate, modifiedTime: publicationDate, authors: ["Randall Automation Works"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};
const articleData = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: publicationDate, dateModified: publicationDate,
  mainEntityOfPage: `${siteUrl}${canonicalPath}`, image: `${siteUrl}/opengraph-image.png`,
  author: { "@type": "Organization", "@id": `${siteUrl}/#business`, name: "Randall Automation Works" },
  publisher: { "@type": "Organization", "@id": `${siteUrl}/#business`, name: "Randall Automation Works",
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo-horizontal.svg` } },
};
const breadcrumbData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
    { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}${canonicalPath}` },
  ],
};

export default function OfflineInspectionGuide() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="article-hero"><div className="shell article-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link></nav>
          <p className="eyebrow">GIS &amp; field operations</p><h1>{title}</h1>
          <p className="article-deck">Saving a record on a phone is only half the test. Prove that the office receives the right inspection, its photo and a clear exception when something goes wrong.</p>
          <div className="article-byline"><span>Randall Automation Works</span><span aria-hidden="true">&bull;</span><time dateTime={publicationDate}>November 22, 2026</time></div>
        </div></header>
        <div className="shell article-layout">
          <aside className="article-toc" aria-label="Article contents"><p className="article-toc-title">In this guide</p><nav>
            <a href="#choose">Choose one record to prove</a>
            <a href="#prepare">Prepare the real workflow</a>
            <a href="#rehearse">Rehearse four outcomes</a>
            <a href="#accept">Decide what can roll out</a>
          </nav></aside>
          <div className="article-body">
            <p className="article-intro">If your utility or public works crew will inspect mapped assets outside reliable cell coverage, ask a vendor to prove more than an offline map. Ask them to show the same inspection on the phone before reconnection and in the office afterward, with its attachment and asset ID intact.</p>
            <p>Run this check before buying a larger rollout or building a custom connector. Start with a test layer or survey that mirrors your permissions and workflow without using live asset records or customer photos.</p>
            <section id="choose"><h2>1. Choose one record to prove</h2>
              <p>Pick one repeatable task: an existing valve inspection, a sign condition check or a maintenance visit. Agree on the record the office expects: a stable asset ID, an inspection identifier, the observed time, the finding and a photo if required. If the crew attaches a photo to an inspection rather than to the asset itself, check the correct record in the office. A photo on the wrong record is not a pass.</p>
              <p>Distinguish three states: <strong>saved on the device</strong>, <strong>received by the server</strong> and <strong>ready for office follow-up</strong>. Decide which screen or report proves each state and who handles exceptions. If the office relies on a separate work-order system, verify receipt there separately from the GIS sync.</p>
            </section>
            <section id="prepare"><h2>2. Prepare the real workflow while connected</h2>
              <p>Use the same device models and ordinary crew accounts you intend to deploy. In <a href="https://doc.arcgis.com/en/field-maps/11.4/prepare-maps/prepare-maps-for-download.htm">Esri’s Field Maps guidance</a>, downloadable web maps must be configured for offline use, and edits captured offline are not available to others until the map syncs. An offline map for viewing is not proof that a crew can collect data. For an editable workflow, test the actual map area, editable layers, form and attachment settings.</p>
              <p>For <a href="https://doc.esri.com/en/arcgis-survey123/latest/capture/field-app/submitsurveyresults.html">Survey123’s field app</a>, test the survey itself. When Send now is unavailable offline, a completed response can be saved in the Outbox and submitted after reconnection. An Outbox entry is not a server receipt. Keep these two app flows separate, especially if a crew opens the survey from a map.</p>
            </section>
            <section id="rehearse"><h2>3. Rehearse four outcomes, not one demo</h2>
              <p><strong>Synthetic worked example:</strong> Test asset V-014 and inspection TEST-041 are invented; this is a sample acceptance script, not a customer result.</p>
              <ol>
                <li><strong>Normal offline capture.</strong> Download the map area or survey while connected. Take the test device offline, record TEST-041 against V-014 and attach a sample photo. Reopen the app while offline and show what is still saved. Reconnect, sync or send as appropriate, then look up TEST-041 from an office account. Verify the expected asset and inspection IDs, photo placement and date.</li>
                <li><strong>Interrupted upload.</strong> In the test environment, interrupt connectivity during a sync or send. Look for a clear pending or failed state. Reconnect and follow the app’s retry path. Have the office count records for TEST-041 and open the photo. If it is unclear whether the first attempt succeeded, reconcile before asking the crew to create another inspection.</li>
                <li><strong>Missing permission.</strong> With a preconfigured test account that cannot submit or edit the target, see what the user can do and what error they get. Verify on the server that a blocked record was not accepted. Record the supervisor’s recovery step without giving everybody administrator access.</li>
                <li><strong>Office follow-up.</strong> Submit a second synthetic inspection flagged for review. Check that it appears where the office expects it, with a named owner. Separately show a test record left on the device and confirm that the office does not mistake its absence for a completed inspection.</li>
              </ol>
              <p>If the workflow depends on a continuous track or external GNSS receiver, add a separate short, safe test on the intended device with the screen locked, then review the recorded path and available accuracy data. A good sync does not prove the device captured the intended location.</p>
            </section>
            <section id="accept"><h2>4. Decide what can roll out</h2>
              <p>For each attempt, keep the device and app version, test identifier, the local and office states, duplicate count, photo check and the person who owns recovery. Note the time from reconnecting to the office record becoming usable. Agree on the time window that fits your operation rather than borrowing a generic speed target.</p>
              <p>Roll out the specific workflow only if the crew can recognize unsent work, the office sees the correct record and attachment, and somebody owns a failed sync. If it fails because of coverage, configuration or training, fix that first. Consider a connector only when the field tool works and the remaining gap is between systems. The <Link href="/insights/ai-integration-readiness-checklist">integration readiness guide</Link> offers related checks for that next decision.</p>
              <p>Bring a blank field form, a test layer and the report or queue your office actually uses to a <Link href="/contact?service=gis&from=gis-field">GIS workflow conversation</Link>. See how RAW approaches <Link href="/gis-and-field-operations">GIS and field operations</Link> or how we <Link href="/gis-modernization">review the underlying map and asset data</Link> before expanding the workflow.</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
