import ClientPortalDashboard from "@/components/portal/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | ShieldGuard",
};

export default function PortalPage() {
  return <ClientPortalDashboard />;
}
