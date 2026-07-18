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
  assert.doesNotMatch(html, developmentPreviewMeta);
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
  assert.doesNotMatch(`${robots}\n${sitemap}`, /\.invalid/i);
  assert.doesNotMatch(sitemap, /\/insights<\/loc>/i);
});
