import { marketingCampaigns, marketingChannels, marketingEvents, publicMarketingPath } from "./marketing-events";

type MetricsDatabase = { prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> } } };
const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

/** Stores counters only. This endpoint never accepts or returns customer records. */
export async function collectMarketingEvent(request: Request, db?: MetricsDatabase): Promise<Response> {
  const reply = (status: number) => new Response(null, { status, headers });
  if (request.method !== "POST") return new Response(null, { status: 405, headers: { ...headers, Allow: "POST" } });
  if (new URL(request.url).hostname !== "randallautomationworks.com"
    || request.headers.get("Origin") !== "https://randallautomationworks.com"
    || (request.headers.has("Sec-Fetch-Site") && request.headers.get("Sec-Fetch-Site") !== "same-origin")) return reply(403);
  if (request.headers.get("Sec-GPC") === "1" || request.headers.get("DNT") === "1") return reply(204);
  if (!request.headers.get("Content-Type")?.startsWith("application/json")) return reply(415);
  if (Number(request.headers.get("Content-Length")) > 1024) return reply(413);
  const reader = request.body?.getReader();
  if (!reader) return reply(400);
  let text = "", bytes = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const next = await reader.read();
      if (next.done) break;
      bytes += next.value.byteLength;
      if (bytes > 1024) { await reader.cancel(); return reply(413); }
      text += decoder.decode(next.value, { stream: true });
    }
    text += decoder.decode();
    const data = JSON.parse(text);
    if (!data || typeof data !== "object" || Array.isArray(data)
      || Object.keys(data).some(key => !["event", "page", "landing", "channel", "campaign", "test"].includes(key))
      || !marketingEvents.includes(data.event) || typeof data.page !== "string" || typeof data.landing !== "string"
      || !publicMarketingPath(data.page) || !publicMarketingPath(data.landing)
      || !marketingChannels.includes(data.channel) || !marketingCampaigns.includes(data.campaign)
      || typeof data.test !== "boolean"
      || (data.event === "inquiry_success" && data.page !== "/contact")) return reply(400);
    if (!db) return reply(503);
    try {
      await db.prepare(`INSERT INTO marketing_daily (day, event, page, landing, channel, campaign, environment, count)
      VALUES (date('now'), ?, ?, ?, ?, ?, ?, 1)
      ON CONFLICT(day,event,page,landing,channel,campaign,environment) DO UPDATE SET count=count+1`)
        .bind(data.event, publicMarketingPath(data.page), publicMarketingPath(data.landing), data.channel, data.campaign, data.test ? "test" : "production").run();
    } catch { return reply(503); }
    return reply(204);
  } catch {
    // Do not log payloads, request headers or form information.
    return reply(400);
  }
}
