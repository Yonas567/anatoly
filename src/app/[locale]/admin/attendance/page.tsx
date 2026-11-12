import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ComponentCard from "@/components/common/component-card";
import { Badge } from "@/components/ui/badge";
import { mockSitesLive } from "@/data/security/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance | ShieldGuard Admin",
};

export default function AttendancePage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Attendance live board" />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ComponentCard
          title="Sites — expected vs checked in"
          desc="Supervisor view of real-time coverage"
        >
          <ul className="space-y-3">
            {mockSitesLive.map((site) => (
              <li
                key={site.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 p-4 dark:border-gray-800"
              >
                <div>
                  <p className="font-medium">{site.name}</p>
                  <p className="text-theme-xs text-gray-500">{site.client}</p>
                </div>
                <div className="text-end">
                  <p className="font-semibold">
                    {site.checkedIn} / {site.expected}
                  </p>
                  <Badge
                    variant="light"
                    color={
                      site.status === "covered"
                        ? "success"
                        : site.status === "partial"
                          ? "warning"
                          : "error"
                    }
                  >
                    {site.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </ComponentCard>

        <ComponentCard title="Manual entries" desc="Pending supervisor review">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            No pending manual entries in demo data. Manual check-ins appear here
            when GPS or QR fails on site.
          </p>
        </ComponentCard>
      </div>
    </>
  );
}
