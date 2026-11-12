import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ComponentCard from "@/components/common/component-card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | ShieldGuard Admin",
};

export default function SettingsPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Users & settings" />
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        <ComponentCard title="Attendance rules (demo)">
          <div className="space-y-4">
            <Field>
              <FieldLabel>Late check-in grace (minutes)</FieldLabel>
              <Input type="number" defaultValue={15} readOnly />
            </Field>
            <Field>
              <FieldLabel>Absent threshold after start (minutes)</FieldLabel>
              <Input type="number" defaultValue={30} readOnly />
            </Field>
            <Field>
              <FieldLabel>Default geofence radius (m)</FieldLabel>
              <Input type="number" defaultValue={100} readOnly />
            </Field>
          </div>
        </ComponentCard>
        <ComponentCard title="Roles">
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Client — portal, own requests &amp; cases</li>
            <li>Guard — check-in, own schedule</li>
            <li>Supervisor — site attendance &amp; complaints</li>
            <li>Operations — full operations dashboard</li>
            <li>Super admin — users &amp; system settings</li>
          </ul>
        </ComponentCard>
      </div>
    </>
  );
}
