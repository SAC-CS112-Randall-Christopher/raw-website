import type { MetadataRoute } from "next";
import { pages } from "./page-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randall-automation-works.invalid";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...pages.map((page) => ({
      url: `${base}/${page.slug}`,
      changeFrequency: page.slug === "insights" ? "weekly" as const : "monthly" as const,
      priority: ["services", "utilities-and-special-districts", "small-businesses", "gis-and-field-operations"].includes(page.slug) ? .8 : .6,
    })),
  ];
}
