import { demoMetadata } from "../../../lib/demo-metadata";
import { PublicDemoPortal } from "../../../components/public-demo-portal";
import { demoBySlug } from "../../../lib/public-demo-data";

export const metadata = demoMetadata(
  "/demo-portal/utility",
  "Mesa Valley Water District Demo Portal",
  "A clearly fictional public demonstration of a managed workspace for a water utility.",
);

export default function UtilityDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("utility")} />;
}
