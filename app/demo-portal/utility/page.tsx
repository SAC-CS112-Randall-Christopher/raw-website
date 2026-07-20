import type { Metadata } from "next";
import { PublicDemoPortal } from "../../../components/public-demo-portal";
import { demoBySlug } from "../../../lib/public-demo-data";

export const metadata: Metadata = {
  title: "Mesa Valley Water District Demo Portal",
  description: "A clearly fictional public demonstration of a managed workspace for a water utility.",
};

export default function UtilityDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("utility")} />;
}
