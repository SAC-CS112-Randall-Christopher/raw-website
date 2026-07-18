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
    default: "Randall Automation Works | Practical AI & Systems Integration",
    template: "%s | Randall Automation Works",
  },
  description:
    "Practical, secure AI automation and systems integration for Western Colorado small businesses, rural utilities and local organizations.",
  applicationName: "Randall Automation Works",
  category: "Business Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Randall Automation Works",
    title: "Practical AI for the work that keeps Western Colorado moving.",
    description:
      "Secure workflow automation and systems integration for small businesses, rural utilities and local organizations.",
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
  name: "Randall Automation Works",
  url: siteUrl,
  email: "chris@randallautomationworks.com",
  telephone: "+1-970-787-2161",
  founder: {
    "@type": "Person",
    name: "Chris Randall",
    jobTitle: "Founder",
    description:
      "Utility operations and technology specialist with hands-on experience in IT infrastructure, cybersecurity, GIS, data, reporting, business systems, employee training and workflow automation.",
  },
  description:
    "Practical AI automation and systems integration for Western Colorado small businesses, rural utilities and local organizations.",
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
