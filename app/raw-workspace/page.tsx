import type { Metadata } from "next";
import Link from "next/link";
import { bookingLink } from "../../components/site-shell";
import demoMedia from "../../docs/raw-demo-media.json";

const base = "https://randallautomationworks.com";
const fullDemoMedia = demoMedia.videos['raw-full-demo.mp4'];
const description = "Bring your AI and existing business information into RAW Business Workspace. Add linked information, build inspectable reports, prepare replies and organize approved work in the planner and calendar.";

export const metadata: Metadata = {
  title: "RAW Business Workspace | Connected Small Business Software",
  description,
  alternates: { canonical: "/raw-workspace" },
  openGraph: {
    type: "website", url: "/raw-workspace", title: "Your business. Connected. | RAW Business Workspace",
    description, images: [{ url: "/products/raw-workspace/social-card.png", width: 1200, height: 630, alt: "RAW Business Workspace: customers, quotes and work, connected" }],
  },
  twitter: { card: "summary_large_image", title: "RAW Business Workspace", description, images: ["/products/raw-workspace/social-card.png"] },
};

const features = [
  ["01", "Bring your AI into the work.", "Connect a supported assistant and approve its access to RAW tools. Ask for help while working with the business information on screen."],
  ["02", "Keep the information you already have.", "Import supported database snapshots or table exports. Browse customer, equipment and billing information with its source date and identity available."],
  ["03", "Add what your business needs.", "Save typed RAW fields alongside imported records. Keep delivery instructions, dispatch details and other additional information connected to the existing business record."],
  ["04", "Ask questions. Inspect the answer.", "Build reusable reports from permitted information and approved business definitions. Open supporting records, keep useful views and review report history."],
  ["05", "Give correspondence useful context.", "Read and summarize permitted messages, inspect related business information, and prepare useful replies with the customer context already at hand."],
  ["06", "Keep the next step connected.", "Let the assistant offer a follow-up, clarify its timing, and save approved tasks or calendar blocks. Priorities, dates and links keep daily work understandable."],
];

const faqs = [
  { q: "What is RAW Business Workspace?", a: "RAW Business Workspace is modular small business software from Randall Automation Works. It brings customer records, tasks, documents, equipment quotes and reporting into a connected workspace." },
  { q: "Who is it designed for?", a: "Small business owners and operating teams who need their customer information and daily work connected. Equipment rental and service businesses are especially natural fits." },
  { q: "Can it work with data we already have?", a: "The workspace supports SQLite and CSV uploads, schema discovery and SQL-backed reports. We review your source formats, access requirements and connection needs when configuring your workspace." },
  { q: "Can we choose the modules we use?", a: "Yes. Modules can be configured around the business. Customer records, tasks, documents, rental workflows and reports can be brought together to fit the work your team actually does." },
  { q: "How do we get started?", a: "Contact Randall Automation Works or book a conversation with Chris Randall. We will discuss your workflows, data and the configuration your business needs, then provide a clear scope and quote." },
];

const structuredData = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", "@id": `${base}/raw-workspace#product`, name: "RAW Business Workspace", alternateName: "RAW Workspace", url: `${base}/raw-workspace`, description,
      applicationCategory: "BusinessApplication", operatingSystem: "Web browser", creator: { "@id": `${base}/#business` },
      image: `${base}/products/raw-workspace/overview.png`, featureList: ["Supported connected AI", "Imported business snapshots", "Linked RAW database fields", "Inspectable saved reports", "Email summary and reply preparation", "Approved task and calendar creation", "Equipment quotes from source rates"] },
    { "@type": "WebPage", "@id": `${base}/raw-workspace#page`, url: `${base}/raw-workspace`, name: "RAW Business Workspace", description, about: { "@id": `${base}/raw-workspace#product` }, isPartOf: { "@id": `${base}/#website` } },
    { "@type": "VideoObject", name: "RAW — Your information. Useful work.", description: "A desktop demonstration of supported connected AI, imported business information, added RAW database fields used in an AI answer, inspectable reports, email reply preparation, and approved task and calendar creation. Processing waits are condensed.", thumbnailUrl: `${base}/products/raw-workspace/raw-demo-poster.jpg`, uploadDate: "2026-10-24T00:00:00Z", duration: fullDemoMedia.duration_iso, contentUrl: `${base}/products/raw-workspace/raw-full-demo.mp4`, about: { "@id": `${base}/raw-workspace#product` } },
    { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "RAW Business Workspace", item: `${base}/raw-workspace` }] },
  ],
};

