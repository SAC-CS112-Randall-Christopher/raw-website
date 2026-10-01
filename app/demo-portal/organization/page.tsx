import { demoMetadata } from "../../../lib/demo-metadata";
import { PublicDemoPortal } from "../../../components/public-demo-portal";
import { demoBySlug } from "../../../lib/public-demo-data";

export const metadata = demoMetadata(
  "/demo-portal/organization",
  "Western Colorado Community Alliance Demo Portal",
  "A clearly fictional public demonstration of a managed workspace for a community organization.",
);

export default function OrganizationDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("organization")} />;
}
