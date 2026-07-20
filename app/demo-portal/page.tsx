import Link from "next/link";
import styles from "./page.module.css";

const capabilities = [
  ["Knowledge assistant", "Search approved policies, SOPs, manuals and internal documentation with source-aware answers."],
  ["Operations reporting", "Summarize recurring reports, highlight exceptions and prepare management-ready updates."],
  ["Read-only integrations", "Retrieve approved information from databases, file shares, GIS, CRM or business systems without changing production records."],
  ["Draft workspace", "Create new reports, notices and documents in a designated review area without overwriting official files."],
  ["Human approvals", "Pause consequential workflows and require an authorized person to review and approve the next step."],
  ["Activity visibility", "Record sources, tools, status, usage and errors so the organization can understand how the workspace is operating."],
];

const activity = [
  ["Operations Agent", "Weekly service summary", "Complete", "12 sources"],
  ["Knowledge Agent", "Vehicle-use policy question", "Complete", "3 sources"],
  ["Reporting Agent", "July performance draft", "Awaiting review", "Draft only"],
  ["Integration Monitor", "Approved data-source check", "Healthy", "Read-only"],
];

export const metadata = {
  title: "Example Client Portal | Randall Automation Works",
  description: "A demonstration of a customized, secure managed AI workspace for a fictional business.",
};

export default function DemoPortalPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.brandGroup}>
          <span className={styles.logo}>NP</span>
          <div><strong>Northstar Property Services</strong><small>Managed workspace demonstration</small></div>
        </div>
        <div className={styles.userGroup}><span>Demo Administrator</span><Link href="/client-login">Exit demo</Link></div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.sectionLabel}>Workspace</p>
          <nav aria-label="Demo portal navigation">
            <a className={styles.active} href="#overview">Overview</a>
            <a href="#assistant">Ask the workspace</a>
            <a href="#activity">Agent activity</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#controls">Controls & usage</a>
          </nav>
          <div className={styles.boundaryCard}><strong>Default boundary</strong><p>Read approved sources. Create drafts only. No production changes.</p></div>
        </aside>

        <section className={styles.content}>
          <section id="overview" className={styles.heroPanel}>
            <div><p className={styles.eyebrow}>Monday operations view</p><h1>Your organization&apos;s information, agents and reports in one controlled workspace.</h1><p>This fictional portal shows how a Randall Automation Works client environment could be branded, configured and separated for a specific business.</p></div>
            <div className={styles.healthCard}><span>Workspace status</span><strong>Healthy</strong><small>4 configured agents · read-only integrations</small></div>
          </section>

          <section className={styles.metrics} aria-label="Example workspace metrics">
            <article><span>Approved sources</span><strong>46</strong><small>Policies, SOPs and reports</small></article>
            <article><span>Runs this month</span><strong>184</strong><small>Across 8 authorized users</small></article>
            <article><span>Drafts awaiting review</span><strong>3</strong><small>No automatic publishing</small></article>
            <article><span>Usage allowance</span><strong>38%</strong><small>Monthly client limit</small></article>
          </section>

          <section id="assistant" className={styles.assistantPanel}>
            <div><p className={styles.eyebrow}>Customized manager agent</p><h2>Ask Northstar Workspace</h2><p>The production version could route a request to the correct specialist, retrieve approved client information and return a documented answer.</p></div>
            <div className={styles.chatPreview}>
              <div className={styles.examplePrompt}>Summarize open maintenance issues and prepare a review list for Wednesday.</div>
              <div className={styles.exampleAnswer}><strong>Example response</strong><p>I found 7 open issues across the approved weekly reports. Two are overdue, three need vendor follow-up and two are scheduled. I prepared a draft review list; no work orders or records were changed.</p><small>Sources: weekly operations report, vendor follow-up register, scheduling export</small></div>
              <button disabled>Live SDK agent added during implementation</button>
            </div>
          </section>

          <section id="activity" className={styles.panel}>
            <div className={styles.panelHeading}><div><p className={styles.eyebrow}>Operational visibility</p><h2>Recent agent activity</h2></div><span>Example data</span></div>
            <div className={styles.tableWrap}><table><thead><tr><th>Agent</th><th>Task</th><th>Status</th><th>Boundary</th></tr></thead><tbody>{activity.map(([agent,task,status,boundary])=><tr key={task}><td>{agent}</td><td>{task}</td><td>{status}</td><td>{boundary}</td></tr>)}</tbody></table></div>
          </section>

          <section id="capabilities" className={styles.panel}>
            <div className={styles.panelHeading}><div><p className={styles.eyebrow}>What RAW could configure</p><h2>A reusable platform customized to the client&apos;s actual work.</h2></div></div>
            <div className={styles.capabilityGrid}>{capabilities.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="controls" className={styles.controlGrid}>
            <article><p className={styles.eyebrow}>Client controls</p><h2>Clear limits instead of unrestricted access.</h2><ul><li>Tenant-specific users and permissions</li><li>Separate knowledge, credentials and logs</li><li>Read-only integrations by default</li><li>Draft-only document creation</li><li>Human approval before consequential actions</li></ul></article>
            <article><p className={styles.eyebrow}>Managed by RAW</p><h2>Ongoing support can be part of the service.</h2><ul><li>Agent instruction and workflow updates</li><li>Usage monitoring and monthly limits</li><li>Integration health and error review</li><li>Knowledge-source maintenance</li><li>Security, access and change documentation</li></ul></article>
          </section>

          <section className={styles.cta}><div><p className={styles.eyebrow}>Demonstration only</p><h2>This is the client experience—not yet a live authenticated SDK service.</h2><p>A production implementation would add server-side authentication, tenant isolation, a database, secure secrets, OpenAI API projects and the actual agent backend.</p></div><Link href="/contact">Discuss a pilot workspace</Link></section>
        </section>
      </div>
    </main>
  );
}
