import type { Metadata } from "next";
import Link from "next/link";
import { bookingLink } from "../components/site-shell";
import demoMedia from "../docs/raw-demo-media.json";

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

const highlightMedia = demoMedia.videos['raw-highlight.mp4'];
const highlightVideo = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "RAW Business Workspace — Answers you can use",
  description: `A ${Math.round(highlightMedia.duration)}-second overview of RAW Business Workspace: connected AI, imported business information, added database fields, inspectable reports, email and approved task/calendar creation. Processing waits condensed.`,
  thumbnailUrl: "https://randallautomationworks.com/products/raw-workspace/raw-highlight-poster.jpg",
  uploadDate: "2026-10-24T00:00:00Z",
  duration: highlightMedia.duration_iso,
  contentUrl: "https://randallautomationworks.com/products/raw-workspace/raw-highlight.mp4",
};

const opportunities = [
  { number: "01", tag: "OFFICE & CUSTOMER WORK", title: "One customer. The whole picture.", text: "Bring customer records, correspondence and next steps into a connected workspace. Prepare a reply with the context close at hand.", href: "/raw-workspace", link: "Meet RAW Workspace" },
  { number: "02", tag: "REPORTING & AUTOMATION", title: "Build the report. Skip the repeat work.", text: "Turn approved database records and exports into repeatable reports. Use clear rules for routine steps and AI to help explore the information.", href: "/workflow-automation-examples", link: "Explore the opportunities" },
  { number: "03", tag: "GIS & FIELD OPERATIONS", title: "Connect the field to the office.", text: "Link inspections, mapped assets and follow-up. Give the next person the information they need to keep work moving.", href: "/gis-and-field-operations", link: "Explore field workflows" },
];

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(highlightVideo).replace(/</g, "\\u003c") }} />
      <section className="raw-hero">
        <div className="shell raw-hero-grid">
          <div className="raw-hero-copy">
            <p className="eyebrow">Independent thinking. Connected systems.</p>
            <h1>Your software works.<br /><em>We make it work together.</em></h1>
            <p className="raw-hero-intro">Bring your business information, AI and everyday work together. Practical software and automation, built around the way you operate.</p>
            <div className="button-row"><Link className="button button-primary" href="/raw-workspace">Explore RAW Workspace <span aria-hidden="true">↗</span></Link><a className="raw-watch-link" href="#workspace-demo">Watch it work <span aria-hidden="true">↓</span></a></div>
            <p className="raw-location"><span aria-hidden="true" /> Built in Montrose, Colorado. Working with you.</p>
          </div>
          <figure className="raw-brand-art">
            {/* Owner-supplied brand artwork, displayed without alteration. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/raw-copper-brand.jpg" width={1280} height={768} alt="RAW — Randall Automation Works. Copper lettering on dark stone with blue circuit details." fetchPriority="high" />
            <figcaption>AI integration <span> / </span> Business automation <span> / </span> Custom software</figcaption>
          </figure>
        </div>
        <div className="shell raw-hero-bottom"><span>YOUR TOOLS. YOUR INFORMATION. CONNECTED.</span><a href="#workspace-demo">See what that looks like <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="raw-product section" id="workspace-demo" aria-labelledby="workspace-offer-title">
        <div className="shell raw-product-heading"><p className="eyebrow">Featured product · RAW Business Workspace</p><span className="raw-section-index">01 / BUILT BY RAW</span></div>
        <div className="shell raw-product-grid">
          <div><h2 id="workspace-offer-title">Less scattered.<br /><em>More connected.</em></h2><p>Keep the software you rely on. RAW brings supported business information, connected inboxes and your AI assistant into one place to work.</p><ul className="raw-product-points"><li>Ask a question. Inspect the records.</li><li>Prepare a reply with useful context.</li><li>Review and save the next step.</li></ul><Link className="text-link" href="/raw-workspace">Inside RAW Workspace <span aria-hidden="true">↗</span></Link></div>
          <figure className="workspace-home-film">
            <div className="raw-player-label"><span className="raw-status-dot" /> PRODUCT WALKTHROUGH <span>{Math.round(highlightMedia.duration)} SECONDS</span></div>
            <div className="workspace-video-frame"><video controls playsInline preload="none" poster="/products/raw-workspace/raw-highlight-poster.jpg" width="1920" height="1080" aria-label="RAW Business Workspace highlight"><source src="/products/raw-workspace/raw-highlight.mp4" type="video/mp4" /><track kind="captions" src="/products/raw-workspace/raw-highlight.vtt" srcLang="en" label="English" default />Your browser does not support embedded video. <a href="/products/raw-workspace/raw-highlight.mp4">Watch the highlight</a>.</video></div>
            <figcaption>Actual RAW interface · See your information, AI and daily work come together. Processing waits are condensed.</figcaption>
            <div className="workspace-film-links"><Link className="text-link" href="/raw-workspace#see-it-in-action">Watch the full demo →</Link><a className="text-link" href="/products/raw-workspace/raw-highlight.mp4?download=1" download="RAW-highlight.mp4">Download highlight MP4</a><a className="text-link" href={bookingLink} target="_blank" rel="noreferrer">Book a demo ↗</a><a className="text-link" href="/products/raw-workspace/raw-highlight-transcript.txt">Read the highlight transcript</a></div>
          </figure>
        </div>
      </section>

      <section className="raw-opportunities section">
        <div className="shell"><div className="raw-section-heading"><div><p className="eyebrow">A few good places to start</p><h2>Better connections.<br />Useful possibilities.</h2></div><p>Start with the work that keeps getting stuck between people, programs and spreadsheets.</p></div>
          <div className="raw-opportunity-list">{opportunities.map(item => <article key={item.number}><span className="raw-number">{item.number}</span><div><p className="eyebrow">{item.tag}</p><h3>{item.title}</h3></div><div><p>{item.text}</p><Link className="text-link" href={item.href}>{item.link} <span aria-hidden="true">↗</span></Link></div></article>)}</div>
          <p className="raw-scope-note">RAW Workspace is the product you can see today. Custom reporting, integrations and GIS work are scoped around your systems.</p>
        </div>
      </section>

      <section className="section raw-approach"><div className="shell raw-approach-grid"><div><p className="eyebrow">Real work. Real understanding.</p><h2>Built with you.<br />For the way you work.</h2><p>I’m Chris Randall. My background spans utility operations, GIS, IT and office systems. I build practical connections between the tools people depend on.</p><Link className="text-link" href="/about">Meet the person behind RAW <span aria-hidden="true">↗</span></Link></div><ol><li><span>01</span><div><h3>Start with one workflow.</h3><p>A free 30-minute consultation to understand the task, the people and the software involved.</p></div></li><li><span>02</span><div><h3>Agree on the useful result.</h3><p>Define the scope, price and ongoing costs. A paid assessment can help with more complex work.</p></div></li><li><span>03</span><div><h3>Build, test and hand over.</h3><p>Try it with your team. Document the process. Add support when you need it.</p></div></li></ol></div></section>

      <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Let’s connect the dots.</p><h2>What should work<br />better together?</h2><p>Bring one task. We’ll find a useful place to start.</p><Link className="cta-message" href="/contact">Prefer email? Send a message →</Link></div><a className="button button-sand" href={bookingLink} target="_blank" rel="noreferrer">Book a free consultation <span aria-hidden="true">↗</span></a></div></section>
    </main>
  );
}
