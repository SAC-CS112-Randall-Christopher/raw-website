import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/ai-assistant-pilot-acceptance-tests";
const title = "How to Test an AI Assistant Pilot Before You Roll It Out";
const description = "Build a small acceptance pack for a business AI assistant: check source-backed answers, missing information, reviewer effort and a clear rollout decision.";
const publicationDate = "2026-11-01";

export const metadata: Metadata = {
  title: { absolute: "AI Assistant Pilot Acceptance Tests | Randall Automation Works" }, description,
  alternates: { canonical: canonicalPath }, robots: { index: true, follow: true },
  openGraph: { type: "article", locale: "en_US", siteName: "Randall Automation Works", title, description, url: canonicalPath,
    publishedTime: publicationDate, modifiedTime: publicationDate, authors: ["Chris Randall"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
};
const articleData = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: publicationDate, dateModified: publicationDate,
  mainEntityOfPage: `${siteUrl}${canonicalPath}`, image: `${siteUrl}/opengraph-image.png`,
  author: { "@type": "Person", name: "Chris Randall", url: `${siteUrl}/about` },
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

export default function PilotAcceptanceGuide() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="article-hero"><div className="shell article-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link></nav>
          <p className="eyebrow">Business assistants &amp; pilot evaluation</p><h1>{title}</h1>
          <p className="article-deck">Bring a small set of questions the seller has not rehearsed. Judge the answers against known evidence, record the work left for your employee and decide what still needs fixing.</p>
          <div className="article-byline"><span>By Chris Randall</span><span aria-hidden="true">&bull;</span><time dateTime={publicationDate}>November 1, 2026</time></div>
        </div></header>
        <div className="shell article-layout">
          <aside className="article-toc" aria-label="Article contents"><p className="article-toc-title">In this guide</p><nav>
            <a href="#decision">Define the buying decision</a><a href="#pack">Build the case pack</a><a href="#example">Try a synthetic example</a><a href="#score">Score the whole task</a><a href="#retest">Retest without rehearsing</a><a href="#handoff">Make the rollout decision</a>
          </nav></aside>
          <div className="article-body">
            <p className="article-intro">You have seen an assistant find a job note and produce a clear answer. Before paying to roll it out across a Western Colorado office, ask a narrower question: can it handle the questions your staff actually ask, including the ones it should not answer?</p>
            <p>A repeatable acceptance pack helps you compare the pilot with your current process. It also separates a good demonstration from evidence about an agreed workload. This guide focuses on read-only answers and drafts. Connections and permissions need their own <Link href="/insights/ai-integration-readiness-checklist">integration readiness checks</Link>; sending messages or changing records needs separate <Link href="/insights/ai-assistant-action-approval">action approval tests</Link>.</p>
            <section id="decision"><h2>1. Define the task before counting correct answers</h2>
              <p>Choose one employee role and one job: for example, helping an office coordinator locate the current approved procedure. Write down the approved sources, what a useful answer must contain and what remains the employee&apos;s responsibility. Keep estimates, commitments and instructions outside that scope unless they have been explicitly evaluated.</p>
              <p>Agree on acceptance criteria before the vendor sees the test questions. Include source accuracy, correct refusal or clarification, permissions and the effort required to check the answer. Decide which failures stop rollout regardless of the overall score. Revealing a restricted record or inventing a customer commitment should not disappear inside a high average.</p>
              <p>Use fictional records first. If realistic evaluation later requires business records, agree on authorization, access, retention and the test environment before copying anything. A document being easy to export does not make it appropriate test material.</p>
            </section>
            <section id="pack"><h2>2. Prepare a small pack with known answers</h2>
              <p>For each case, save a case ID, user role, question, permitted source snapshot or revision, expected answer elements, required source references and expected next step. Write the answer key yourself or have a knowledgeable employee review it before the run. The assistant must not grade its own unsupported claims as correct.</p>
              <div className="article-criteria">
                <section><span>ORDINARY</span><h3>Routine work</h3><p>Include the common questions that make the workflow worthwhile. Use the language employees use, not only the wording in the source document.</p></section>
                <section><span>AMBIGUOUS</span><h3>Two plausible records</h3><p>Use similar job names or incomplete identifiers. Expect a clarifying question when selecting the wrong record would change the answer.</p></section>
                <section><span>INCOMPLETE</span><h3>Missing or conflicting evidence</h3><p>Leave out a required value, or provide two conflicting revisions with no approved resolution. Expect the gap to remain visible and a named human decision to follow.</p></section>
                <section><span>RESTRICTED</span><h3>Access and instruction boundaries</h3><p>Run a case under a role without access. Include fictional source text asking the assistant to ignore its rules. The source must not grant access or authority.</p></section>
              </div>
              <p>Add a dated-source case. Specify the business rule for freshness rather than assuming an old document is wrong. A policy approved last year may still apply; yesterday&apos;s job-status snapshot may already be too old for today&apos;s question. Test whether the answer distinguishes source date, approval status and last successful refresh.</p>
              <p>Keep ordinary and deliberately difficult cases identifiable. A pack weighted toward edge cases is useful for finding defects, but its pass rate cannot represent how often those cases occur in daily work. Record what the pack leaves out.</p>
            </section>
            <section id="example"><h2>3. Follow one fictional procedure lookup</h2>
              <p><strong>This is a synthetic worked example, not a customer deployment, a RAW benchmark or a claim of a supported product feature.</strong> A fictional office asks, &ldquo;Which checklist should I use to close request EX-208?&rdquo; Its test library contains an approved checklist revision 3 and a draft revision 4.</p>
              <ol>
                <li><strong>Expected answer:</strong> identify approved revision 3, link to that exact source and explain that revision 4 is still a draft. Do not silently combine their steps.</li>
                <li><strong>Missing evidence variant:</strong> remove the approval record. The correct result is to say that the approved version cannot be established and direct the employee to the procedure owner.</li>
                <li><strong>Permission variant:</strong> run the request as a role that cannot read the checklist. The result must not disclose its contents through a summary or a citation preview.</li>
                <li><strong>Changed-source variant:</strong> have the procedure owner approve revision 4 in the test system. Recheck only after the agreed refresh has completed, preserving the old test result as evidence of its earlier source state.</li>
              </ol>
              <p>Record the full answer and the source actually retrieved for each variant. A link to the right document is insufficient if the answer invents a step that the document does not contain. Conversely, an explicit missing-approval answer can pass even though it does not give the user a checklist.</p>
            </section>
            <section id="score"><h2>4. Measure the work left for the reviewer</h2>
              <p>Use a simple result record: case ID; expected behavior; actual answer; source and revision; pass, fail or unresolved; reviewer correction; review time; and issue owner. Preserve failures and unresolved cases. Do not drop them from the denominator because the assistant could not finish.</p>
              <p>Separate answer correctness from operational usefulness. An accurate summary may still require so much checking that opening the source is easier. Time the current manual task and the assisted task under comparable conditions, including retrieval, review, correction and handoff. Report the observed times and conditions rather than projecting annual savings from one fast example.</p>
              <p>For illustration, if 8 of 10 fictional cases meet their agreed criteria, report &ldquo;8 passed, 1 failed, 1 unresolved on this selected pack.&rdquo; Do not call that 80% business accuracy or proof of production reliability. Ten is an example count, not a recommended sample size. Choose coverage and thresholds for the consequences of your actual task.</p>
              <p>Record provider or hosting charges only when measured and attributable to the run. Keep them separate from employee review effort and implementation costs. A short test cannot establish a monthly operating budget without workload assumptions.</p>
            </section>
            <section id="retest"><h2>5. Keep a few cases out of the tuning loop</h2>
              <p>Split the pack into examples the implementer can use to improve the setup and a separate acceptance set the implementer has not rehearsed. Keep expected answers away from the assistant&apos;s retrieval sources. Otherwise it may repeat the answer key rather than solve the task.</p>
              <p>After a fix, rerun the failed cases and previously passing cases that the change could affect. Record the model, configuration, source revisions and test date so results remain attributable. If an acceptance case is exposed during debugging, mark it as exposed and add a new comparable case for the next independent check. Do not quietly reuse it as unseen evidence.</p>
              <p>For variable outputs, agree on repeated runs and record every result. Selecting the best of several attempts hides inconsistency. More attempts on the same narrow pack also do not establish coverage of new kinds of work.</p>
            </section>
            <section id="handoff"><h2>6. Make a bounded rollout decision</h2>
              <p>End with one of three decisions: accept the demonstrated scope, fix named issues and retest, or stop the pilot. Write down excluded tasks, unresolved cases, the person who can pause use and what changes trigger another check. A new source, model or permission setup may invalidate part of the earlier evidence.</p>
              <p>Ask for the case pack, results, operating instructions and ownership of the configuration as part of the handoff. Begin with the evaluated role and task rather than immediately adding more records or letting drafts become automatic actions.</p>
              <p><Link href="/services">RAW&apos;s automation and integration services</Link> can start with a scoped workflow discussion. The public <Link href="/raw-workspace">RAW Business Workspace demonstration</Link> illustrates a particular workflow; it does not establish results on your documents or promise every test behavior described here. Bring a fictional task, your existing software names and the acceptance decision you need to make.</p>
            </section>
          </div>
        </div>
        <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Evaluate one useful task</p><h2>Bring the questions a polished demo should have to answer.</h2><p>Define the evidence you need before expanding an assistant&apos;s role in your business.</p></div><Link className="button button-sand" href="/contact">Discuss a bounded pilot</Link></div></section>
      </article>
    </main>
  );
}
