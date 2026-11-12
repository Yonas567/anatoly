import PageBreadcrumb from "@/components/common/page-breadcrumb";
import EmployeesTable from "@/components/security-admin/employees-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employees | ShieldGuard Admin",
};

export default function EmployeesPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Employees" />
      <EmployeesTable />
    </>
  );
}
