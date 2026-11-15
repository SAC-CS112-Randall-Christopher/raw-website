/** Retain old product bookmarks without publishing the retired product offer. */
export function legacyProductRedirect(request: Request): Response | null {
  const path = new URL(request.url).pathname.replace(/\/+$/, "");
  if (!["/raw-workspace", "/raw-workspace/demo"].includes(path)) return null;
  if (!["GET", "HEAD"].includes(request.method)) return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  // Do not forward arbitrary query data to the product's separate domain.
  return Response.redirect("https://connectedfrontiers.com/platform/", 308);
}
