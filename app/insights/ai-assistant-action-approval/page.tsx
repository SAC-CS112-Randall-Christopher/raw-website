import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/ai-assistant-action-approval";
const title = "AI Assistant Approvals: Decide What It Can Do Before It Acts";
const description = "Set clear approval rules for a business AI assistant: separate drafts from actions, review the exact change, and handle uncertain results without duplicates.";
const publicationDate = "2026-10-25";

export const metadata: Metadata = {
  title: { absolute: "AI Assistant Action Approvals | Randall Automation Works" }, description,
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

export default function ActionApprovalGuide() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="article-hero"><div className="shell article-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link></nav>
          <p className="eyebrow">Business assistants &amp; action approval</p>
          <h1>{title}</h1>
          <p className="article-deck">A useful assistant can prepare the next step. Your business still needs a clear rule for who can approve it, what that approval covers and how to confirm the result.</p>
          <div className="article-byline"><span>By Chris Randall</span><span aria-hidden="true">&bull;</span><time dateTime={publicationDate}>October 25, 2026</time></div>
        </div></header>
        <div className="shell article-layout">
          <aside className="article-toc" aria-label="Article contents"><p className="article-toc-title">In this guide</p><nav>
            <a href="#boundaries">Choose the action boundary</a><a href="#approval">Review the exact change</a><a href="#example">Follow a synthetic handoff</a><a href="#uncertain">Handle uncertain results</a><a href="#evaluation">Test the demonstration</a><a href="#next-step">Bring one workflow</a>
          </nav></aside>
          <div className="article-body">
            <p className="article-intro">For a Western Colorado business owner comparing AI assistants, the buying question is specific: can the assistant help the office and field team move work forward without making a commitment nobody reviewed?</p>
            <p>Reading a job note, drafting a reply, saving an internal task and confirming an appointment are four different permissions. Ask the vendor to demonstrate each boundary. A general promise that a person stays in control does not explain what happens after someone presses Approve.</p>
            <section id="boundaries"><h2>1. Give each action its own rule</h2>
              <p>Start with a short action list for one workflow. Name the allowed records, the person responsible and what happens when that person is unavailable. Keep existing account permissions in force; an assistant should not expose a record that the employee cannot otherwise access.</p>
              <div className="article-criteria">
                <section><span>READ</span><h3>Find and summarize</h3><p>Allow approved information to be read for an authorized employee. Show the source and its date. Missing information stays missing; the assistant asks for it instead of inventing a job status.</p></section>
                <section><span>PREPARE</span><h3>Draft without committing</h3><p>Prepare a reply or proposed task for review. Define where drafts are stored and who can see them. A draft must not notify a customer, book a slot or silently update the job record.</p></section>
                <section><span>CHANGE</span><h3>Save a specific internal update</h3><p>Identify the exact record, field, new value and approver. A task assignment may notify an employee, so list those effects too. Approval to save one task does not authorize changing the schedule.</p></section>
                <section><span>COMMIT</span><h3>Contact someone or promise work</h3><p>Sending a message, inviting an attendee, confirming availability or accepting terms needs its own rule. Keep these actions unavailable until the required review and confirmation can be demonstrated.</p></section>
              </div>
              <p>For a first implementation, a sensible acceptance scope can stop at reading and drafting. If a routine action will later run without individual approval, define its permitted inputs, affected records, limits and stop conditions separately. Do not let one approved example become permission for every future request.</p>
            </section>
            <section id="approval"><h2>2. Approve the change you can actually inspect</h2>
              <p>An approval should describe the proposed operation in business language. Use this review record during a demonstration:</p>
              <ul>
                <li><strong>Target:</strong> the named system and exact customer, job, task or recipient identifier. Similar names need disambiguation.</li>
                <li><strong>Change:</strong> current value and proposed value, or the full message with recipients and attachments. Show date, time and time zone when scheduling is involved.</li>
                <li><strong>Basis:</strong> the source record, source revision or last update, plus any unresolved assumption.</li>
                <li><strong>Effects:</strong> what will be saved, sent or notified, and what this operation leaves for a separate decision.</li>
                <li><strong>Authority:</strong> the person allowed to approve, the scope of this approval and when it becomes invalid.</li>
                <li><strong>Confirmation:</strong> the evidence that will show whether the intended change happened.</li>
              </ul>
              <p>If the recipient, body, attachment, date or target record changes after review, show the new proposal and obtain a new approval. If the source changed while the proposal was waiting, recheck it before acting. A preview of yesterday&apos;s job status is not a reliable basis for today&apos;s commitment.</p>
              <p>Instructions inside an email or document are source material. They must not grant permission to send a reply or bypass the business&apos;s review rule. Test that distinction with synthetic content before connecting private records.</p>
            </section>
            <section id="example"><h2>3. Walk through one office-to-field handoff</h2>
              <p><strong>This is an invented training example, not a customer project, a RAW product demonstration or a claim of an available integration.</strong> A fictional request, EX-104, asks whether a crew can return on Tuesday afternoon. The job note says an office employee must confirm crew availability.</p>
              <ol>
                <li><strong>Read the request.</strong> The assistant retrieves the approved request and note. It reports that availability is unconfirmed. It does not turn the customer&apos;s preferred time into an appointment.</li>
                <li><strong>Prepare two separate proposals.</strong> One is an internal task for the office to check availability. The other is a draft reply saying that the request is being reviewed. Neither creates a calendar booking.</li>
                <li><strong>Approve only the task.</strong> The employee verifies EX-104, the task owner and due date, then approves that save. The reply remains a draft. The request remains unconfirmed.</li>
                <li><strong>Inspect the result.</strong> The assistant supplies the saved task identifier and a link to the task. The employee can verify that one task exists with the reviewed fields.</li>
                <li><strong>Handle the later decision separately.</strong> When the office confirms availability, it reviews the precise appointment and customer message. The earlier task approval supplies no authority to send or book.</li>
              </ol>
              <p>The useful output is not simply &ldquo;done.&rdquo; It is a small set of states: task saved and verified; reply still a draft; appointment not confirmed. Those distinctions help the next person avoid acting on an assumption.</p>
            </section>
            <section id="uncertain"><h2>4. Treat an uncertain result as unfinished work</h2>
              <p>Suppose the task system saves the new task but the connection drops before the assistant receives confirmation. A second click must not blindly create another task. The implementer needs a way to check the original operation, recognize a duplicate attempt and return the existing result where the target system supports that behavior.</p>
              <p>Ask to see an operation record with the request identifier, reviewed revision, approver, attempted action, time, target result identifier and current status. Useful statuses distinguish prepared, approved, attempted, confirmed, failed and outcome unknown. They should describe evidence, not the assistant&apos;s confidence.</p>
              <p>When the outcome is unknown, stop automatic retries and have a named operator reconcile the destination. If the destination cannot support reliable duplicate detection or result lookup, keep that action manual until there is an acceptable operating procedure.</p>
              <p>Even a provider&apos;s positive response may mean less than the user expects. Microsoft&apos;s <a href="https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0">Graph sendMail documentation</a> says its 202 response accepts a request without establishing completed processing or delivery. For a workflow that uses that API, &ldquo;request accepted&rdquo; and &ldquo;message delivered&rdquo; need different evidence. This is a provider example, not a statement that RAW offers automated email sending.</p>
              <p>Define recovery before rollout. A saved internal note may be correctable with an audit record; a message already read by a customer cannot be made unread. Ask what can be reversed, who handles corrections and how employees pause the connection.</p>
            </section>
            <section id="evaluation"><h2>5. Ask for five small acceptance tests</h2>
              <p>Run these with fictional records in an approved test environment. A screenshot of an approval button does not establish the behavior.</p>
              <ol>
                <li><strong>Reject the proposal.</strong> Confirm that no destination record changes and no notification is sent.</li>
                <li><strong>Change a reviewed field.</strong> Replace the intended task owner or recipient after approval. The changed operation must require a fresh review.</li>
                <li><strong>Approve one action in a bundle.</strong> Save the internal task and verify that the reply and calendar request remain untouched.</li>
                <li><strong>Repeat the approved request.</strong> Simulate a lost confirmation. Show how the operator finds the existing action or an explicit unknown outcome without creating an unexplained duplicate.</li>
                <li><strong>Remove access or change the source.</strong> The pending operation should stop and explain what needs review, rather than proceed on stale authority.</li>
              </ol>
              <p>Record the expected result, observed destination state and any manual step for each test. Accept only the demonstrated scope. The <Link href="/insights/ai-integration-readiness-checklist">integration readiness checklist</Link> covers the earlier question of whether the assistant can reliably obtain the right information.</p>
            </section>
            <section id="next-step"><h2>Bring one action you want help with</h2>
              <p>Write down the trigger, required information, proposed change, allowed approver and consequence of getting it wrong. Bring a fictional example and the names of the systems involved. That is enough to start an informed discussion without sharing customer records.</p>
              <p>Explore <Link href="/services">RAW&apos;s automation and integration services</Link> or watch the public <Link href="/raw-workspace#see-it-in-action">RAW Business Workspace demonstration</Link>. The demonstration shows a particular workflow with review steps; the acceptance tests in this guide are evaluation criteria, not a claim that every connected system or automated action is currently supported. Confirm the exact configuration and action boundaries during scoping.</p>
              <p>Microsoft documentation checked October 25, 2026. Confirm current behavior for the provider and account selected for the actual project.</p>
            </section>
          </div>
        </div>
        <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">A clear next step</p><h2>Define the action before connecting the assistant.</h2><p>Bring one office or field workflow and the decision you want to keep under review.</p></div><Link className="button button-sand" href="/contact">Discuss your workflow</Link></div></section>
      </article>
    </main>
  );
}