export default function RawWorkspace() {
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <section className="workspace-hero">
      <div className="shell">
        <p className="workspace-breadcrumb"><Link href="/">Randall Automation Works</Link><span aria-hidden="true">/</span> RAW Business Workspace</p>
        <div className="workspace-hero-copy"><p className="eyebrow eyebrow-light">RAW Business Workspace</p><h1>Your business.<br /><em>Connected.</em></h1><p>Keep the software you rely on. Connect its business information with your AI assistant, understand what is happening and turn answers into useful work.</p><div className="button-row"><a className="button button-sand" href={bookingLink} target="_blank" rel="noreferrer">Discuss your workflow with Chris <span aria-hidden="true">↗</span></a><a className="workspace-watch-link" href="#see-it-in-action">See it in action <span aria-hidden="true">↓</span></a></div><p className="workspace-byline">Built by Randall Automation Works · Montrose, Colorado</p></div>
        <figure className="workspace-product-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/raw-workspace/overview.png" width={1600} height={1000} alt="Actual RAW Business Workspace home screen showing the business overview, customers, quotes and tasks" fetchPriority="high" />
          <figcaption>Your business information and daily work, connected</figcaption>
        </figure>
      </div>
    </section>

    <section className="section workspace-intro"><div className="shell workspace-two-col"><div><p className="eyebrow">One place to keep things moving</p><h2>Less scattered.<br />More connected.</h2></div><div><p>Customer details in one system. Quotes in another. Tasks and files somewhere else. The information exists, but your team still has to piece it together.</p><p>RAW works with permitted business information from supported connections and source snapshots. Ask ordinary questions, inspect the records behind an answer and keep reports, customer context and follow-up available in one workspace. We agree on the inputs and access for your business before connecting them.</p></div></div></section>

    <section className="section workspace-film-section" id="see-it-in-action">
      <div className="shell">
        <div className="section-heading"><p className="eyebrow">The full demo · {fullDemoMedia.duration_label}</p><h2>Your information. Useful work.</h2><p>Bring your AI, business information and connected email inboxes into one workspace. Add what is missing, ask a question, prepare a reply and organize the next step.</p></div>
        <div className="workspace-video-frame">
          <video controls playsInline preload="none" poster="/products/raw-workspace/raw-demo-poster.jpg" width="1920" height="1080" aria-label="RAW Business Workspace full demonstration">
            <source src="/products/raw-workspace/raw-full-demo.mp4" type="video/mp4" />
            <track kind="captions" src="/products/raw-workspace/raw-full-demo.vtt" srcLang="en" label="English" default />
            Your browser does not support embedded video. <a href="/products/raw-workspace/raw-full-demo.mp4">Watch the full demonstration</a>.
          </video>
        </div>
        <p className="workspace-caption">Follow Pine Ridge Rental &amp; Service from connected business information to a useful report, a reviewed reply and a scheduled next step. See added customer details work alongside existing records, with the assistant available across pages. Processing waits are condensed.</p>
        <p>Bring one recurring task and the software you use today. We will discuss the first useful improvement for your business.</p>
        <div className="workspace-film-links"><a className="button button-primary" href={bookingLink} target="_blank" rel="noreferrer">Book a demo <span aria-hidden="true">↗</span></a><a className="text-link" href="/products/raw-workspace/raw-full-demo.mp4?download=1" download="RAW-full-demo.mp4">Download full demo MP4</a><a className="text-link" href="/products/raw-workspace/raw-demo-transcript.txt">Read the demo transcript</a><a className="text-link" href="/products/raw-workspace/raw-full-demo.vtt" download>Download English captions</a></div>
      </div>
    </section>

    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Built around the work</p><h2>The right details.<br />Right where you need them.</h2></div><div className="workspace-feature-grid">{features.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section workspace-detail-section"><div className="shell workspace-detail-grid"><figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/products/raw-workspace/quotes.png" width={1600} height={1000} loading="lazy" alt="Actual equipment quote screen with source rates and rental line items" /><figcaption>Build a quote from connected equipment and source rates</figcaption></figure><div><p className="eyebrow">For the way your business runs</p><h2>A workspace.<br />Your way of working.</h2><p>Rental desk, service team or growing small business: the work is different. Your workspace should reflect that.</p><p>Choose the modules that matter, connect the information you use, and give the people doing the work a clear place to start.</p><Link className="text-link" href="/contact">Discuss your configuration <span aria-hidden="true">→</span></Link></div></div></section>

    <section className="section"><div className="shell workspace-faq"><div><p className="eyebrow">A few useful answers</p><h2>Get to know<br />RAW Workspace.</h2></div><div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">RAW Business Workspace</p><h2>Bring your business together.</h2><p>Tell Chris about the customers, data and daily work you want to connect.</p><Link className="cta-message" href="/contact">Send a message <span aria-hidden="true">→</span></Link></div><a className="button button-sand" href={bookingLink} target="_blank" rel="noreferrer">Talk about your workspace <span aria-hidden="true">↗</span></a></div></section>
  </main>;
}
