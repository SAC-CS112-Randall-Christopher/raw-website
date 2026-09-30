import type { Metadata } from "next";
import { FontPreloads } from "../components/font-preloads";
import { Footer, Header } from "../components/site-shell";
import "./fonts.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Setup & Automation in Montrose, CO | Randall Automation Works",
    template: "%s | Randall Automation Works",
  },
  description:
    "AI assistant and LLM setup, workflow automation and systems integration based in Montrose, Colorado, serving Western Colorado businesses and utilities.",
  applicationName: "Randall Automation Works",
  category: "Business Services",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    url: "/",
    title: "Bring your business into the automated era.",
    description:
      "Custom AI assistants and connected workflows, based in Montrose and serving Western Colorado businesses and utilities.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randall Automation Works",
    description:
      "AI setup and workflow automation based in Montrose, Colorado, serving Western Colorado organizations.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#business`,
  name: "Randall Automation Works",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.png`,
  logo: `${siteUrl}/logo-horizontal.svg`,
  email: "chris@randallautomationworks.com",
  telephone: "+1-970-787-2161",
  location: { "@type": "Place", name: "Montrose, Colorado" },
  founder: {
    "@type": "Person",
    name: "Chris Randall",
    jobTitle: "Founder",
    description:
      "Utility operations and technology specialist with hands-on experience in Python, SQL, JSON integration, Visual Basic, GIS, IT infrastructure, cybersecurity, agentic workflows, RAG knowledge systems and responsible AI configuration.",
  },
  description:
    "Practical code-first automation, responsible AI and systems integration for Western Colorado small businesses, utilities and local organizations.",
  areaServed: [
    "Montrose",
    "Grand Junction",
    "Delta",
    "Ouray",
    "Ridgway",
    "Gunnison",
    "Telluride",
    "Glenwood Springs",
    "Durango",
    "Cortez",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automation and AI services",
    itemListElement: [
      "AI assistant and LLM setup",
      "Workflow automation",
      "Python automation",
      "SQL reporting",
      "API and systems integration",
      "GIS workflow automation",
      "AI readiness assessment",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: "Western Colorado",
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <FontPreloads />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
