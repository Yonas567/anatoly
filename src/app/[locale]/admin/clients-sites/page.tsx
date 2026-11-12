import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ClientsSitesTable from "@/components/security-admin/clients-sites-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Sites | ShieldGuard Admin",
};

export default function ClientsSitesPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Clients & sites" />
      <p className="mb-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
        Manage geofence radius and site QR tokens (demo).
      </p>
      <ClientsSitesTable />
    </>
  );
}
