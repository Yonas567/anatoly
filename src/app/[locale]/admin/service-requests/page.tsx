import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ServiceRequestsTable from "@/components/security-admin/service-requests-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Requests | ShieldGuard Admin",
};

export default function ServiceRequestsPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Service requests" />
      <p className="mb-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
        Filter by status, assign owners, and attach quotations (UI demo).
      </p>
      <ServiceRequestsTable />
    </>
  );
}
