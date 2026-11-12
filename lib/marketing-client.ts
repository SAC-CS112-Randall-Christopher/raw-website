import { marketingCampaign, marketingChannel, publicMarketingPath, type MarketingContext, type MarketingEvent } from "./marketing-events";

const contextKey = "raw-marketing-context-v1";

export function measurementAllowed(): boolean {
  return typeof window !== "undefined" && window.location.hostname === "randallautomationworks.com"
    && navigator.doNotTrack !== "1"
    && !(navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl;
}

export function marketingContext(): MarketingContext | null {
  if (!measurementAllowed()) return null;
  const landing = publicMarketingPath(window.location.pathname);
  if (!landing) return null;
  try {
    const saved = JSON.parse(sessionStorage.getItem(contextKey) ?? "null");
    // Reclassify fixed source names rather than trusting stored or query text.
    if (saved && publicMarketingPath(saved.landing) && ["google", "bing", "other_search", "connected_frontiers", "social", "referral", "direct"].includes(saved.channel)) return { landing: publicMarketingPath(saved.landing)!, channel: saved.channel };
  } catch { /* Storage may be unavailable; the form and booking still work. */ }
  const context = { landing, channel: marketingChannel(document.referrer) };
  try { sessionStorage.setItem(contextKey, JSON.stringify(context)); } catch { /* Best effort. */ }
  return context;
}

export function recordMarketingEvent(event: MarketingEvent): void {
  try {
    const context = marketingContext();
    const page = publicMarketingPath(window.location.pathname);
    if (!context || !page) return;
    const body = { event, page, ...context, campaign: marketingCampaign(window.location.search), test: new URLSearchParams(window.location.search).get("measurement_test") === "1" };
    void fetch("/api/marketing-events", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), keepalive: true, credentials: "omit", referrerPolicy: "no-referrer",
    }).catch(() => {});
  } catch { /* Measurement must never block an inquiry or navigation. */ }
}
