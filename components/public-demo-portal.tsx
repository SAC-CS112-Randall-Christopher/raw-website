import Link from "next/link";
import type { DemoPortal } from "../lib/public-demo-data";
import styles from "./public-demo-portal.module.css";

const controls = ["Fictional public display only", "No login or user accounts", "No persistence or form submission", "Read-only and draft-first concepts", "Human review before consequential actions"];

export function PublicDemoPortal({ demo }: { demo: DemoPortal }) {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.banner}>Public fictional demonstration · no authentication, persistence, live AI, client connection, or real data</div>
      <header className={styles.topbar}>
        <div className={styles.brand}><span>{demo.initials}</span><div><strong>{demo.name}</strong><small>{demo.sector} workspace demonstration</small></div></div>
        <div className={styles.demoNav}><Link href="/client-portal">All demos</Link><Link href="/contact">Discuss a pilot</Link></div>
      </header>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p>Public demo</p>
          <nav aria-label="Portal demo navigation"><a href="#overview">Overview</a><a href="#assistant">Example request</a><a href="#activity">Activity</a><a href="#capabilities">Capabilities</a><a href="#controls">Boundaries</a></nav>
          <div><strong>Default boundary</strong><p>Read approved sources. Create drafts only. Make no production changes.</p></div>
        </aside>
        <div className={styles.content}>
          <section id="overview" className={styles.hero}>
            <div><p className={styles.eyebrow}>{demo.eyebrow}</p><h1>{demo.headline}</h1><p>{demo.summary} Every name, number, activity, and source shown is invented for demonstration.</p></div>
            <article className={styles.health}><span>Example status</span><strong>{demo.status}</strong><small>{demo.statusDetail}</small></article>
          </section>
          <section className={styles.metrics}>{demo.metrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.detail}</small></article>)}</section>
          <section id="assistant" className={styles.assistant}>
            <div><p className={styles.eyebrow}>Static workspace example</p><h2>Ask {demo.name}</h2><p>A future authenticated application could retrieve tenant-scoped information and return a documented answer. This public page does not send or store requests.</p></div>
            <div className={styles.chat}><div className={styles.prompt}>{demo.prompt}</div><div className={styles.answer}><strong>Example response</strong><p>{demo.answer}</p><small>Fictional sources: {demo.sources}</small></div><button disabled>Public demo · live agent not connected</button></div>
          </section>
          <section id="activity" className={styles.panel}><div className={styles.heading}><div><p className={styles.eyebrow}>Operational visibility</p><h2>Recent example activity</h2></div><span>Fictional data</span></div><div className={styles.tableWrap}><table><thead><tr><th>Agent</th><th>Task</th><th>Status</th><th>Boundary</th></tr></thead><tbody>{demo.activity.map((row) => <tr key={row.task}><td>{row.agent}</td><td>{row.task}</td><td>{row.status}</td><td>{row.boundary}</td></tr>)}</tbody></table></div></section>
          <section id="capabilities" className={styles.panel}><p className={styles.eyebrow}>What RAW could configure</p><h2>A reusable pattern adapted to each organization.</h2><div className={styles.capabilities}>{demo.capabilities.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
          <section id="controls" className={styles.controls}><article><p className={styles.eyebrow}>Public demonstration boundaries</p><h2>Clear limitations, stated up front.</h2><ul>{controls.map((control) => <li key={control}>{control}</li>)}</ul></article><article><p className={styles.eyebrow}>Separate future application</p><h2>The authenticated platform remains private.</h2><p>The future client application, identity layer, tenant isolation, secrets, databases, metering, and agent backend belong in the separate private <code>raw-client-platform</code> repository—not this marketing website.</p></article></section>
          <section className={styles.cta}><div><p className={styles.eyebrow}>Demonstration only</p><h2>See the concept, then design the real boundaries before implementation.</h2><p>This showcase communicates a possible client experience without representing a live service.</p></div><Link href="/contact">Discuss a pilot workspace</Link></section>
        </div>
      </div>
    </main>
  );
}
