import type { MetadataRoute } from "next";
import { pages } from "./page-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
  const indexablePages = pages.filter((page) => page.indexable !== false);
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...indexablePages.map((page) => ({
      url: `${base}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: ["services", "utilities-and-special-districts", "small-businesses", "gis-and-field-operations"].includes(page.slug) ? .8 : .6,
    })),
    { url: `${base}/insights`, changeFrequency: "monthly", priority: .7 },
    { url: `${base}/insights/first-ai-automation-project`, changeFrequency: "monthly", priority: .8, lastModified: "2026-07-18" },
  ];
}
