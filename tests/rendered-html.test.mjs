import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const productionTitle = /<title>AI Setup &amp; Automation in Montrose, CO \| Randall Automation Works<\/title>/i;
const developmentPreviewMeta = /<meta(?=[^>]*\bname=["']codex-preview["'])[^>]*>/i;
const productionCanonical = /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/randallautomationworks\.com\/?["'])[^>]*>/i;

test("renders production branding without staging metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, productionTitle);
  assert.match(html, productionCanonical);
  assert.match(html, /Bring your business into the automated era/i);
  assert.match(html, /Illustration of a Western Colorado valley/);
  assert.match(html, /width=640,quality=82,format=auto,onerror=redirect\/images\/hero-western-colorado-2026\.png 640w/);
  const hero = await readFile(new URL("../dist/client/images/hero-western-colorado-2026.png", import.meta.url));
  assert.equal(hero.readUInt32BE(16), 1672);
  assert.equal(hero.readUInt32BE(20), 941);
  assert.match(html, /AI assistants &amp; LLM setup/i);
  assert.match(html, /Front-office AI helper/i);
  assert.match(html, /rule-based C# code with multiple language models/i);
  assert.match(html, /href="\/responsible-ai-and-security"/i);
  assert.match(html, /href="\/local-ai-deployments"/i);
  assert.match(html, /href="\/hosted-ai-deployments"/i);
  assert.match(html, /No autonomous infrastructure control/i);
  assert.match(html, /free 30-minute consultation/i);
  assert.match(html, /paid assessment/i);
  assert.doesNotMatch(html, /AI agents \+ RAG|solution-fit-card/i);
  const mainText = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ").trim();
  assert.ok(mainText.split(/\s+/).length < 700, "Homepage stays concise");
  assert.doesNotMatch(html, developmentPreviewMeta);
});

test("publishes code-first capabilities on Services and About pages", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("capability-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const [servicesResponse, aboutResponse] = await Promise.all([
    worker.fetch(new Request("http://localhost/services", { headers: { accept: "text/html" } }), env, ctx),
    worker.fetch(new Request("http://localhost/about", { headers: { accept: "text/html" } }), env, ctx),
  ]);
  const services = await servicesResponse.text();
  const about = await aboutResponse.text();

  assert.equal(servicesResponse.status, 200);
  assert.equal(aboutResponse.status, 200);
  assert.match(services, /Code-first automation and systems integration/i);
  assert.match(services, /From problem to working system/i);
  assert.match(services, /Python automation/i);
  assert.match(services, /Visual Basic and VBA/i);
  assert.match(services, /Code-first automation and systems integration[\s\S]*Bring the workflow that keeps causing friction/i);
  assert.match(about, /Python scripting and workflow automation/i);
  assert.match(about, /JSON, API and structured-data connections/i);
});

test("publishes production robots and sitemap URLs", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("seo-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const ctx = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const robotsResponse = await worker.fetch(new Request("http://localhost/robots.txt"), env, ctx);
  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  const robots = await robotsResponse.text();
  const sitemap = await sitemapResponse.text();

  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);
  assert.match(robots, /https:\/\/randallautomationworks\.com\/sitemap\.xml/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/utilities-and-special-districts/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/workflow-automation-examples/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/expertise/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/local-ai-deployments/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/hosted-ai-deployments/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/insights<\/loc>/i);
  assert.match(sitemap, /https:\/\/randallautomationworks\.com\/insights\/first-ai-automation-project/i);
  assert.doesNotMatch(`${robots}\n${sitemap}`, /\.invalid/i);
});

test("publishes generalized workflow examples and founder expertise", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("credibility-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const [examplesResponse, expertiseResponse] = await Promise.all([
    worker.fetch(new Request("http://localhost/workflow-automation-examples", { headers: { accept: "text/html" } }), env, ctx),
    worker.fetch(new Request("http://localhost/expertise", { headers: { accept: "text/html" } }), env, ctx),
  ]);
  const examples = await examplesResponse.text();
  const expertise = await expertiseResponse.text();

  assert.equal(examplesResponse.status, 200);
  assert.equal(expertiseResponse.status, 200);
  assert.match(examples, /Recurring customer-notification lists/i);
  assert.match(examples, /Remove the avoidable friction/i);
  assert.match(examples, /Asset and business-data reconciliation/i);
  assert.match(examples, /not published client case studies/i);
  assert.match(expertise, /Python/i);
  assert.match(expertise, /Integrated technical toolkit/i);
  assert.match(expertise, /JSON, APIs and SDKs/i);
  assert.match(expertise, /Agentic workflow orchestration/i);
  assert.match(expertise, /Model Context Protocol/i);
  assert.match(expertise, /Retrieval-augmented generation|RAG/i);
  assert.match(expertise, /Web maps and spatial application integration/i);
  assert.match(expertise, /GIS, assets and field operations/i);
  assert.doesNotMatch(`${examples}\n${expertise}`, /Tri-County Water/i);
});

