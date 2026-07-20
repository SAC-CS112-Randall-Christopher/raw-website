import Link from "next/link";

const contactEmail = "chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";

export const primaryNav = [
  { href: "/workflow-automation-examples", label: "Examples" },
  { href: "/client-portal", label: "Portal Demos" },
  { href: "/services", label: "Services" },
  { href: "/utilities-and-special-districts", label: "Utilities" },
  { href: "/small-businesses", label: "Small Business" },
  { href: "/gis-and-field-operations", label: "GIS & Field" },
  { href: "/expertise", label: "Expertise" },
  { href: "/responsible-ai-and-security", label: "AI Systems" },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true" />;
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
          <Link className="nav-contact" href="/contact">Start a conversation</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
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
          <Link href="/client-portal">Client portal demos</Link>
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
