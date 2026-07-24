import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroVisual } from "../../components/page-hero-visual";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";

export const metadata: Metadata = {
  title: "GIS Modernization & ArcGIS Implementation | Western Colorado",
  description:
    "Modernize legacy GIS systems or implement a new ArcGIS environment with Survey123, maintenance databases, field data collection, asset history and CIP forecasting.",
  alternates: { canonical: "/gis-modernization" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    title: "GIS Modernization & ArcGIS Implementation | Western Colorado",
    description:
      "Turn legacy maps, spreadsheets and disconnected maintenance records into a current ArcGIS-based planning system for field operations, asset history and capital improvement forecasting.",
    url: "/gis-modernization",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIS Modernization & ArcGIS Implementation | Western Colorado",
    description:
      "Modern ArcGIS, Survey123 and maintenance-data workflows for utilities, special districts and field-focused organizations.",
    images: ["/opengraph-image.png"],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "GIS Modernization", item: `${siteUrl}/gis-modernization` },
  ],
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GIS Modernization and ArcGIS Implementation",
  provider: {
    "@type": "Organization",
    name: "Randall Automation Works",
    url: siteUrl,
  },
  areaServed: "Western Colorado",
  serviceType: "GIS modernization, ArcGIS implementation, Survey123 configuration and maintenance data integration",
  description:
    "Modernize legacy GIS systems or implement a new ArcGIS environment that connects field data, maintenance history, asset information and management reporting for stronger capital improvement planning.",
};

