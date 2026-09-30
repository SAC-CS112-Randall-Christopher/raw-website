import assert from "node:assert/strict";
import test from "node:test";

const productionTitle = /<title>Western Colorado AI Automation \| Randall Automation Works<\/title>/i;
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
