import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/prepare-sops-for-ai-assistant";
const title = "Before an AI assistant reads your SOPs, name the current version";
const description = "Prepare company procedures for an AI knowledge assistant: identify approved versions, assign owners, handle conflicts and test updates before connecting files.";
const publicationDate = "2026-10-04";

export const metadata: Metadata = {
  title: { absolute: "Prepare SOPs for an AI Assistant | Randall Automation Works" },
  description,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "Randall Automation Works",
    title,
    description,
    url: canonicalPath,
    publishedTime: publicationDate,
    modifiedTime: publicationDate,
    authors: ["Chris Randall"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: publicationDate,
  dateModified: publicationDate,
  mainEntityOfPage: `${siteUrl}${canonicalPath}`,
  image: `${siteUrl}/opengraph-image.png`,
  author: { "@type": "Person", name: "Chris Randall", url: `${siteUrl}/about` },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#business`,
    name: "Randall Automation Works",
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo-horizontal.svg` },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
    { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}${canonicalPath}` },
  ],
};

export default function PrepareSopsArticle() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link>
            </nav>
            <p className="eyebrow">Internal knowledge &amp; office workflows</p>
            <h1>{title}</h1>
            <p className="article-deck">A source link tells an employee where an answer came from. It does not, by itself, tell them whether that procedure still applies.</p>
            <div className="article-byline">
              <span>By Chris Randall</span><span aria-hidden="true">&bull;</span>
              <time dateTime={publicationDate}>October 4, 2026</time>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-toc">
            <p className="article-toc-title">In this article</p>
            <nav aria-label="Article sections">
              <a href="#one-question">Choose one recurring question</a>
              <a href="#source-register">Make a source register</a>
              <a href="#worked-example">A synthetic office example</a>
              <a href="#updates">Check the update path</a>
              <a href="#acceptance">Test before connecting more files</a>
              <a href="#buying-decision">Decide what to buy</a>
            </nav>
          </aside>
          <div className="article-body">
            <p className="article-intro">Imagine asking an assistant how to finish a service visit. It returns a clear answer and cites a company PDF. The PDF is real, but the office changed that process last month. The answer can be faithful to its source and still be wrong for today&apos;s work.</p>
            <p>For a Western Colorado owner considering an internal knowledge assistant, the first buying question is practical: <strong>Can the business identify which instructions employees should use now?</strong> A small, owned collection is a better pilot input than a shared drive full of current procedures, drafts and old attachments.</p>

            <section id="one-question">
              <h2>Start with one question the office already answers</h2>
              <p>Choose a routine administrative question such as which attachments are required to close out a visit, where a completed form belongs, or who reviews an incomplete job record. Identify the people who ask it and the person responsible for the answer.</p>
              <p>Gather only the approved documents needed for that question. Leave unrelated project folders and personal inboxes outside the pilot. The <Link href="/insights/first-ai-automation-project">first automation project guide</Link> can help you bound the workflow before you choose an assistant or integration.</p>
              <p>The collection may reveal a simpler fix: a single current checklist with a reliable link. An AI assistant is useful only if answering varied questions adds enough value beyond that existing option.</p>
            </section>

            <section id="source-register">
              <h2>Give each source a record employees can understand</h2>
              <p>A source register can begin as a small spreadsheet. For each procedure, record:</p>
              <ul>
                <li><strong>Purpose and scope:</strong> the question it answers, the team it covers and any location or work-type limits.</li>
                <li><strong>Responsible owner:</strong> the role that approves corrections and resolves conflicts.</li>
                <li><strong>Status and revision:</strong> approved, draft, superseded or withdrawn, with an identifiable version.</li>
                <li><strong>Effective date:</strong> when the approved instruction starts applying. A file&apos;s upload time is a different fact.</li>
                <li><strong>Source location:</strong> a stable link to the document and section, plus the revision it replaces.</li>
                <li><strong>Audience:</strong> which employees may read the information.</li>
              </ul>
              <p>Use existing document controls where they fit. Microsoft&apos;s <a href="https://support.microsoft.com/en-us/sharepoint/data-and-lists/view-the-version-history-of-an-item-or-file-in-a-list-or-library">version-history documentation</a> describes tracking and viewing earlier file versions when versioning is enabled. That history helps identify changes; your business still has to decide which version is approved for the task.</p>
              <p>Write that decision down. For example: use the approved procedure that is effective for this team and date; exclude drafts and superseded instructions from ordinary answers; refer unresolved conflicts to the content owner. Do not use &ldquo;the newest file wins&rdquo; as a substitute for approval.</p>
            </section>

            <section id="worked-example">
              <h2>Three files, one closeout question</h2>
              <p><strong>This is a synthetic worked example. The business, documents and workflow are fictional; no customer results are implied.</strong> A small service office has three files about completing a visit:</p>
              <div className="article-criteria">
                <section><span>01 / SUPERSEDED</span><h3>Closeout checklist, revision 2</h3><p>The old instruction says to call the office with completion details. The source register marks it superseded by revision 3. Keep it available for authorized historical review, outside the current-answer collection.</p></section>
                <section><span>02 / APPROVED</span><h3>Closeout checklist, revision 3</h3><p>Effective October 1, it requires the visit notes and required attachments in the job record. The office reviews the record before marking it ready for invoicing. The office lead owns this procedure.</p></section>
                <section><span>03 / DRAFT</span><h3>Proposed closeout changes</h3><p>A later upload suggests a different handoff. It has no approval or effective date. Its recent timestamp does not let it replace revision 3.</p></section>
              </div>
              <p>An employee asks: &ldquo;Are visit notes enough to make a job ready for invoicing?&rdquo; The pilot&apos;s expected answer is: <em>No. Revision 3 requires the notes and required attachments, followed by office review.</em> It should link to the relevant section of revision 3 and show the effective date.</p>
              <p>Now change the question: &ldquo;Which attachments does this unusual visit require?&rdquo; If revision 3 does not define that case, the useful answer identifies the gap and sends the question to the office lead. It should not merge an old requirement with an unapproved draft to sound complete.</p>
              <p>If two approved documents conflict and the business has not established which governs, the system should surface that conflict. The content owner resolves it; a model&apos;s confident wording cannot create company policy.</p>
            </section>

            <section id="updates">
              <h2>Verify what happens after a document changes</h2>
              <p>A connected folder and an assistant&apos;s searchable copy may update on different schedules. In a retrieval-based design, documents are processed into a search index before relevant passages are supplied to the model. Microsoft&apos;s <a href="https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide">RAG design guide</a> describes that separate data pipeline and recommends evaluating representative documents and queries.</p>
              <p>Ask the implementer to demonstrate four operations: approve a replacement, withdraw a procedure, change an employee&apos;s access and recover from a failed refresh. Agree how quickly each change must take effect for this workflow, how a failure is reported and who fixes it.</p>
              <p>Updating the source file is only the first step. Confirm that the active searchable copy reflects the change and that ordinary answers no longer use withdrawn or superseded passages. Keep historical records where the business needs them, with access and historical status made explicit.</p>
              <p>Show the source revision and the latest successful refresh where employees can inspect them. That timestamp is useful evidence of synchronization; it is not proof that every answer is correct. When the agreed freshness limit is exceeded, the workflow should flag the limitation and direct the employee to the current approved source or owner.</p>
            </section>

            <section id="acceptance">
              <h2>Use a small acceptance set before expanding</h2>
              <p>Write the expected behavior before a demo. For the synthetic closeout workflow, include these checks:</p>
              <ol>
                <li><strong>Current answer:</strong> a normal question gets the approved instruction with its source section and revision.</li>
                <li><strong>Old wording:</strong> a question quoting revision 2 still gets the current procedure, with the change explained.</li>
                <li><strong>Missing coverage:</strong> an unusual case produces a clear gap and a named review path.</li>
                <li><strong>Conflicting sources:</strong> unresolved approved instructions are shown as a conflict, without an invented policy.</li>
                <li><strong>Replacement and withdrawal:</strong> the answer changes after a successful refresh; withdrawn guidance stops appearing as current.</li>
                <li><strong>Access change and refresh failure:</strong> restricted material stays unavailable, and a failed update becomes visible.</li>
              </ol>
              <p>Have the content owner judge the answers against the actual approved sources. Try everyday paraphrases, not just the exact wording used to build the demo. Record wrong answers, missing citations, outdated guidance and the effort required to correct them. These are acceptance checks, not a claim of measured accuracy or savings.</p>
            </section>

            <section id="buying-decision">
              <h2>The next purchase depends on what is missing</h2>
              <p>If employees cannot identify the current instruction, begin with document ownership and cleanup. If they can identify it but spend time finding and interpreting it, a bounded knowledge-assistant pilot may be worth assessing. If approved updates repeatedly fail to reach the assistant, the missing work is a reliable integration and maintenance path.</p>
              <p>RAW&apos;s <Link href="/services">internal knowledge systems and workflow assessment services</Link> cover approved knowledge organization, source-linked answers, content ownership and implementation planning. The <Link href="/responsible-ai-and-security">AI assistant setup overview</Link> explains the wider access, testing and handoff work. A useful scope should name the document collection, audience, update process, acceptance set and continuing owner.</p>
              <p>Start the conversation with a list of recurring questions and the roles that own the answers. Use synthetic or appropriately redacted examples until an approved information-sharing arrangement exists.</p>
            </section>
          </div>
        </div>
      </article>
      <section className="cta-section">
        <div className="shell cta-inner">
          <div><p className="eyebrow eyebrow-light">Considering an internal assistant?</p><h2>Bring one recurring question and its source documents.</h2><p>A free 30-minute consultation can help identify whether document cleanup, an integration or a small pilot is the useful next step.</p></div>
          <Link className="button button-sand" href="/contact">Discuss a knowledge workflow</Link>
        </div>
      </section>
    </main>
  );
}
