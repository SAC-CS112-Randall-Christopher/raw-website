import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
const canonicalPath = "/insights/first-ai-automation-project";
const title = "How to Choose a Practical First AI Automation Project for a Small Organization";
const description = "A practical framework for choosing a safe, measurable first AI automation project for a small business, utility, special district or local organization.";

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
    publishedTime: "2026-07-18T00:00:00-06:00",
    modifiedTime: "2026-07-18T00:00:00-06:00",
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
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  mainEntityOfPage: `${siteUrl}${canonicalPath}`,
  image: `${siteUrl}/opengraph-image.png`,
  author: {
    "@type": "Person",
    name: "Chris Randall",
    url: `${siteUrl}/about`,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#business`,
    name: "Randall Automation Works",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-horizontal.svg`,
    },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
    { "@type": "ListItem", position: 3, name: "Choosing a First Automation Project", item: `${siteUrl}${canonicalPath}` },
  ],
};

export default function FirstAutomationProjectArticle() {
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
            <p className="eyebrow">AI & workflow assessment</p>
            <h1>{title}</h1>
            <p className="article-deck">The best first project is rarely the most impressive demonstration. It is a bounded piece of real work that employees can understand, review and measure.</p>
            <div className="article-byline">
              <span>By Chris Randall</span>
              <span aria-hidden="true">•</span>
              <time dateTime="2026-07-18">July 18, 2026</time>
              <span aria-hidden="true">•</span>
              <span>9 minute read</span>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-toc">
            <p className="article-toc-title">In this guide</p>
            <nav aria-label="Article sections">
              <a href="#start-with-work">Start with the work</a>
              <a href="#six-tests">Six practical tests</a>
              <a href="#poor-candidates">Projects that should wait</a>
              <a href="#examples">Strong first-project examples</a>
              <a href="#security">Security and readiness</a>
              <a href="#measure">Measure before building</a>
              <a href="#pilot-brief">A one-page pilot brief</a>
            </nav>
          </aside>

          <div className="article-body">
            <p className="article-intro">Small organizations often approach AI from the wrong end. Someone sees a product demonstration, hears that a competitor is “using AI,” or asks which chatbot the organization should buy. The more useful question is simpler: <strong>Which recurring piece of work is creating enough friction to justify changing it?</strong></p>
            <p>That shift matters. A tool-first project can become a search for places to use software. A workflow-first project begins with employees, information, decisions and handoffs that already exist. It gives the organization something concrete to improve—and a way to decide whether the improvement was worth the cost.</p>

            <section id="start-with-work">
              <h2>Start with the work, not the AI</h2>
              <p>A useful first automation project should be described without naming a product. “Prepare the weekly operations summary from these approved records” is a project. “Deploy an AI assistant” is not. “Route complete customer-intake forms to the right employee and flag missing information” is a project. “Use generative AI for customer service” is still too broad.</p>
              <p>Describe the current workflow in plain language:</p>
              <ol>
                <li>What starts the work?</li>
                <li>Which people and systems are involved?</li>
                <li>What information is required?</li>
                <li>Where do delays, errors or dropped handoffs occur?</li>
                <li>What output or decision marks the work as complete?</li>
              </ol>
              <p>If the current process cannot be explained, it is usually too early to automate it. Mapping the work may reveal that the first fix is a clearer form, an agreed naming convention, a report template or a defined owner—not AI.</p>
            </section>

            <section id="six-tests">
              <h2>Six tests for a strong first project</h2>
              <div className="article-criteria">
                <section>
                  <span>01</span>
                  <h3>It happens repeatedly</h3>
                  <p>Frequency creates learning and measurable value. Weekly reports, recurring intake, routine document handling and repeated field-to-office handoffs are easier to evaluate than a task that happens once a year.</p>
                </section>
                <section>
                  <span>02</span>
                  <h3>Its boundaries are understandable</h3>
                  <p>The organization can identify where the workflow starts, what information it uses, what it produces and who owns the result. A pilot should not quietly expand into every department.</p>
                </section>
                <section>
                  <span>03</span>
                  <h3>The inputs are available</h3>
                  <p>Approved documents, database records, spreadsheets, forms or exports exist in a usable form. If every input requires interpretation from one experienced employee, knowledge capture may need to come first.</p>
                </section>
                <section>
                  <span>04</span>
                  <h3>A person can review the output</h3>
                  <p>An employee understands what a correct result looks like and has authority to correct exceptions. The pilot supports judgment rather than concealing or replacing it.</p>
                </section>
                <section>
                  <span>05</span>
                  <h3>The result can be measured</h3>
                  <p>Useful measures might include preparation time, missing fields, correction rate, turnaround time, open items, employee effort or consistency—not an invented promise that AI will “transform” the organization.</p>
                </section>
                <section>
                  <span>06</span>
                  <h3>Failure is recoverable</h3>
                  <p>If the pilot produces a poor draft or misses an exception, the team can stop, correct it and use the original process. A first project should not create an irreversible operational or safety consequence.</p>
                </section>
              </div>

              <aside className="article-callout">
                <p className="eyebrow">A useful rule</p>
                <p><strong>The first pilot should be important enough to matter and contained enough to stop.</strong></p>
              </aside>
            </section>

            <section id="poor-candidates">
              <h2>Projects that should usually wait</h2>
              <p>Some projects may become appropriate later, after the organization has stronger data, governance and operating experience. They are poor starting points when they involve:</p>
              <ul>
                <li>Autonomous safety-critical or infrastructure decisions</li>
                <li>Write-enabled access to operational technology or control systems</li>
                <li>Unclear ownership of the information or resulting decision</li>
                <li>Highly sensitive information without an approved handling pathway</li>
                <li>A process that changes every time it occurs</li>
                <li>No reliable examples of correct outputs</li>
                <li>A goal defined only as reducing headcount</li>
                <li>A requirement to replace several core systems at once</li>
              </ul>
              <p>For utilities and special districts, approved operational information may support read-only summaries, trend identification and maintenance context in a separate reporting environment. That does not mean an AI service should operate pumps, valves, treatment processes, PLCs or other control functions. The separation between reporting and control should be deliberate and documented.</p>
            </section>

            <section id="examples">
              <h2>Examples of strong first projects</h2>
              <p>The right project depends on the organization, but these patterns are often easier to define and review:</p>
              <h3>Recurring management reporting</h3>
              <p>Gather approved figures from existing spreadsheets, databases or exports; identify missing information; prepare a consistent draft; and provide source links for manager review. The organization can compare preparation time, corrections and report consistency with the previous process.</p>
              <h3>Form and document intake</h3>
              <p>Check whether a submitted form contains required information, extract approved fields and route incomplete or unusual items to a person. The automation does not decide the outcome—it reduces avoidable handling and makes exceptions visible.</p>
              <h3>Meeting follow-up</h3>
              <p>Create a draft summary and action list from approved notes or recordings, then require the meeting owner to confirm responsibilities and due dates before distribution.</p>
              <h3>GIS and field-to-office handoffs</h3>
              <p>Review submitted field records for missing attributes, prepare an activity summary and route data-quality exceptions to the employee responsible for correction. GIS remains connected to the business workflow instead of becoming an isolated map.</p>
              <h3>Approved utility-log summaries</h3>
              <p>Use read-only exports to prepare recurring alarm, communication or runtime summaries for qualified operator and maintenance review. Keep the reporting environment separate from operational control and preserve the source records behind every draft.</p>
            </section>

            <section id="security">
              <h2>Ask security and information questions before selecting a tool</h2>
              <p>A workflow may be a good automation candidate and still require preparation before implementation. Answer these questions early:</p>
              <ul>
                <li>Who owns the source information?</li>
                <li>What classifications or confidentiality requirements apply?</li>
                <li>Which records are actually necessary for the workflow?</li>
                <li>Can access remain read-only?</li>
                <li>Will the organization use client-owned accounts and credentials?</li>
                <li>How does the selected service retain or use submitted information?</li>
                <li>Who reviews the output, and what happens when it is wrong?</li>
                <li>How can the workflow be stopped or returned to the original process?</li>
              </ul>
              <p>These questions are part of project design, not paperwork added after the build. A useful workflow should make responsibility clearer.</p>
              <p><Link href="/responsible-ai-and-security">Review the Randall Automation Works security approach <span aria-hidden="true">→</span></Link></p>
            </section>

            <section id="measure">
              <h2>Measure the current process before building</h2>
              <p>Without a baseline, “it feels faster” can become the only evidence of value. Before implementation, observe several real examples and record measures appropriate to the work:</p>
              <ul>
                <li>Elapsed time from intake to completion</li>
                <li>Employee time spent assembling or re-entering information</li>
                <li>Number and type of missing or incorrect fields</li>
                <li>Corrections required before the output can be used</li>
                <li>Tasks that are delayed, reassigned or dropped</li>
                <li>Employee confidence in understanding and correcting the result</li>
                <li>Ongoing software, support and review cost</li>
              </ul>
              <p>After the pilot, compare the same measures. A workflow that saves a few minutes but creates confusing exceptions or new security responsibilities may not justify expansion. Stopping after a controlled test is a valid result.</p>
            </section>

            <section id="pilot-brief">
              <h2>Write a one-page pilot brief</h2>
              <p>Before buying a tool or building an integration, document the pilot in one page:</p>
              <div className="pilot-brief">
                <dl>
                  <div><dt>Problem</dt><dd>What recurring work is causing friction, and for whom?</dd></div>
                  <div><dt>Boundary</dt><dd>Where does the pilot start and stop?</dd></div>
                  <div><dt>Inputs</dt><dd>Which approved records, forms, files or exports are required?</dd></div>
                  <div><dt>Output</dt><dd>What draft, route, flag or summary will the workflow produce?</dd></div>
                  <div><dt>Review</dt><dd>Who checks the result and handles exceptions?</dd></div>
                  <div><dt>Measures</dt><dd>How will the team compare the pilot with the current process?</dd></div>
                  <div><dt>Limits</dt><dd>What information, decisions and systems are explicitly out of scope?</dd></div>
                  <div><dt>Exit</dt><dd>How will the organization pause or stop the pilot safely?</dd></div>
                </dl>
              </div>
              <p>If those answers are unclear, the next step is an assessment—not implementation. A focused <Link href="/services">AI and workflow assessment</Link> can map the process, review information readiness and prioritize opportunities before the organization commits to a build.</p>
            </section>

            <section>
              <h2>What a successful first project should leave behind</h2>
              <p>A useful pilot produces more than a working demonstration. It should leave the organization with a documented workflow, defined owners, trained employees, known limitations, a correction path and evidence that supports the next decision.</p>
              <p>The result may justify expansion. It may show that the workflow needs adjustment. It may reveal that a simpler process change is enough. Each outcome is more useful than committing to a large transformation project before the organization understands the work.</p>
            </section>
          </div>
        </div>
      </article>

      <section className="cta-section article-cta">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Bring one frustrating process</p>
            <h2>Find out whether it is ready for a practical pilot.</h2>
            <p>Start with the work, the people and the information involved. The technology comes after the problem is understood.</p>
          </div>
          <Link className="button button-sand" href="/contact">Schedule an initial conversation</Link>
        </div>
      </section>
    </main>
  );
}
