import { demoMetadata } from "../../lib/demo-metadata";
import { PublicDemoPortal } from "../../components/public-demo-portal";
import { demoBySlug } from "../../lib/public-demo-data";

export const metadata = demoMetadata(
  "/demo-portal",
  "Northstar Property Services Demo Portal",
  "A clearly fictional public demonstration of a managed workspace for a small business.",
);

export default function NorthstarDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("small-business")} />;
}
