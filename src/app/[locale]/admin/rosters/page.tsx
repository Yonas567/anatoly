import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ComponentCard from "@/components/common/component-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosters & Shifts | ShieldGuard Admin",
};

const demoShifts = [
  {
    id: "1",
    guard: "Daniel Tadesse",
    site: "Sunrise Warehouse — Bole",
    date: "2026-11-12",
    time: "06:00 – 18:00 EAT",
  },
  {
    id: "2",
    guard: "Solomon Getachew",
    site: "Medhanialem Branch",
    date: "2026-11-12",
    time: "00:00 – 08:00 EAT",
  },
];

export default function RostersPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Rosters & shifts" />
      <ComponentCard
        title="This week"
        desc="Calendar by site and guard (demo list)"
        className="mt-4"
      >
        <ul className="divide-y divide-gray-100 dark:divide-gray-800">
          {demoShifts.map((shift) => (
            <li key={shift.id} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
              <span className="font-medium">{shift.guard}</span>
              <span className="text-gray-600 dark:text-gray-400">{shift.site}</span>
              <span className="text-gray-500">{shift.date}</span>
              <span>{shift.time}</span>
            </li>
          ))}
        </ul>
      </ComponentCard>
    </>
  );
}
