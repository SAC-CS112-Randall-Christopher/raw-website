import type { Metadata } from "next";
import Link from "next/link";
import { bookingLink } from "../components/site-shell";

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
    title: "Your software works. We make it work together.",
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

const opportunities = [
  { number: "01", tag: "OFFICE & CUSTOMER WORK", title: "One customer. The whole picture.", text: "Bring priorities, shared information and next steps into a workspace shaped around your team.", href: "https://connectedfrontiers.com/platform/", link: "Explore Connected Frontiers" },
  { number: "02", tag: "REPORTING & AUTOMATION", title: "Build the report. Skip the repeat work.", text: "Turn approved database records and exports into repeatable reports. Use clear rules for routine steps and AI to help explore the information.", href: "/workflow-automation-examples", link: "Explore the opportunities" },
  { number: "03", tag: "GIS & FIELD OPERATIONS", title: "Connect the field to the office.", text: "Link inspections, mapped assets and follow-up. Give the next person the information they need to keep work moving.", href: "/gis-and-field-operations", link: "Explore field workflows" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="raw-hero">
        <div className="shell raw-hero-copy">
            <p className="eyebrow">Practical AI. Connected systems.</p>
            <h1>Your software works.<br /><em>We make it work together.</em></h1>
            <p className="raw-hero-intro">Practical automation, connected business information and software shaped around the people doing the work. Start with one useful improvement.</p>
            <div className="button-row"><a className="button button-primary" href="https://connectedfrontiers.com/">Explore Connected Frontiers <span aria-hidden="true">↗</span></a><a className="raw-watch-link" href={bookingLink} target="_blank" rel="noreferrer">Talk through your workflow <span aria-hidden="true">↗</span></a></div>
        </div>
        <section className="shell connected-product" id="connected-frontiers" aria-labelledby="connected-frontiers-title">
          <div className="connected-product-copy">
            <p className="eyebrow">Connected Frontiers · A platform by RAW</p>
            <h2 id="connected-frontiers-title">Your Business.<br /><em>Connected.</em></h2>
            <p>A cloud-hosted workspace that brings your people, business information and daily work together. Start fresh, discuss moving a workflow or connect the tools you already use.</p>
            <div className="button-row"><a className="button button-primary" href="https://connectedfrontiers.com/platform/">Explore the platform <span aria-hidden="true">↗</span></a><a className="text-link" href="https://connectedfrontiers.com/industries/">Find your industry <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="connected-product-details">
            <p className="connected-product-kicker">A clearer place to start each day</p>
            <article><span>01</span><div><h3>Bring the work together</h3><p>Explore tasks, shared documents, dashboards and reporting around your team’s priorities.</p></div></article>
            <article><span>02</span><div><h3>Make it fit your business</h3><p>Start with familiar industry workflows, then shape the setup with hands-on help from RAW.</p></div></article>
            <article><span>03</span><div><h3>Build on what works</h3><p>Review useful software connections and choose where optional AI can help.</p></div></article>
            <a className="text-link" href="https://connectedfrontiers.com/how-it-works/">See how we get you started <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </section>

      <section className="raw-opportunities section">
        <div className="shell"><div className="raw-section-heading"><div><p className="eyebrow">A few good places to start</p><h2>Where could this help?</h2></div><p>Start with the work that keeps getting stuck between people, programs and spreadsheets.</p></div>
          <div className="raw-opportunity-list">{opportunities.map(item => <article key={item.number}><span className="raw-number">{item.number}</span><div><p className="eyebrow">{item.tag}</p><h3>{item.title}</h3></div><div><p>{item.text}</p><Link className="text-link" href={item.href}>{item.link} <span aria-hidden="true">↗</span></Link></div></article>)}</div>
          <p className="raw-scope-note">Explore Connected Frontiers for your business workspace. Custom reporting, integrations and GIS work are scoped around your systems.</p>
        </div>
      </section>

      <section className="section raw-approach"><div className="shell raw-approach-grid"><div><p className="eyebrow">Real work. Real understanding.</p><h2>Built with you.<br />For the way you work.</h2><p>I’m Chris Randall. My background spans utility operations, GIS, IT and office systems. I build practical connections between the tools people depend on.</p><Link className="text-link" href="/about">Meet the person behind RAW <span aria-hidden="true">↗</span></Link></div><ol><li><span>01</span><div><h3>Start with one workflow.</h3><p>A free 30-minute consultation to understand the task, the people and the software involved.</p></div></li><li><span>02</span><div><h3>Agree on the useful result.</h3><p>Define the scope, price and ongoing costs. A paid assessment can help with more complex work.</p></div></li><li><span>03</span><div><h3>Build, test and hand over.</h3><p>Try it with your team. Document the process. Add support when you need it.</p></div></li></ol></div></section>

      <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Let’s connect the dots.</p><h2>What should work<br />better together?</h2><p>Bring one task. We’ll find a useful place to start.</p><Link className="cta-message" href="/contact">Prefer email? Send a message →</Link></div><a className="button button-sand" href={bookingLink} target="_blank" rel="noreferrer">Book a free consultation <span aria-hidden="true">↗</span></a></div></section>
    </main>
  );
}
