const canonicalHost = "randallautomationworks.com";

export function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  const isPublicHost = url.hostname === canonicalHost || url.hostname === `www.${canonicalHost}`;
  if (!isPublicHost || (url.protocol === "https:" && url.hostname === canonicalHost)) return null;

  url.protocol = "https:";
  url.hostname = canonicalHost;
  url.port = "";
  return Response.redirect(url.href, 308);
}
