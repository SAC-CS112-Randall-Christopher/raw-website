import Link from "next/link";

const contactEmail = "chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";

export const primaryNav = [
  { href: "/workflow-automation-examples", label: "Examples" },
  { href: "/services", label: "Services" },
  { href: "/utilities-and-special-districts", label: "Utilities" },
  { href: "/small-businesses", label: "Small Business" },
  { href: "/gis-and-field-operations", label: "GIS & Field" },
  { href: "/expertise", label: "Expertise" },
];

const aiSystemsNav = [
  { href: "/responsible-ai-and-security", label: "AI systems overview" },
  { href: "/local-ai-deployments", label: "Local deployments" },
  { href: "/hosted-ai-deployments", label: "Hosted & managed deployments" },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true" />;
}

function AiSystemsTree() {
  return (
    <details className="nav-tree">
      <summary><span>AI Systems</span><span className="nav-tree-chevron" aria-hidden="true">⌄</span></summary>
      <div className="nav-submenu">
        {aiSystemsNav.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Randall Automation Works home">
          <Mark />
          <span>Randall Automation Works</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <AiSystemsTree />
          <Link className="nav-contact" href="/contact">Start a conversation</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <AiSystemsTree />
            <Link href="/contact">Start a conversation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <Mark />
            <span>Randall Automation Works</span>
          </Link>
          <p>Practical code-first automation, responsible AI and systems integration for Western Colorado organizations.</p>
          <div className="footer-contact">
            <a href={contactEmailLink}>{contactEmail}</a>
            <a href={contactPhoneLink}>{contactPhone}</a>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/workflow-automation-examples">Workflow examples</Link>
          <Link href="/services">Services</Link>
          <Link href="/how-engagements-work">How engagements work</Link>
          <Link href="/frequently-asked-questions">Frequently asked questions</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <h2>Specialties</h2>
          <Link href="/utilities-and-special-districts">Utilities & special districts</Link>
          <Link href="/small-businesses">Small businesses</Link>
          <Link href="/gis-and-field-operations">GIS & field operations</Link>
          <Link href="/responsible-ai-and-security">AI systems & security</Link>
          <Link href="/local-ai-deployments">Local AI deployments</Link>
          <Link href="/hosted-ai-deployments">Hosted & managed AI</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/expertise">Expertise</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms & professional disclaimer</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Serving Montrose, Grand Junction and communities across Western Colorado.</span>
        <span>© {new Date().getFullYear()} Randall Automation Works</span>
      </div>
    </footer>
  );
}