test("explains AI setup, technical options and safety boundaries", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("responsible-ai-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(
    new Request("http://localhost/responsible-ai-and-security", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /An AI assistant set up for your business/i);
  assert.match(html, /What the setup includes/i);
  assert.match(html, /Model Context Protocol \(MCP\)/i);
  assert.match(html, /retrieval-augmented generation \(RAG\)/i);
  assert.match(html, /deterministic C#/i);
  assert.match(html, /Human review before consequential actions/i);
  assert.match(html, /SCADA, PLCs or operational controls/i);
  assert.match(html, /href="\/local-ai-deployments"/i);
  assert.match(html, /href="\/hosted-ai-deployments"/i);

});

test("publishes local and hosted AI deployment options under AI systems", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("deployment-options-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const [localResponse, hostedResponse] = await Promise.all([
    worker.fetch(new Request("http://localhost/local-ai-deployments", { headers: { accept: "text/html" } }), env, ctx),
    worker.fetch(new Request("http://localhost/hosted-ai-deployments", { headers: { accept: "text/html" } }), env, ctx),
  ]);
  const local = await localResponse.text();
  const hosted = await hostedResponse.text();

  assert.equal(localResponse.status, 200);
  assert.equal(hostedResponse.status, 200);
  assert.match(local, /Run AI on your own hardware/i);
  assert.match(local, /Local does not automatically mean secure/i);
  assert.match(local, /Connected tools may still send data elsewhere/i);
  assert.match(local, /Test the fit before buying hardware/i);
  assert.match(hosted, /AI your team can use, with a clear support plan/i);
  assert.match(hosted, /Hybrid setup/i);
  assert.match(hosted, /Review data handling before launch/i);
  assert.match(hosted, /Optional ongoing support/i);
  assert.match(`${local}\n${hosted}`, /AI setup overview/i);

});

test("renders the first Insights article as an indexable Article", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const ctx = {
    waitUntil() {},
    passThroughOnException() {},
  };
  const response = await worker.fetch(
    new Request("http://localhost/insights/first-ai-automation-project", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /How to Choose a Practical First AI Automation Project/i);
  assert.match(html, /https:\/\/randallautomationworks\.com\/insights\/first-ai-automation-project/i);
  assert.match(html, /"@type":"Article"/i);
  assert.match(html, /"@type":"BreadcrumbList"/i);
  assert.doesNotMatch(html, /noindex/i);
});


test("keeps contact, booking and related service paths accessible", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const paths = ["/", "/services", "/responsible-ai-and-security", "/local-ai-deployments", "/hosted-ai-deployments", "/contact", "/gis-and-field-operations", "/gis-modernization", "/utilities-and-special-districts", "/small-businesses"];
  for (const path of paths) {
    const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.match(html, /href="https:\/\/calendar\.app\.google\/Qwnjw6tS5TdDo5Hh7"/, path);
    assert.match(html, /href="mailto:chris@randallautomationworks\.com"/, path);
    assert.match(html, /href="tel:\+19707872161"/, path);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, path);
    assert.doesNotMatch(html, /noindex/i, path);
    if (path === "/contact") {
      assert.match(html, /<form\b/);
      assert.match(html, /<input(?=[^>]*name="email")(?=[^>]*required)[^>]*>/);
      assert.match(html, /AI assistant or LLM setup/);
    }
  }
});

const reviewEnv = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const reviewCtx = { waitUntil() {}, passThroughOnException() {} };

async function renderReviewPage(path) {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), reviewEnv, reviewCtx);
  assert.equal(response.status, 200, path);
  return response.text();
}

function metaContent(html, name, attribute = "name") {
  const tag = html.match(new RegExp(`<meta(?=[^>]*\\b${attribute}="${name}")[^>]*>`, "i"))?.[0];
  return tag?.match(/\bcontent="([^"]*)"/i)?.[1];
}

function canonicalUrl(html) {
  return html.match(/<link(?=[^>]*\brel="canonical")[^>]*>/i)?.[0].match(/\bhref="([^"]*)"/i)?.[1];
}

test("keeps all demo routes out of search with route-specific metadata", async () => {
  const paths = ["/client-portal", "/demo-portal", "/demo-portal/organization", "/demo-portal/utility"];
  const titles = new Set();
  const sitemap = await renderReviewPage("/sitemap.xml");
  for (const path of paths) {
    const html = await renderReviewPage(path);
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    assert.ok(title && !titles.has(title), `${path}: distinct title`);
    titles.add(title);
    assert.equal(metaContent(html, "robots"), "noindex, follow", path);
    assert.equal(canonicalUrl(html), `https://randallautomationworks.com${path}`, path);
    assert.equal(metaContent(html, "og:url", "property"), `https://randallautomationworks.com${path}`, path);
    assert.equal(metaContent(html, "og:title", "property"), title, path);
    assert.equal(metaContent(html, "twitter:title"), title, path);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, path);
    assert.ok(!sitemap.includes(`https://randallautomationworks.com${path}</loc>`), path);
  }
});

