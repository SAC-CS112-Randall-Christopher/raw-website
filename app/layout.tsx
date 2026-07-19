import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Footer, Header } from "../components/site-shell";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Western Colorado AI Automation | Randall Automation Works",
    template: "%s | Randall Automation Works",
  },
  description:
    "Practical Python, SQL and AI workflow automation and systems integration for Western Colorado small businesses, utilities and local organizations.",
  applicationName: "Randall Automation Works",
  category: "Business Services",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    url: "/",
    title: "Less repetitive work. Better-connected systems. AI where it helps.",
    description:
      "Secure, cost-conscious workflow automation and systems integration using focused code or responsible AI—whichever fits the work.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randall Automation Works",
    description:
      "Practical AI automation for Western Colorado organizations.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "Randall Automation Works",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.png`,
  logo: `${siteUrl}/logo-horizontal.svg`,
  email: "chris@randallautomationworks.com",
  telephone: "+1-970-787-2161",
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
  serviceType: [
    "AI consulting",
    "Workflow automation",
    "Python automation",
    "SQL reporting",
    "API integration",
    "GIS workflow automation",
    "Systems integration",
    "AI readiness assessment",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSerif.variable}`}>
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
