import AdminDashboardHome from "@/components/security-admin/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | ShieldGuard",
};

export default function AdminHomePage() {
  return <AdminDashboardHome />;
}
