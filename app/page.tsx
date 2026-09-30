import type { Metadata } from "next";
import Link from "next/link";
import { bookingLink } from "../components/site-shell";
import { implementationExamples } from "./service-examples";

// Include the homepage in route metadata so client history restores its head.
export const metadata: Metadata = {
  title: { absolute: "AI Setup & Automation in Montrose, CO | Randall Automation Works" },
  description: "AI assistant and LLM setup, workflow automation and systems integration based in Montrose, Colorado, serving Western Colorado businesses and utilities.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    url: "/",
    title: "Bring your business into the automated era.",
    description: "Custom AI assistants and connected workflows, based in Montrose and serving Western Colorado businesses and utilities.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randall Automation Works",
    description: "AI setup and workflow automation based in Montrose, Colorado, serving Western Colorado organizations.",
    images: ["/opengraph-image.png"],
  },
};

const services = [
  { title: "AI assistants & LLM setup", text: "Get an AI assistant configured for your team's work, with the right information, tools and review steps. Local or hosted options.", href: "/responsible-ai-and-security", link: "Explore AI setup" },
  { title: "Workflow automation", text: "Connect the software you already use. Cut repeated data entry, prepare reports and keep routine handoffs moving.", href: "/services", link: "Explore automation" },
  { title: "GIS & field operations", text: "Bring field forms, inspections and asset information into the office workflows that depend on them.", href: "/gis-and-field-operations", link: "Explore GIS services" },
];

const process = [
  ["01", "Talk through the work", "Bring one repetitive task to a free 30-minute consultation. We'll discuss what happens today and whether there's a useful next step."],
  ["02", "Scope a focused pilot", "Agree on the workflow, deliverables, price and success measures before building. A paid assessment can help when the scope needs more work."],
  ["03", "Test, hand over, support", "Try the system with your team, document how it works and train the people using it. Add ongoing support if you need it."],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">AI setup & workflow automation <span>•</span> Montrose, Colorado</p>
            <h1>Bring your business into the automated era.</h1>
            <p className="hero-intro">Custom AI assistants and connected workflows that take repetitive work off your plate. Based in Montrose, serving businesses across Western Colorado.</p>
            <div className="button-row">
              <a className="button button-primary" href={bookingLink} target="_blank" rel="noreferrer">Book a free consultation</a>
              <Link className="button button-secondary" href="/responsible-ai-and-security">Explore AI setup</Link>
            </div>
            <p className="hero-founder">Work directly with Chris Randall, founder of Randall Automation Works.</p>
          </div>
          <div className="hero-visual">
            {/* Cloudflare serves responsive variants, with the original as fallback. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cdn-cgi/image/width=1600,quality=82,format=auto,onerror=redirect/images/hero-western-colorado-2026.png"
              srcSet="/cdn-cgi/image/width=640,quality=82,format=auto,onerror=redirect/images/hero-western-colorado-2026.png 640w, /cdn-cgi/image/width=1024,quality=82,format=auto,onerror=redirect/images/hero-western-colorado-2026.png 1024w, /cdn-cgi/image/width=1600,quality=82,format=auto,onerror=redirect/images/hero-western-colorado-2026.png 1600w"
              sizes="(max-width: 1050px) 100vw, 54vw"
              alt="Illustration of a Western Colorado valley with pasture, a stream, cottonwoods and distant mountains"
              width={1672}
              height={941}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="topo-lines" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">How I can help</p><h2>Less busywork. More room to run your business.</h2></div>
          <div className="service-grid">
            {services.map((service, index) => <article className="service-card" key={service.href}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.text}</p><Link className="text-link" href={service.href}>{service.link} <span aria-hidden="true">→</span></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Implementation experience</p><h2>Two ways I&apos;ve put AI to work.</h2><p>Examples from my own implementation work, described without client details.</p></div>
          <div className="card-grid problem-grid">
            {implementationExamples.map((example) => <article className="problem-card" key={example.title}><span className="card-line" /><h3>{example.title}</h3><p>{example.text}</p></article>)}
          </div>
          <Link className="text-link" href="/workflow-automation-examples">Explore workflow ideas <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section utility-feature">
        <div className="shell utility-grid">
          <div>
            <p className="eyebrow eyebrow-light">Local knowledge. Technical experience.</p>
            <h2>Built with an understanding of real operations.</h2>
            <p>My background spans utility operations, GIS, IT and administrative systems. I work with small businesses, utilities and field teams across Western Colorado.</p>
            <Link className="button button-sand" href="/expertise">Meet Chris & explore the experience</Link>
          </div>
          <div className="safe-path">
            <p className="safe-label">Utilities & special districts</p>
            <p>Connect reporting, asset records and office work while qualified people stay in charge.</p>
            <p className="boundary-note">No autonomous infrastructure control or write-enabled AI access to operational systems.</p>
            <Link className="button button-sand" href="/utilities-and-special-districts">Explore utility services</Link>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">A clear place to start</p><h2>One workflow at a time.</h2></div>
          <ol className="process-list">
            {process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
          <p className="process-note">We&apos;ll use straightforward code where clear rules are enough, and AI where language or documents make it useful.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Let&apos;s talk</p><h2>What would you like off your plate?</h2><p>Bring one task, a question or an idea. Start with a free 30-minute conversation.</p><Link className="cta-message" href="/contact">Prefer email? Send a message <span aria-hidden="true">→</span></Link></div><a className="button button-sand" href={bookingLink} target="_blank" rel="noreferrer">Book a free consultation</a></div>
      </section>
    </main>
  );
}
