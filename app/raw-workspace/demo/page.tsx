import type { Metadata } from "next";
import Link from "next/link";
import demoMedia from "../../../docs/raw-demo-media.json";
import transcript from "../../../lib/raw-demo-transcript.json";

const base = "https://randallautomationworks.com";
const path = "/raw-workspace/demo";
const title = "RAW Business Workspace Demo and Transcript";
const description = "Watch the RAW Business Workspace desktop demonstration and read its transcript: connected business information, AI, inspectable reports and reviewed follow-up work. Fictional sample data.";
const media = demoMedia.videos["raw-full-demo.mp4"];
const video = {
  "@context": "https://schema.org", "@type": "VideoObject", "@id": `${base}${path}#video`,
  name: title, description, url: `${base}${path}`, duration: media.duration_iso,
  uploadDate: "2026-10-24T00:00:00Z", thumbnailUrl: `${base}/products/raw-workspace/raw-demo-poster.jpg`,
  contentUrl: `${base}/products/raw-workspace/raw-full-demo.mp4`, inLanguage: "en-US",
  transcript: transcript.join("\n\n"), about: { "@id": `${base}/raw-workspace#product` },
  publisher: { "@id": `${base}/#business` }, isPartOf: { "@id": `${base}/#website` },
};

export const metadata: Metadata = {
  title: { absolute: `${title} | Randall Automation Works` }, description,
  alternates: { canonical: path },
  openGraph: { type: "website", title, description, url: path,
    images: [{ url: "/products/raw-workspace/raw-demo-poster.jpg", width: 1920, height: 1080, alt: "RAW Business Workspace desktop demonstration" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/products/raw-workspace/raw-demo-poster.jpg"] },
};

export default function RawDemoPage() {
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(video).replace(/</g, "\\u003c") }} />
    <section className="section demo-watch"><div className="shell">
      <p className="eyebrow"><Link href="/raw-workspace">RAW Business Workspace</Link> · Desktop demonstration</p>
      <h1>See your information become useful work.</h1>
      <p className="lead">Watch the actual RAW Business Workspace interface, then read the same walkthrough below. The demonstration uses fictional business data and synthetic narration. Processing waits are condensed.</p>
      <div className="workspace-video-frame"><video controls playsInline preload="none" poster="/products/raw-workspace/raw-demo-poster.jpg" width="1920" height="1080" aria-label="RAW Business Workspace desktop demonstration">
        <source src="/products/raw-workspace/raw-full-demo.mp4" type="video/mp4" />
        <track kind="captions" src="/products/raw-workspace/raw-full-demo.vtt" srcLang="en" label="English" default />
        Your browser does not support embedded video. <a href="/products/raw-workspace/raw-full-demo.mp4">Watch the demonstration</a>.
      </video></div>
      <p>{media.duration_label} · Actual interface · Fictional sample data</p>
      <p><a href="#transcript">Read the transcript</a> · <Link href="/raw-workspace">Capabilities and setup questions</Link> · <Link href="/contact">Discuss your business workflow</Link></p>
    </div></section>
    <section className="section" id="transcript"><div className="shell article-body demo-watch-transcript">
      <p className="eyebrow">Same demonstration, readable text</p><h2>Demonstration transcript</h2>
      {transcript.map((paragraph, i) => <p key={i} style={{ whiteSpace: "pre-line" }}>{paragraph}</p>)}
      <p>Supported connections and permissions depend on the configured account and installation. This demonstration does not establish results for a real customer or promise that every source system supports every workflow.</p>
    </div></section>
  </main>;
}
