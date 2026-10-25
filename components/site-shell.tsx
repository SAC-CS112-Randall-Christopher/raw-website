import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const contactEmail = "chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";
export const bookingLink = "https://calendar.app.google/Qwnjw6tS5TdDo5Hh7";

export const primaryNav = [
  { href: "/raw-workspace", label: "RAW Workspace" },
  { href: "/services", label: "Solutions" },
  { href: "/workflow-automation-examples", label: "Examples" },
  { href: "/about", label: "About" },
];

function Mark() {
  return <span className="brand-monogram" aria-hidden="true">RAW<span /></span>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Randall Automation Works home">
          <Mark />
          <span className="brand-name">Randall <span>Automation Works</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <a className="nav-contact" href={bookingLink} target="_blank" rel="noreferrer">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
        <MobileNav items={primaryNav} bookingLink={bookingLink} />
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
            <span className="brand-name">Randall <span>Automation Works</span></span>
          </Link>
          <p>Your software works.<br />We make it work together.</p>
          <div className="footer-contact">
            <a href={contactEmailLink}>{contactEmail}</a>
            <a href={contactPhoneLink}>{contactPhone}</a>
            <a href={bookingLink} target="_blank" rel="noreferrer">Book a free 30-minute consultation</a>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/raw-workspace">RAW Business Workspace</Link>
          <Link href="/services">Solutions</Link>
          <Link href="/workflow-automation-examples">Examples & opportunities</Link>
          <Link href="/how-engagements-work">How engagements work</Link>
          <Link href="/frequently-asked-questions">Frequently asked questions</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <h2>Specialties</h2>
          <Link href="/utilities-and-special-districts">Utilities & special districts</Link>
          <Link href="/gis-modernization">GIS modernization</Link>
          <Link href="/responsible-ai-and-security">AI setup & security</Link>
        </div>
        <div>
          <h2>Company & work</h2>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms & professional disclaimer</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Based in Montrose, serving Grand Junction and communities across Western Colorado.</span>
        <span>© {new Date().getFullYear()} Randall Automation Works</span>
      </div>
    </footer>
  );
}
