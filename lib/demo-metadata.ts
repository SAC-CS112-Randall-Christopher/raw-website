import type { Metadata } from "next";

// Demo routes are public for review, but do not belong in search results.
export function demoMetadata(path: string, title: string, description: string): Metadata {
  const brandedTitle = `${title} | Randall Automation Works`;
  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Randall Automation Works",
      url: path,
      title: brandedTitle,
      description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Randall Automation Works" }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
