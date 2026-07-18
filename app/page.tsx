import Link from "next/link";
import Image from "next/image";

const problems = [
  ["The same work, every week", "Staff rebuild reports, re-enter information and chase routine follow-ups that should move more consistently."],
  ["Information in too many places", "Spreadsheets, shared drives, databases, email and field systems each hold part of the story."],
  ["Knowledge held by a few people", "Critical procedures and context live in experienced employees’ heads, making transitions and training harder."],
];

const services = [
  ["01", "AI & workflow assessment", "Map the work, identify risks and rank practical opportunities before investing in a build."],
  ["02", "Small automation pilots", "Start with one measurable workflow, test it safely and expand only when the result justifies it."],
  ["03", "Reporting & document automation", "Consolidate recurring information into human-reviewed reports, summaries, notices and drafts."],
  ["04", "Internal knowledge systems", "Make approved SOPs, policies and technical documentation easier for employees to find and use."],
  ["05", "GIS & field operations", "Connect field forms, asset information, inspections and office reporting with clearer exception handling."],
  ["06", "Responsible AI & training", "Set sensible policies, permissions, review requirements and role-specific training for secure adoption."],
];

const process = [
  ["01", "Conversation", "Start with the operational problem—not an oversized technology pitch."],
  ["02", "Assessment", "Review workflows, information, security considerations and likely value."],
  ["03", "Roadmap", "Prioritize realistic opportunities by effort, risk and expected return."],
  ["04", "Pilot", "Build one controlled, documented workflow with defined success measures."],
  ["05", "Review", "Measure time, accuracy, usability and operational impact with your team."],
  ["06", "Expand", "Scale only what proves useful, with optional managed support afterward."],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Practical automation <span>•</span> Western Colorado</p>
            <h1>Practical AI for the work that keeps Western Colorado moving.</h1>
            <p className="hero-intro">Secure workflow automation and systems integration for small businesses, rural utilities and local organizations.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">Schedule an initial conversation</Link>
              <Link className="button button-secondary" href="/services">Explore what could be automated</Link>
            </div>
            <div className="control-promise">
              <span className="promise-icon" aria-hidden="true">✓</span>
              <strong>Practical automation. Your team stays informed and in control.</strong>
            </div>
            <ul className="hero-chips" aria-label="Core specialties">
              <li>Workflow automation</li>
              <li>GIS & field operations</li>
              <li>Responsible AI</li>
            </ul>
          </div>
          <div className="hero-visual" aria-label="Western Colorado agricultural landscape and operational reporting concept">
            <Image
              src="/images/hero-western-colorado.png"
              alt="Irrigated Western Colorado valley with a water conveyance and mesa landscape"
              width={1919}
              height={820}
              priority
              unoptimized
              sizes="(max-width: 1050px) 100vw, 54vw"
            />
            <div className="topo-lines" aria-hidden="true" />
            <div className="field-report-card" aria-hidden="true">
              <div className="report-title"><span>Operational summary</span><span className="status-dot" /></div>
              <div className="report-row"><span>Forms reviewed</span><b>24</b></div>
              <div className="report-row"><span>Exceptions flagged</span><b>3</b></div>
              <div className="report-row"><span>Human review</span><b>Ready</b></div>
              <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Where practical AI starts</p><h2>Work that feels heavier than it should.</h2></div>
            <p>Most organizations do not need a sweeping AI transformation. They need a few stubborn processes made more consistent, visible and manageable.</p>
          </div>
          <div className="card-grid three-up">
            {problems.map(([title, text]) => <article className="problem-card" key={title}><span className="card-line" /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Focused services</p><h2>Connect the information and systems you already have.</h2><p>Every engagement is shaped around a real operational need, with documentation and employee adoption built into the work.</p></div>
          <div className="service-grid">
            {services.map(([number, title, text]) => <article className="service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <Link className="text-link" href="/services">See all services and deliverables <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section insight-feature">
        <div className="shell insight-feature-grid">
          <div>
            <p className="eyebrow">New practical guide</p>
            <h2>Choose the workflow before you choose the AI.</h2>
          </div>
          <article className="insight-feature-card">
            <p className="article-kicker">AI & workflow assessment · 9 minute read</p>
            <h3>How to Choose a Practical First AI Automation Project for a Small Organization</h3>
            <p>A useful first pilot is repetitive, bounded, measurable and easy for employees to review. This guide explains how to find one—and which projects to avoid.</p>
            <Link className="text-link" href="/insights/first-ai-automation-project">Read the guide <span aria-hidden="true">→</span></Link>
          </article>
        </div>
      </section>

      <section className="section utility-feature">
        <div className="shell utility-grid">
          <div>
            <p className="eyebrow eyebrow-light">Utility & special-district experience</p>
            <h2>Technology that respects the responsibility behind public infrastructure.</h2>
            <p>Hands-on experience across utility operations, GIS, reporting, IT and administrative systems brings practical context to every recommendation.</p>
            <Link className="button button-sand" href="/utilities-and-special-districts">Explore utility services</Link>
          </div>
          <div className="safe-path">
            <p className="safe-label">A controlled information path</p>
            <div className="path-step"><span>01</span><div><b>Approved exports</b><small>Logs, reports and operational records</small></div></div>
            <div className="path-step"><span>02</span><div><b>Separate reporting environment</b><small>Read-only analysis and draft summaries</small></div></div>
            <div className="path-step"><span>03</span><div><b>Qualified human review</b><small>Operators retain judgment and authority</small></div></div>
            <p className="boundary-note">No autonomous control, safety-critical decisions or write-enabled AI access to OT systems.</p>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="shell audience-grid">
          <article>
            <p className="eyebrow">For small businesses</p>
            <h2>Give your team fewer loose ends.</h2>
            <p>Improve customer intake, scheduling, follow-up, document routing, internal reporting and knowledge organization without replacing every system you use.</p>
            <Link className="text-link" href="/small-businesses">See small-business applications <span>→</span></Link>
          </article>
          <article>
            <p className="eyebrow">For field-focused teams</p>
            <h2>Make field information useful sooner.</h2>
            <p>Connect mobile forms, inspections, work orders and GIS assets with the office reports and exception workflows that keep work moving.</p>
            <Link className="text-link" href="/gis-and-field-operations">Explore GIS & field operations <span>→</span></Link>
          </article>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><p className="eyebrow">How engagements work</p><h2>Start small. Measure the result. Expand with purpose.</h2></div><p>Most work is scoped as a defined package, so deliverables, responsibilities and costs are understood before implementation begins.</p></div>
          <ol className="process-list">
            {process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section security-section">
        <div className="shell security-grid">
          <div><p className="eyebrow">Responsible by design</p><h2>Useful automation should strengthen trust—not ask you to surrender it.</h2></div>
          <ul className="check-list">
            <li>Least-privilege and read-only access whenever practical</li>
            <li>Client-owned accounts, credentials and organizational data</li>
            <li>Human review for consequential outputs and decisions</li>
            <li>Documented workflows, limitations and handoff</li>
            <li>Clear separation between IT reporting and OT control</li>
            <li>Transparent third-party tools and ongoing costs</li>
          </ul>
          <Link className="button button-secondary" href="/responsible-ai-and-security">Review the security approach</Link>
        </div>
      </section>

      <section className="section founder-section">
        <div className="shell founder-grid">
          <div className="founder-art" aria-hidden="true"><span>Systems</span><span>People</span><span>Operations</span></div>
          <div><p className="eyebrow">The R.A.W. approach</p><h2>Technical depth, explained in practical terms.</h2><p>Founded by Chris Randall, the consultancy draws on firsthand work across utility operations, IT infrastructure, cybersecurity, GIS, databases, billing and administrative systems, field information, employee training and technical documentation.</p><p>That experience spans both the systems themselves and the day-to-day work employees depend on them to complete. The aim is to help people do important work with better information, fewer repetitive steps and clearer support.</p><Link className="text-link" href="/about">More about the approach <span>→</span></Link></div>
        </div>
      </section>

      <section className="section faq-preview">
        <div className="shell"><div className="section-heading"><p className="eyebrow">Common questions</p><h2>A practical first conversation—without the sales theater.</h2></div>
          <div className="faq-list">
            <details><summary>Do we need to replace our current software?</summary><p>Usually not. The first goal is to understand whether existing spreadsheets, databases, shared drives and business applications can be connected or used more consistently.</p></details>
            <details><summary>Is our organization too small for this?</summary><p>No. Organizations with 2–100 employees often feel repetitive work and knowledge bottlenecks most sharply because every employee carries several responsibilities.</p></details>
            <details><summary>Will AI make decisions on its own?</summary><p>Not for consequential or safety-critical work. Review points, permissions and clear responsibility remain part of the workflow.</p></details>
          </div>
          <Link className="text-link" href="/frequently-asked-questions">Read all frequently asked questions <span>→</span></Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Bring one frustrating process</p><h2>Let’s find a practical place to begin.</h2><p>A short initial conversation can determine whether the problem is worth assessing—and whether this is the right fit.</p></div><Link className="button button-sand" href="/contact">Schedule an initial conversation</Link></div>
      </section>
    </main>
  );
}
