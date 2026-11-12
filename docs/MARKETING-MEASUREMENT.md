# RAW inquiry and booking measurement

The public site records aggregate page views, browser-confirmed Formspree submission acknowledgments, Google Calendar booking-link clicks and outbound Connected Frontiers clicks. Source is a broad category (Google, Bing, other search, Connected Frontiers, social, referral, direct). The session landing page and approved service-link label help compare the GIS and small-business paths.

## Read results

In Cloudflare, open **Workers & Pages → D1 → raw-marketing-metrics → Console**, or query the same database through the connected Cloudflare API. Database ID: `42a6aa4e-c5a0-4b2f-ad94-710fe145393d`.

```sql
SELECT event, landing, channel, SUM(count) AS events
FROM marketing_daily
WHERE environment = 'production' AND day >= date('now', '-28 days')
GROUP BY event, landing, channel
ORDER BY event, events DESC;
```

```sql
SELECT day, campaign, event, SUM(count) AS events
FROM marketing_daily
WHERE environment = 'production' AND day >= date('now', '-28 days')
GROUP BY day, campaign, event
ORDER BY day DESC, campaign, event;
```

Dates use UTC. Compare with Search Console over matching complete dates, allowing for its reporting delay. These are event counts, not unique people, qualified leads or a verified conversion rate. Repeated clicks, blocked measurement, missing referrers, bots and anonymous event spoofing can affect counts. `direct` includes unknown/referrer-unavailable traffic. Source is based on the available referring hostname; no search query, ad identifier or arbitrary UTM text is retained.

`inquiry_success` means the browser received a successful response from the existing Formspree endpoint. Reconcile real inquiries with Formspree and your follow-up records. `booking_click` means the schedule link was opened; reconcile actual appointments with Google Calendar. No completed-booking integration or GA4 property is claimed. Analytics failure never prevents either action.

## Information boundaries and testing

Only approved public paths and fixed event/category values are accepted. No raw visitor IDs, IP addresses, form contents, email addresses or full referrer URLs are stored in these counters. The public endpoint has no read API; reports require existing Cloudflare account access. The existing Cloudflare hosting and request-log behavior is unchanged. See the published privacy page for the visitor-facing explanation.

The browser uses session storage for a public landing path and broad source category. Global Privacy Control and Do Not Track disable this measurement and the extra inquiry-attribution fields. Public preview hosts do not generate events. The collector accepts same-origin production-host JSON only, limits payload size, rejects extra fields, and keeps test counters in a separate environment.

Use `?measurement_test=1` on a production page for a deliberate browser check; those events are stored as `environment = 'test'`. Do not submit synthetic inquiries to the live Formspree endpoint. Provider success/failure and analytics failures are exercised with mocks in `tests/marketing.test.mjs`. No personal test data is sent externally.

Infrastructure: existing Cloudflare Worker plus one small aggregate-only D1 database. The schema is `db/marketing-metrics.sql`, and the binding is in root `wrangler.jsonc`. The table is initialized before publication. Rollback of website code does not remove counters. No credentials are embedded in the browser and no private-gateway settings are changed.

Useful references: [D1 binding](https://developers.cloudflare.com/d1/worker-api/d1-database/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), [Search Console and website analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).
