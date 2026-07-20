import type { Metadata } from "next";
import { PublicDemoPortal } from "../../../components/public-demo-portal";
import { demoBySlug } from "../../../lib/public-demo-data";

export const metadata: Metadata = {
  title: "Western Colorado Community Alliance Demo Portal",
  description: "A clearly fictional public demonstration of a managed workspace for a community organization.",
};

export default function OrganizationDemoPage() {
  return <PublicDemoPortal demo={demoBySlug("organization")} />;
}
