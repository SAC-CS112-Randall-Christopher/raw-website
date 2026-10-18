import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/ai-integration-readiness-checklist";
const title = "Before Connecting AI to Business Software: An Integration Readiness Checklist";
const description = "Check API or export access, record ownership, stale data, retries and human review before accepting a small-business AI integration pilot.";
const publicationDate = "2026-10-18";

export const metadata: Metadata = {
  title: { absolute: "AI Integration Readiness Checklist | Randall Automation Works" },
  description,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article", locale: "en_US", siteName: "Randall Automation Works",
    title, description, url: canonicalPath,
    publishedTime: publicationDate, modifiedTime: publicationDate, authors: ["Chris Randall"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};

const articleData = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: publicationDate, dateModified: publicationDate,
  mainEntityOfPage: `${siteUrl}${canonicalPath}`, image: `${siteUrl}/opengraph-image.png`,
  author: { "@type": "Person", name: "Chris Randall", url: `${siteUrl}/about` },
  publisher: {
    "@type": "Organization", "@id": `${siteUrl}/#business`, name: "Randall Automation Works",
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo-horizontal.svg` },
  },
};
const breadcrumbData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
    { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}${canonicalPath}` },
  ],
};

export default function IntegrationReadinessArticle() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link></nav>
            <p className="eyebrow">Business software &amp; integration readiness</p>
            <h1>{title}</h1>
            <p className="article-deck">Ask a vendor to prove the information path, the failure behavior and your ability to take over before accepting an AI integration pilot.</p>
            <div className="article-byline"><span>By Chris Randall</span><span aria-hidden="true">&bull;</span><time dateTime={publicationDate}>October 18, 2026</time></div>
          </div>
        </header>
        <div className="shell article-layout">
          <aside className="article-toc" aria-label="Article contents">
            <p className="article-toc-title">In this guide</p>
            <nav><a href="#access">Prove the access path</a><a href="#contract">Write a small data contract</a><a href="#example">Follow one synthetic request</a><a href="#tests">Test failures before acceptance</a><a href="#handoff">Check ownership and handoff</a><a href="#next-step">Prepare a useful brief</a></nav>
          </aside>
          <div className="article-body">
            <p className="article-intro">Your scheduling, customer-service or work-order system already holds the answer. Can an AI assistant retrieve it reliably enough for an employee to use? For a Western Colorado owner buying a software integration, that question comes before the model demonstration.</p>
            <p><strong>Before accepting the pilot, require evidence that it can read the right records, recognize missing or outdated information, and stop at the agreed review boundary.</strong> A convincing answer on a screen does not establish any of those things.</p>

            <section id="access">
              <h2>1. Prove access to the fields your workflow needs</h2>
              <p>An API is a supported way for software to request information or actions from another application. An export is a copy taken at a particular time. Either may support a useful workflow, but they make different promises about freshness and availability.</p>
              <p>Ask the implementer to demonstrate the permitted connection in a test account or with an approved synthetic record. Get the application owner involved. A product logo on a connector list is insufficient evidence that your subscription, account role and required fields are supported.</p>
              <ul>
                <li><strong>Access route:</strong> identify the documented API, SDK or approved export, the exact records it exposes and whether it is read-only.</li>
                <li><strong>Account requirements:</strong> confirm the required product plan, administrator approval, access scope and any separately priced integration entitlement with the software provider.</li>
                <li><strong>Coverage:</strong> show the required fields, stable record IDs, all result pages and any records excluded by filters or permissions.</li>
                <li><strong>Operating limits:</strong> document request limits, update frequency, maintenance responsibilities and how connection failures reach a named person.</li>
              </ul>
              <p>If the application can only produce a nightly export, scope a dated reporting assistant. Do not present it as a live status lookup. If neither a supported connection nor an acceptable export exists, pause the integration estimate until the provider confirms a viable path.</p>
            </section>

            <section id="contract">
              <h2>2. Write a small data contract in plain language</h2>
              <p>A data contract is the agreed meaning and handling of the fields being exchanged. It need not be a large technical document. Have the business owner and implementer approve these decisions before building against real records:</p>
              <div className="article-criteria">
                <section><span>SOURCE</span><h3>Which system is authoritative?</h3><p>Name the application that owns status and the person who corrects it. Identify records by a stable ID, not by a customer name that may match several people. Link the employee back to the original record.</p></section>
                <section><span>FIELDS</span><h3>What is permitted to cross?</h3><p>List allowed fields and meanings: request ID, status, assigned team and last source update. Define allowed status values. Exclude free-text notes and attachments unless the workflow needs them and sharing is approved.</p></section>
                <section><span>TIME</span><h3>When is the information usable?</h3><p>Keep the source update time separate from the last successful synchronization time, with a stated time zone. An unchanged record can still be current. Set the maximum acceptable synchronization age for this particular task.</p></section>
                <section><span>LIFECYCLE</span><h3>What happens when access or records change?</h3><p>Specify how deletions, permission changes and corrections reach cached copies and search results. Define retention for diagnostic logs, histories and backups separately, including who can authorize removal.</p></section>
              </div>
              <p>These are implementation requirements to verify, not features every product provides. For example, Microsoft Graph documents <a href="https://learn.microsoft.com/en-us/graph/delta-query-overview">change tracking for supported resources</a>, including created, updated and deleted entities. The same guidance warns about processing delays, repeated changes and synchronization resets. Confirm the equivalent behavior for your actual application.</p>
            </section>

            <section id="example">
              <h2>3. Follow one synthetic request from source to draft</h2>
              <p><strong>This example is fictional. It describes no customer deployment, measured result or ready-made product integration.</strong> Imagine a Montrose service office whose employee needs to answer, “What is the status of request R-104?” The pilot reads a test scheduling system and prepares an internal answer. It cannot update the schedule or send a customer message.</p>
              <p>The agreed fields are request ID, status, assigned team, source update time and source-record link. Customer addresses, payment information, technician notes and attachments are outside the pilot. The source is authoritative; the assistant does not infer completion from a note or from yesterday&apos;s answer.</p>
              <ol>
                <li><strong>Retrieve:</strong> authorized staff ask about R-104. Application code checks their access and looks up that exact ID.</li>
                <li><strong>Validate:</strong> code checks required fields, allowed status values and freshness before any AI wording step.</li>
                <li><strong>Present:</strong> the fictional source says “Awaiting parts,” last updated at 9:10 a.m. Mountain Time. The last successful synchronization was 9:12 a.m. The answer shows both times and the source link.</li>
                <li><strong>Review:</strong> the employee opens the source before using the draft externally. A requested completion date remains unanswered because no approved field supplies it.</li>
              </ol>
              <p>For this hypothetical pilot, the owner chooses a maximum synchronization age of 15 minutes. At 9:30 a.m., if no refresh has succeeded since 9:12, the assistant withholds a current-status answer, labels the stored snapshot as outdated and directs the employee to the source application. Fifteen minutes is an illustrative business decision, not a general freshness standard.</p>
              <p>A fixed status lookup may need only ordinary code and a clear display. Add AI only if explaining or drafting from those validated fields helps the employee. The <Link href="/insights/route-first-reason-when-needed">routing and reasoning guide</Link> addresses that separate tool-selection decision.</p>
            </section>

            <section id="tests">
              <h2>4. Make failures part of the acceptance demonstration</h2>
              <p>Use synthetic records in an isolated test environment. For each case, record the input, expected behavior, observed output, relevant log entry, reviewer and pass/fail decision. Agree on expected behavior before running the demonstration.</p>
              <ol>
                <li><strong>Normal lookup:</strong> R-104 returns the exact source status and both timestamps with a working source link. No unsupported completion date appears.</li>
                <li><strong>Stale data:</strong> stop refreshes beyond the agreed threshold. The answer must show that current status cannot be established, offer the documented fallback and avoid silently reusing an old answer.</li>
                <li><strong>Deleted or restricted record:</strong> delete a synthetic record, then separately remove a test employee&apos;s permission. Verify that subsequent retrieval and search do not reveal its content under the agreed policy. Check retained history and logs separately; disappearance from search is not proof of complete deletion.</li>
                <li><strong>Retry and replay:</strong> simulate a temporary failure and return the same update twice. The connector should recover within its agreed retry budget without producing duplicate records or drafts. Exhausting the budget should alert the owner rather than loop silently.</li>
                <li><strong>Incomplete or changed fields:</strong> omit the request ID, supply an unknown status and return conflicting versions. The workflow should hold the record for review, explain the problem and preserve the source for correction rather than guess.</li>
                <li><strong>Review boundary:</strong> ask the assistant to mark the job complete or send the draft. Both actions must remain unavailable in this read-only pilot, including when a source note instructs the assistant to perform them.</li>
                <li><strong>Recovery:</strong> restart the connection after an interrupted multi-page synchronization. Compare source IDs and counts with the local copy, confirm no silent omissions or duplicates, and resume only after freshness is established.</li>
              </ol>
              <p>Retry behavior must follow the selected provider. Microsoft Graph&apos;s <a href="https://learn.microsoft.com/en-us/graph/throttling">throttling guidance</a>, for example, explains HTTP 429 responses and waiting for the supplied Retry-After interval. That is a reason to require an intentional retry policy, not a promise that every business application behaves the same way.</p>
              <p>Keep write-back outside this pilot. If a later project will create bookings or change records, add separate approval and duplicate-action tests, including the case where the source accepted a change but the connection failed before confirmation. A read-only demonstration cannot establish safe write behavior.</p>
            </section>

            <section id="handoff">
              <h2>5. Ask who can operate it when the implementer leaves</h2>
              <p>The acceptance packet should contain a connection diagram, approved field list, account and permission inventory, test evidence, operating instructions and an exit procedure. Name who owns the source account, hosting, code or licensed components, configuration and support relationship. Put deliverable ownership and third-party licenses in the written agreement.</p>
              <p>Have the designated operator demonstrate how to identify a failed refresh, use the fallback, contact support and revoke integration access. Verify an export of the business-owned configuration and data that the agreement permits you to retain. Agree on what happens to remaining copies when support ends.</p>
              <p>A useful acceptance decision is explicit: pass the agreed scope, fix listed failures and retest, or stop. Do not expand access while freshness, permissions or duplicate handling remain unexplained. Compare ongoing provider charges, monitoring and repair responsibilities alongside the initial build scope.</p>
            </section>

            <section id="next-step">
              <h2>Bring the access question to the first conversation</h2>
              <p>Prepare the software name and plan, one employee question, the required fields, the application owner and a fictional sample record. Add the freshness requirement and the actions the assistant must never take. Start with public documentation and synthetic examples; agree on permitted sharing before sending internal records or credentials.</p>
              <p>Randall Automation Works&apos; <Link href="/services">workflow automation and integration services</Link> start with a scoped task. The <Link href="/workflow-automation-examples">workflow examples</Link> show the kinds of connections that may be considered, while <Link href="/how-engagements-work">the engagement process</Link> explains assessment, controlled pilots and review. Each proposed application connection still needs its own access check and acceptance evidence.</p>
              <p>Primary documentation checked October 18, 2026. Verify current provider capabilities, account entitlements and limits when scoping the actual integration.</p>
            </section>
          </div>
        </div>
        <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">One connection, clear evidence</p><h2>Find out what your software can safely support.</h2><p>Bring one workflow and the applications it depends on to a free 30-minute consultation.</p></div><Link className="button button-sand" href="/contact">Discuss an integration pilot</Link></div></section>
      </article>
    </main>
  );
}
