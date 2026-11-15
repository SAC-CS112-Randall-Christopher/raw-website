/** Keep existing Expertise links working after combining the founder pages. */
export function GET() {
  return Response.redirect("https://randallautomationworks.com/about", 308);
}

export const HEAD = GET;