export default function GisModernizationPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />

      <section className="page-hero">
        <div className="shell page-hero-inner">
          <div>
            <p className="eyebrow">GIS modernization & implementation</p>
            <h1>Turn legacy maps and maintenance records into a reliable planning system.</h1>
          </div>
          <div className="page-hero-side">
            <p className="lead">
              Modernize an existing GIS—or build one where none exists—using the ArcGIS suite, Survey123,
              structured maintenance databases and practical field-to-office workflows.
            </p>
            <PageHeroVisual slug="gis-modernization" />
          </div>
        </div>
      </section>

      <section className="page-body">
        <div className="shell">
          <div className="content-grid">
            <aside className="page-aside">
              <p>
                A useful GIS should do more than show where assets are. It should help explain what has happened,
                where problems are recurring and what should be considered in the next capital plan.
              </p>
              <Link className="aside-resource-link" href="/utilities-and-special-districts">
                Explore utility-focused services <span aria-hidden="true">→</span>
              </Link>
            </aside>

            <div className="content-sections">
              <section className="content-section">
                <h2>Modernize without discarding useful information</h2>
                <p>
                  Many utilities, special districts and local organizations already have valuable information, but it
                  is divided among paper maps, shapefiles, spreadsheets, Access databases, billing systems, work orders,
                  staff knowledge and aging desktop GIS projects. Modernization begins by identifying what can be
                  preserved, corrected, connected and made easier to maintain.
                </p>
                <ul className="content-list">
                  <li>Review existing maps, layers, databases, spreadsheets and field records</li>
                  <li>Identify authoritative data sources and stable asset identifiers</li>
                  <li>Clean duplicate, incomplete or conflicting records</li>
                  <li>Move repeatable updates into documented and controlled workflows</li>
                  <li>Preserve a clear human correction and quality-control path</li>
                  <li>Build around the organization&apos;s actual staffing, budget and operational needs</li>
                </ul>
                <aside className="content-callout">
                  <h3>Modernization does not always mean replacement</h3>
                  <p>
                    Existing SQL, Access, CSV, billing and maintenance systems can often remain authoritative while
                    ArcGIS provides the spatial view, field workflow and decision-support layer.
                  </p>
                </aside>
              </section>

              <section className="content-section">
                <h2>ArcGIS and Survey123 built around real field work</h2>
                <p>
                  The ArcGIS suite can provide a connected environment for office mapping, secure web maps, mobile
                  field collection, inspections, dashboards and management reporting. Survey123 can be configured as
                  more than a simple form: it can serve as a structured maintenance and inspection workflow tied to
                  mapped assets and custom data requirements.
                </p>
                <div className="plain-card-grid">
                  <article className="plain-card">
                    <h3>ArcGIS Pro and ArcGIS Online</h3>
                    <p>
                      Establish maintainable data models, maps, hosted layers, symbology, permissions and publishing
                      practices for office and organizational use.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Survey123 maintenance workflows</h3>
                    <p>
                      Build custom forms for inspections, repairs, leaks, valve exercising, hydrant work, meter activity,
                      photos, notes, labor, materials and other organization-specific maintenance records.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Field Maps and mobile access</h3>
                    <p>
                      Give field employees access to current maps and approved editing tools while preserving roles,
                      validation rules and review requirements.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Dashboards and management views</h3>
                    <p>
                      Present asset condition, maintenance trends, open items and project priorities in a form that
                      supervisors, managers and board members can understand.
                    </p>
                  </article>
                </div>
              </section>

              <section className="content-section">
                <h2>Build a maintenance history that supports CIP forecasting</h2>
                <p>
                  Capital improvement planning becomes stronger when decisions can be tied to repeatable maintenance
                  history instead of isolated memories or the most recent failure. A custom GIS-connected database can
                  track events against the same assets over time and make recurring patterns visible.
                </p>
                <ul className="content-list">
                  <li>Track repairs, leaks, failures, inspections and recurring service issues by asset and location</li>
                  <li>Compare maintenance frequency, age, material, condition and customer impact</li>
                  <li>Identify geographic clusters and repeated trouble points</li>
                  <li>Separate one-time incidents from persistent system weaknesses</li>
                  <li>Support replacement scoring and project-priority discussions</li>
                  <li>Create maps, charts and summaries for boards, management and funding discussions</li>
                  <li>Document the evidence behind proposed capital projects</li>
                </ul>
                <aside className="content-callout">
                  <h3>Better forecasting starts with better history</h3>
                  <p>
                    GIS does not replace engineering judgment or financial planning. It gives those decisions a clearer,
                    more defensible record of asset condition, maintenance burden and operational impact.
                  </p>
                </aside>
              </section>

              <section className="content-section">
                <h2>No GIS yet? Start with a right-sized implementation</h2>
                <p>
                  An organization does not need an existing GIS to begin. A new implementation can start with the most
                  useful assets and workflows, then expand as employees gain confidence and the data proves valuable.
                </p>
                <div className="plain-card-grid">
                  <article className="plain-card">
                    <h3>Foundation</h3>
                    <p>
                      Define coordinate systems, asset classes, identifiers, required fields, ownership and backup or
                      recovery expectations.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Initial data</h3>
                    <p>
                      Convert available paper maps, CAD, spreadsheets, GPS observations, as-builts and institutional
                      knowledge into a controlled starting dataset.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Field adoption</h3>
                    <p>
                      Configure simple mobile maps and Survey123 forms that match how employees inspect, repair and
                      document assets in the field.
                    </p>
                  </article>
                  <article className="plain-card">
                    <h3>Measured expansion</h3>
                    <p>
                      Add integrations, dashboards, maintenance history and advanced analysis only after the foundation
                      is stable and useful.
                    </p>
                  </article>
                </div>
              </section>

              <section className="content-section">
                <h2>Connect GIS with the systems that already hold part of the story</h2>
                <p>
                  Useful GIS modernization often depends on careful integration rather than forcing all information into
                  one database. Approved connections can bring together location, asset, customer, maintenance and
                  reporting context while keeping record ownership clear.
                </p>
                <ul className="content-list">
                  <li>SQL databases and reporting views</li>
                  <li>Microsoft Access and legacy line-of-business data</li>
                  <li>CSV and spreadsheet workflows</li>
                  <li>Billing, customer and meter information</li>
                  <li>Work-order and maintenance records</li>
                  <li>Photos, as-builts and technical documents</li>
                  <li>Automated quality checks, reconciliation and exception reports</li>
                </ul>
              </section>

              <section className="content-section">
                <h2>What a practical engagement can include</h2>
                <ul className="content-list">
                  <li>GIS and data-readiness assessment</li>
                  <li>Legacy data inventory and migration plan</li>
                  <li>ArcGIS Pro and ArcGIS Online configuration</li>
                  <li>Survey123 form and maintenance-database design</li>
                  <li>Field Maps configuration and employee training</li>
                  <li>Data integration and automated update routines</li>
                  <li>Maintenance hotspot and asset-history analysis</li>
                  <li>CIP planning maps, dashboards and board-ready reporting</li>
                  <li>Documentation, permissions, quality control and recovery procedures</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section subpage-cta">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">A practical next step</p>
            <h2>Start with the maps, records and maintenance process you have today.</h2>
            <p>
              An initial GIS assessment can identify what should be preserved, corrected, connected or implemented
              before committing to a larger platform project.
            </p>
          </div>
          <Link className="button button-sand" href="/contact">Discuss a GIS assessment</Link>
        </div>
      </section>
    </main>
  );
}
