import type { Metadata } from "next";
import { PublicDemoPortal } from "../../components/public-demo-portal";
import { demoBySlug } from "../../lib/public-demo-data";

export const metadata: Metadata = {
  title: "Northstar Property Services Demo Portal",
  description: "A clearly fictional public demonstration of a managed workspace for a small business.",
};

export default function NorthstarDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("small-business")} />;
}
