import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroVisual } from "../../components/page-hero-visual";

const description = "Practical AI automation, workflow, GIS and responsible-adoption guidance for Western Colorado small businesses, utilities and local organizations.";

export const metadata: Metadata = {
  title: { absolute: "Practical AI Automation Insights | Randall Automation Works" },
  description,
  alternates: { canonical: "/insights" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    title: "Practical AI Automation Insights",
    description,
    url: "/insights",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical AI Automation Insights",
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function InsightsPage() {
  return (
    <main id="main-content">
      <section className="page-hero insights-hero">
        <div className="shell page-hero-inner">
          <div>
            <p className="eyebrow">Insights & resources</p>
            <h1>Practical guidance before you choose a tool or vendor.</h1>
          </div>
          <div className="page-hero-side">
            <p className="lead">Experience-grounded articles for organizations that want useful automation, clear security boundaries and decisions employees can understand.</p>
            <PageHeroVisual slug="insights" />
          </div>
        </div>
      </section>

      <section className="section insights-index">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Featured guide</p>
              <h2>Start with the work—not the technology.</h2>
            </div>
            <p>The strongest first automation project is usually visible, repetitive and easy for the people doing the work to evaluate.</p>
          </div>

          <Link className="article-card" href="/insights/first-ai-automation-project">
            <div className="article-card-number" aria-hidden="true">01</div>
            <div>
              <p className="article-kicker"><time dateTime="2026-07-18">July 18, 2026</time> · 9 minute read</p>
              <h2>How to Choose a Practical First AI Automation Project for a Small Organization</h2>
              <p>Use six practical tests to find a bounded, measurable pilot—and recognize the projects that should wait.</p>
              <span className="article-card-link">Read the guide <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          <aside className="editorial-promise">
            <p className="eyebrow">The publishing standard</p>
            <h2>Useful enough to support a real decision.</h2>
            <p>Randall Automation Works will publish focused guidance grounded in operational questions—not thin city pages, manufactured statistics or filler written only to attract search traffic.</p>
          </aside>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Have a workflow in mind?</p>
            <h2>Bring the process that keeps causing friction.</h2>
            <p>An initial conversation can help determine whether it is ready for assessment—or whether a simpler improvement should come first.</p>
          </div>
          <Link className="button button-sand" href="/contact">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
