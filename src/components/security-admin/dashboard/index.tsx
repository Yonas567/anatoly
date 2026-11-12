import ComponentCard from "@/components/common/component-card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import {
  mockCases,
  mockServiceRequests,
  mockSitesLive,
} from "@/data/security/mock-data";

export default function AdminDashboardHome() {
  const openRequests = mockServiceRequests.filter((r) =>
    ["New", "Under review", "Quotation sent"].includes(r.status),
  ).length;
  const overdueComplaints = mockCases.filter((c) => c.overdue).length;
  const uncovered = mockSitesLive.filter((s) => s.status === "uncovered").length;

  const stats = [
    {
      label: "Sites covered today",
      value: `${mockSitesLive.length - uncovered}/${mockSitesLive.length}`,
      href: "/admin/attendance",
    },
    { label: "Open service requests", value: String(openRequests), href: "/admin/service-requests" },
    { label: "Overdue complaints", value: String(overdueComplaints), href: "/admin/complaints" },
    { label: "Uncovered sites", value: String(uncovered), href: "/admin/attendance" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-heading-four font-semibold text-gray-900 dark:text-white">
          Operations dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Today&apos;s coverage, requests, and complaints at a glance (demo
          data).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-theme-md dark:border-gray-800 dark:bg-white/3"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ComponentCard title="Live site coverage" desc="Expected vs checked-in guards">
          <ul className="space-y-3">
            {mockSitesLive.map((site) => (
              <li
                key={site.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-3 dark:border-gray-800"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {site.name}
                  </p>
                  <p className="text-theme-xs text-gray-500 dark:text-gray-400">
                    {site.client}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {site.checkedIn}/{site.expected}
                  </span>
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
                    {site.status === "covered"
                      ? "Covered"
                      : site.status === "partial"
                        ? "Partial"
                        : "Uncovered"}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </ComponentCard>

        <ComponentCard title="Latest service requests">
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockServiceRequests.map((req) => (
              <li key={req.id} className="flex justify-between gap-2 py-3 text-sm">
                <span className="font-mono text-gray-800 dark:text-white/90">
                  {req.reference}
                </span>
                <Badge variant="light" color="primary">
                  {req.status}
                </Badge>
              </li>
            ))}
          </ul>
        </ComponentCard>
      </div>
    </div>
  );
}
