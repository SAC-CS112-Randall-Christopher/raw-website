import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/route-first-reason-when-needed";
const title = "Route first, reason when needed";
const description = "Use a small model to propose a route, application code to enforce access, and a larger model for reasoning. Learn when this AI integration pattern pays off.";
const publicationDate = "2026-09-30";

export const metadata: Metadata = {
  title: { absolute: `${title} | Randall Automation Works` },
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
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

export default function RouteFirstArticle() {
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
            <p className="eyebrow">Practical AI integration</p>
            <h1>{title}</h1>
            <p className="article-deck">A routine lookup and a question that needs interpretation should not automatically take the same path through your AI assistant.</p>
            <div className="article-byline">
              <span>By Chris Randall</span>
              <span aria-hidden="true">&bull;</span>
              <time dateTime={publicationDate}>September 30, 2026</time>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-toc">
            <p className="article-toc-title">In this article</p>
            <nav aria-label="Article sections">
              <a href="#three-jobs">Three different jobs</a>
              <a href="#office-example">A generic office example</a>
              <a href="#exceptions">Uncertainty and failure</a>
              <a href="#measure">Measure the whole path</a>
              <a href="#keep-it-simple">When to keep it simple</a>
              <a href="#tev1">Where Tev1 fits</a>
            </nav>
          </aside>

          <div className="article-body">
            <p className="article-intro">When an employee asks for a list of open work orders, the hard part may already be solved: the organization has a report, a database query and rules about who may see it. The assistant needs to recognize the request and use that existing capability.</p>
            <p>A follow-up such as &ldquo;Which delays need attention, and what information are we missing?&rdquo; asks for something different. It needs comparison, interpretation and a useful explanation. A practical design can route the first request through a narrow path and reserve a larger language model for the second.</p>

            <section id="three-jobs">
              <h2>Give each part a clear job</h2>
              <ol>
                <li><strong>The small routing model proposes a capability.</strong> It chooses from a short, defined list, such as work-order lookup, approved-document search, reasoning or clarification. It does not invent tools or grant access.</li>
                <li><strong>Application code validates and authorizes the request.</strong> Ordinary rules check the capability, the signed-in user, the allowed records and the required arguments before anything executes.</li>
                <li><strong>The larger model handles ambiguity and synthesis.</strong> It can interpret a difficult question or explain validated results when language reasoning adds value. Tool requests from this model pass through the same code checks.</li>
              </ol>
              <p>These paths are sometimes called <strong>System 1</strong> and <strong>System 2</strong>: a quick decision stage and a more involved reasoning stage. Here they are architectural labels. They do not guarantee speed, correct reasoning or safe behavior. The router is still a model that can misunderstand a request.</p>
              <aside className="article-callout">
                <p className="eyebrow">The boundary that matters</p>
                <p>The model proposes. Application code decides whether the proposed operation is permitted.</p>
              </aside>
            </section>

            <section id="office-example">
              <h2>A generic office example</h2>
              <p><strong>This is a fictional design example, not a client case study or a report of measured results.</strong> Imagine an office assistant with read-only access to approved work-order information.</p>
              <p>An employee asks: &ldquo;Show the open work orders assigned to my team this week.&rdquo;</p>
              <ol>
                <li><strong>Propose the route.</strong> The small model selects the known work-order lookup capability. The application requests clarification if the date range or team is unclear.</li>
                <li><strong>Check the request.</strong> Code rejects unknown capabilities, checks the employee&rsquo;s permission, and derives the allowed team scope from their identity. It validates dates, filters and result limits. A team name supplied in a prompt cannot expand access.</li>
                <li><strong>Run the existing lookup.</strong> The application executes an approved, parameterized query using read-only credentials. The model does not write SQL or select arbitrary tables. Return only permitted fields, with record references and the lookup time.</li>
                <li><strong>Present the result.</strong> A normal table may be enough. If the employee asks for a summary of delays, a larger model receives only the permitted results and prepares a draft with source references. It distinguishes recorded facts from suggested explanations.</li>
              </ol>
              <p>Parameter binding keeps query values separate from query structure; it does not establish who may access the records. Permission and scope checks remain separate application responsibilities. <a href="https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html">OWASP&rsquo;s query parameterization guidance</a> explains the query boundary.</p>
              <p>Closing a work order or reassigning staff falls outside this read-only example. A consequential action or decision needs an explicit approval process and a responsible human reviewer.</p>
            </section>

            <section id="exceptions">
              <h2>Make uncertainty an ordinary outcome</h2>
              <p>&ldquo;Take care of the overdue jobs&rdquo; could mean display them, summarize them or change assignments. Choosing a plausible route is not enough. The assistant should ask what the employee intends. A reasoning model may help interpret the question, but it cannot bypass a denied permission or invent missing authorization.</p>
              <p>Include clarification and unsupported-request outcomes in the design. If a tool times out, say the lookup failed. If records are missing, say what is unavailable. If the request exceeds the employee&rsquo;s access, decline it. None of these outcomes should become an invented answer.</p>
              <p>Keep instructions found inside retrieved records from becoming tool authority. Validate proposed tool calls and limit privileges at the application boundary, as described in <a href="https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html">OWASP&rsquo;s prompt injection prevention guidance</a>. Routing alone is not a prompt injection defense.</p>
            </section>

            <section id="measure">
              <h2>Measure what the employee waits for</h2>
              <p>A fast routing call can still make the whole workflow slower. Every request pays its overhead, and an ambiguous request may pay for both models. Compare the design with a simpler baseline using representative examples held out from tuning.</p>
              <ul>
                <li><strong>End-to-end latency:</strong> time from the employee&rsquo;s request to a usable result, including model loading and cold starts, queueing, routing, validation, tool calls, fallback and rendering. Check typical and slower responses under realistic concurrency.</li>
                <li><strong>Routing quality:</strong> correct routes, confidently wrong routes, unsupported requests sent to a tool, and requests that should have triggered clarification. A well-formed choice can still be the wrong choice.</li>
                <li><strong>Fallback and answer quality:</strong> how often the larger model is needed, whether clarification resolves uncertainty, and whether summaries stay supported by the retrieved records.</li>
                <li><strong>Full operating cost:</strong> both models, hosting or local hardware, employee review, error handling and maintenance. A lower cost per routing call is not the cost per completed task.</li>
              </ul>
              <p>Test paraphrases, incomplete questions, unfamiliar requests and attempts to cross access boundaries. Repeat the evaluation when tools, model versions or business rules change. Keep consequential outputs subject to human review.</p>
            </section>

            <section id="keep-it-simple">
              <h2>The extra layer has to earn its place</h2>
              <p>A router is worth considering when many requests map to a stable set of capabilities and avoid enough larger-model work to outweigh routing overhead, misroutes and fallback. It is less attractive when most requests already require reasoning, request volume is low, or tool definitions change constantly.</p>
              <p>Someone must maintain the capability descriptions, permission rules, validation, evaluations and failure handling. If a button, form or existing report already meets the need, start there. A focused pilot should establish whether routing improves the workflow enough to justify another component.</p>
              <p>Explore <Link href="/responsible-ai-and-security">RAW&rsquo;s AI assistant and integration setup</Link> or use the <Link href="/insights/first-ai-automation-project">first-project guide</Link> to define a pilot with clear boundaries and a way to judge the result.</p>
            </section>

            <section id="tev1">
              <h2>Where Tev1 fits in this discussion</h2>
              <p>Recent integration work with Tev1 prompted this article. Its public documentation provides an example of a model aimed at bounded choices. Together AI describes <a href="https://huggingface.co/togethercomputer/Tev1-4B-experimental">Tev1-4B-experimental</a> as a language-model fine-tune for decisions among supplied options. It still uses a language-model output head; it is not deterministic application code.</p>
              <p>Confidence also needs care. <a href="https://ollama.com/library/tev1">Ollama&rsquo;s Tev1 documentation</a> says its confidence value describes how concentrated the option probabilities are, rather than the probability that the answer is correct. A production fallback threshold needs evaluation on your workflow.</p>
              <p>As checked on September 30, 2026, the <a href="https://github.com/togethercomputer/tev1#license-and-contributions">Tev1 repository&rsquo;s code and original documentation are MIT licensed</a>, while the model card says the fine-tuned weights&rsquo; release license is still being finalized. Dataset terms are separate. Verify the terms for the exact model before commercial deployment. The model card also says prompt injection, calibration and broad behavior on unfamiliar inputs have not been comprehensively evaluated.</p>
              <p>The useful lesson is the division of work: recognize a known request, enforce its boundaries in code, and bring in reasoning when the task calls for it. That design can be evaluated without assuming a particular model will make it faster or safer.</p>
            </section>
          </div>
        </div>
      </article>

      <section className="cta-section article-cta">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Have an assistant or integration in mind?</p>
            <h2>Bring one workflow to a free 30-minute consultation.</h2>
            <p>We can identify the known capabilities, access boundaries and measures a focused pilot would need. If deeper discovery is required, we can scope a paid assessment before implementation.</p>
          </div>
          <Link className="button button-sand" href="/contact">Book a free consultation</Link>
        </div>
      </section>
    </main>
  );
}
