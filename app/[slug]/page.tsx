import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "../../components/contact-form";
import { pageBySlug, pages } from "../page-content";

const contactEmail = "Chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug[slug];
  if (!page) return {};
  return {
    title: page.navLabel,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.metaDescription, url: `/${page.slug}` },
  };
}

export default async function InteriorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug[slug];
  if (!page) notFound();

  return (
    <main id="main-content">
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
              <aside className="page-aside"><p>{page.aside}</p><Link className="button button-primary" href="/contact">Start a conversation</Link></aside>
              <div className="content-sections">
                {page.sections.map((section) => (
                  <section className="content-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.intro && <p>{section.intro}</p>}
                    {section.bullets && <ul className="content-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                    {section.cards && <div className="plain-card-grid">{section.cards.map((card) => <article className="plain-card" key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>}
                    {section.callout && <aside className="content-callout"><h3>{section.callout.title}</h3><p>{section.callout.text}</p></aside>}
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
