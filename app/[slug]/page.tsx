import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "../../components/contact-form";
import { pageBySlug, pages } from "../page-content";

const contactEmail = "chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug[slug];
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    robots: page.indexable === false ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Randall Automation Works",
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/${page.slug}`,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function InteriorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug[slug];
  if (!page) notFound();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.navLabel, item: `${siteUrl}/${page.slug}` },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <div><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1></div>
          <p className="lead">{page.lead}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="shell">
          {slug === "contact" ? (
            <div className="contact-layout">
              <aside className="contact-context">
                <p className="eyebrow eyebrow-light">A useful first message</p>
                <h2>Tell us about the work—not the technology.</h2>
                <p>Helpful context includes:</p>
                <ul><li>What happens today</li><li>Who is involved</li><li>What regularly goes wrong or takes too long</li><li>Which tools hold the information</li><li>What a useful result would look like</li></ul>
                <div className="contact-details">
                  <a href={contactEmailLink}>{contactEmail}</a>
                  <a href={contactPhoneLink}>{contactPhone}</a>
                </div>
                <p>{page.aside}</p>
              </aside>
              <ContactForm />
            </div>
          ) : (
            <div className="content-grid">
              <aside className="page-aside">
                <p>{page.aside}</p>
                {slug === "services" && (
                  <Link className="aside-resource-link" href="/insights/first-ai-automation-project">
                    Read the first-project guide <span aria-hidden="true">→</span>
                  </Link>
                )}
              </aside>
              <div className="content-sections">
                {page.sections.map((section) => (
                  <section className="content-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.intro && <p>{section.intro}</p>}
                    {section.bullets && <ul className="content-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                    {section.cards && <div className="plain-card-grid">{section.cards.map((card) => <article className="plain-card" key={card.title}>{card.label && <p className="card-label">{card.label}</p>}<h3>{card.title}</h3><p>{card.text}</p>{card.details && <ul className="card-details">{card.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</article>)}</div>}
                    {section.callout && <aside className="content-callout"><h3>{section.callout.title}</h3><p>{section.callout.text}</p></aside>}
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {slug !== "contact" && (
        <section className="cta-section subpage-cta">
          <div className="shell cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">A practical next step</p>
              <h2>Bring the workflow that keeps causing friction.</h2>
              <p>An initial conversation can help determine whether the right next step is a process change, focused code, systems integration or carefully configured AI.</p>
            </div>
            <Link className="button button-sand" href="/contact">Start a conversation</Link>
          </div>
        </section>
      )}
    </main>
  );
}
