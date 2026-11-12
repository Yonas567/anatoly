import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ComplaintsTable from "@/components/security-admin/complaints-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints & Feedback | ShieldGuard Admin",
};

export default function ComplaintsPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Complaints & feedback" />
      <p className="mb-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
        Sorted by response deadline; overdue cases highlighted.
      </p>
      <ComplaintsTable />
    </>
  );
}