test("serves the existing fonts from public URLs without build paths", async () => {
  const html = await renderReviewPage("/");
  const fontCss = await readFile(new URL("../app/fonts.css", import.meta.url), "utf8");
  const paths = [...fontCss.matchAll(/url\((\/fonts\/[^)]+)\)/g)].map((match) => match[1]);
  assert.equal(paths.length, 12, "All existing language subsets remain available");
  for (const path of paths) {
    const file = await readFile(new URL(`../dist/client${path}`, import.meta.url));
    assert.equal(file.subarray(0, 4).toString(), "wOF2", path);
  }
  const preloads = [...html.matchAll(/<link(?=[^>]*\bas="font")[^>]*>/g)].map((match) => match[0]);
  assert.equal(preloads.length, 2, "Only the two Latin subsets are preloaded");
  for (const tag of preloads) assert.match(tag, /href="\/fonts\//);
  const cssFiles = (await readdir(new URL("../dist/client/assets/", import.meta.url))).filter((name) => name.endsWith(".css"));
  const compiledCss = await Promise.all(cssFiles.map((name) => readFile(new URL(`../dist/client/assets/${name}`, import.meta.url), "utf8")));
  assert.doesNotMatch([html, fontCss, ...compiledCss].join("\n"), /\/workspace\/|\.vinext\/fonts\//);
});

test("redirects production HTTP and www permanently while preserving path and query", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  for (const origin of ["http://randallautomationworks.com", "http://www.randallautomationworks.com", "https://www.randallautomationworks.com"]) {
    const response = await worker.fetch(new Request(`${origin}/services?topic=AI%20setup&source=review`), reviewEnv, reviewCtx);
    assert.equal(response.status, 308, origin);
    assert.equal(response.headers.get("location"), "https://randallautomationworks.com/services?topic=AI%20setup&source=review", origin);
  }
  const response = await worker.fetch(new Request("https://randallautomationworks.com/services"), reviewEnv, reviewCtx);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("location"), null);
});

test("preserves unique indexable metadata for every sitemap route", async () => {
  const sitemap = await renderReviewPage("/sitemap.xml");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 23);
  assert.equal(new Set(urls).size, urls.length);
  const titles = new Set();
  const descriptions = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const html = await renderReviewPage(path);
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    const description = metaContent(html, "description");
    assert.ok(title && !titles.has(title), `${path}: distinct title`);
    assert.ok(description && !descriptions.has(description), `${path}: distinct description`);
    titles.add(title);
    descriptions.add(description);
    assert.equal(canonicalUrl(html)?.replace(/\/$/, ""), url.replace(/\/$/, ""), path);
    assert.doesNotMatch(metaContent(html, "robots") ?? "", /noindex/, path);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, path);
  }
  for (const path of ["workflow-automation-examples", "privacy", "terms"]) {
    assert.match(sitemap, new RegExp(`<loc>https://randallautomationworks\\.com/${path}</loc>\\s*<lastmod>2026-09-30</lastmod>`), path);
  }
});

test("describes the Montrose organization and verified implementation experience", async () => {
  const html = await renderReviewPage("/");
  const schema = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const organization = schema.find((item) => item["@type"] === "Organization");
  assert.ok(organization);
  assert.equal(organization.legalName, "Randall Automation Works LLC");
  assert.equal(organization.location.name, "Montrose, Colorado");
  assert.equal(organization.address, undefined);
  assert.ok(organization.hasOfferCatalog.itemListElement.every((offer) => offer.itemOffered["@type"] === "Service"));
  assert.doesNotMatch(html, /ProfessionalService/);
  const examples = await renderReviewPage("/workflow-automation-examples");
  assert.match(examples, /Two implementations from my own work/);
  assert.match(examples, /Front-office AI helper/);
  assert.match(examples, /SDK integration/);
  assert.match(examples, /Deterministic C#/);
  assert.match(examples, /task and workload/);
});

test("discloses the currently observed website providers without launch placeholders", async () => {
  const privacy = await renderReviewPage("/privacy");
  const terms = await renderReviewPage("/terms");
  assert.match(privacy, /Randall Automation Works LLC/);
  assert.match(terms, /Randall Automation Works LLC/);
  assert.match(privacy, /Cloudflare Web Analytics beacon is active/);
  assert.match(privacy, /Formspree/);
  assert.match(privacy, /Google Calendar/);
  assert.match(privacy, /chris@randallautomationworks\.com/);
  assert.doesNotMatch(`${privacy}\n${terms}`, /private-stage|public-launch date|before public launch|enabled later|Final contact details/);
});
