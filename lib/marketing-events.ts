// Only these public pages and fixed categories may enter marketing measurement.
export const marketingPaths = [
  "/", "/services", "/small-businesses", "/utilities-and-special-districts",
  "/gis-and-field-operations", "/gis-modernization", "/responsible-ai-and-security",
  "/local-ai-deployments", "/hosted-ai-deployments", "/workflow-automation-examples",
  "/how-engagements-work", "/about", "/contact", "/frequently-asked-questions",
  "/privacy", "/terms", "/insights", "/insights/ai-assistant-action-approval",
  "/insights/ai-integration-readiness-checklist", "/insights/local-vs-hosted-ai-assistants",
  "/insights/prepare-sops-for-ai-assistant", "/insights/route-first-reason-when-needed",
  "/insights/ai-automation-consultant-small-business", "/insights/workflow-automation-audit-small-business",
  "/insights/ai-automation-for-small-business", "/insights/first-ai-automation-project",
] as const;

export const marketingEvents = ["page_view", "inquiry_success", "booking_click", "connected_frontiers_click"] as const;
export const marketingChannels = ["google", "bing", "other_search", "connected_frontiers", "social", "referral", "direct"] as const;
export const marketingCampaigns = ["none", "gis-field", "small-business", "small-business-guide"] as const;
export type MarketingEvent = typeof marketingEvents[number];
export type MarketingContext = { landing: string; channel: typeof marketingChannels[number] };

export function publicMarketingPath(path: string): string | null {
  const clean = path === "/" ? path : path.replace(/\/+$/, "");
  return (marketingPaths as readonly string[]).includes(clean) ? clean : null;
}

export function marketingChannel(referrer: string): MarketingContext["channel"] {
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (/^(www\.)?google\.(com|ca|co\.uk)$/.test(host)) return "google";
    if (/^(www\.)?bing\.com$/.test(host)) return "bing";
    if (/(^|\.)(duckduckgo\.com|search\.yahoo\.com|search\.brave\.com)$/.test(host)) return "other_search";
    if (/(^|\.)connectedfrontiers\.com$/.test(host)) return "connected_frontiers";
    if (/(^|\.)(linkedin\.com|facebook\.com|instagram\.com|t\.co|x\.com)$/.test(host)) return "social";
    if (host === "randallautomationworks.com" || host === "www.randallautomationworks.com") return "direct";
    return "referral";
  } catch { return "direct"; }
}

export function marketingCampaign(search: string): typeof marketingCampaigns[number] {
  const value = new URLSearchParams(search).get("from");
  return marketingCampaigns.find(item => item === value) ?? "none";
}
