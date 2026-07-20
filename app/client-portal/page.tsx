import type { Metadata } from "next";
import Link from "next/link";
import { demos } from "../../lib/public-demo-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Public Client Portal Demos",
  description: "Explore fictional public demonstrations of managed workspaces for a small business, utility, and community organization.",
};

export default function ClientPortalGallery() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <div className="shell">
          <p className={styles.eyebrow}>Public product demonstrations</p>
          <h1>See how a controlled workspace could adapt to different organizations.</h1>
          <p className={styles.lead}>These are static, fictional examples. They contain no authentication, persistence, live AI, client connections, or real client data. Any future authenticated application would remain separate from this public marketing website.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className="shell">
          <div className={styles.notice}><strong>Demonstration boundary:</strong> every company, organization, person, metric, task, source, and response shown here is invented.</div>
          <div className={styles.grid}>
            {demos.map((demo) => {
              const href = demo.slug === "small-business" ? "/demo-portal" : `/demo-portal/${demo.slug}`;
              return <article key={demo.slug} className={styles.card}><span>{demo.initials}</span><p>{demo.sector}</p><h2>{demo.name}</h2><p>{demo.summary}</p><ul><li>No login or data entry</li><li>Read-only and draft-first concepts</li><li>Fictional usage and activity examples</li></ul><Link href={href}>Open public demo</Link></article>;
            })}
          </div>
          <div className={styles.architecture}><div><p className={styles.eyebrow}>Separation by design</p><h2>Public showcase here. Future client application elsewhere.</h2></div><p>The marketing website communicates the experience and safeguards. Real identity, tenant authorization, storage, secrets, API projects, metering, and agent execution would remain in a separately deployed private application.</p></div>
        </div>
      </section>
    </main>
  );
}
