import type { MetadataRoute } from "next";
import { pages } from "./page-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://randallautomationworks.com";
  const indexablePages = pages.filter((page) => page.indexable !== false);
  // Dates record actual content edits, rather than the time of each build.
  const updatedPages = new Set(["workflow-automation-examples", "privacy", "terms"]);
  return [
    { url: base, changeFrequency: "monthly", priority: 1, lastModified: "2026-09-30" },
    ...indexablePages.map((page) => ({
      url: `${base}/${page.slug}`,
      changeFrequency: "monthly" as const,
      ...(updatedPages.has(page.slug) ? { lastModified: page.slug === "workflow-automation-examples" ? "2026-10-04" : "2026-09-30" } : {}),
      priority: ["services", "utilities-and-special-districts", "small-businesses", "gis-and-field-operations", "responsible-ai-and-security", "local-ai-deployments", "hosted-ai-deployments", "workflow-automation-examples", "expertise"].includes(page.slug) ? .8 : .6,
    })),
    { url: `${base}/gis-modernization`, changeFrequency: "monthly", priority: .9 },
    { url: `${base}/insights`, changeFrequency: "weekly", priority: .7, lastModified: "2026-10-04" },
    { url: `${base}/insights/prepare-sops-for-ai-assistant`, changeFrequency: "monthly", priority: .9, lastModified: "2026-10-04" },
    { url: `${base}/insights/route-first-reason-when-needed`, changeFrequency: "monthly", priority: .9, lastModified: "2026-09-30" },
    { url: `${base}/insights/ai-automation-consultant-small-business`, changeFrequency: "monthly", priority: .9, lastModified: "2026-09-13" },
    { url: `${base}/insights/workflow-automation-audit-small-business`, changeFrequency: "monthly", priority: .9, lastModified: "2026-08-30" },
    { url: `${base}/insights/ai-automation-for-small-business`, changeFrequency: "monthly", priority: .9, lastModified: "2026-08-16" },
    { url: `${base}/insights/first-ai-automation-project`, changeFrequency: "monthly", priority: .8, lastModified: "2026-07-18" },
  ];
}
