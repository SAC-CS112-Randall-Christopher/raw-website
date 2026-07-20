import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Client Login | Randall Automation Works",
  description: "Secure access to customized Randall Automation Works client workspaces.",
};

export default function ClientLoginPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>RAW Managed AI Workspaces</p>
          <h1>Secure access to your organization&apos;s customized workspace.</h1>
          <p className={styles.lead}>
            Each client workspace is designed around that organization&apos;s approved knowledge,
            users, permissions, reports and integrations. Client data and agent configurations
            remain separated from other organizations.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/demo-portal">View example client portal</Link>
            <Link className={styles.secondaryButton} href="/contact">Discuss a managed workspace</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.loginGrid}>
            <article className={styles.loginCard}>
              <span className={styles.status}>Client access preview</span>
              <h2>Sign in to your workspace</h2>
              <p>
                Production access will use server-validated identity, tenant isolation and
                role-based permissions. Password handling will not be performed in browser-only code.
              </p>
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" placeholder="name@yourorganization.com" disabled />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••••••" disabled />
              <button type="button" disabled>Secure sign in coming with deployment</button>
              <small>This page is a design preview. It does not accept or store credentials.</small>
            </article>

            <div className={styles.securityPanel}>
              <p className={styles.eyebrow}>Designed for controlled access</p>
              <h2>Security is enforced by the application—not by agent instructions.</h2>
              <ul>
                <li>Authenticated users are assigned to a server-controlled client tenant.</li>
                <li>Knowledge, conversations, logs and credentials are isolated by tenant.</li>
                <li>Read-only integrations are the default; write access is separately approved.</li>
                <li>Administrative access can be logged and limited to support purposes.</li>
                <li>Usage limits and API costs can be tracked separately for each client.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
