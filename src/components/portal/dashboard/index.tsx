"use client";

import ComponentCard from "@/components/common/component-card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { mockCases, mockServiceRequests } from "@/data/security/mock-data";
import { Link } from "@/i18n/navigation";

export default function ClientPortalDashboard() {
  const { session, signOut } = useAuth();
  const clientRequests = mockServiceRequests.filter(
    (r) => r.phone === session?.user.phone,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-heading-four font-semibold text-gray-900 dark:text-white">
            Client portal
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {session?.user.organization ?? session?.user.name}
          </p>
        </div>
        <Button variant="outline" onClick={signOut}>
          Sign out
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/request-service" className={buttonVariants()}>
          New service request
        </Link>
        <Link
          href="/feedback"
          className={buttonVariants({ variant: "outline" })}
        >
          Submit feedback
        </Link>
      </div>

      <ComponentCard title="Your service requests">
        {clientRequests.length === 0 ? (
          <p className="text-sm text-gray-500">No requests yet.</p>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {clientRequests.map((req) => (
              <li
                key={req.id}
                className="flex flex-wrap items-center justify-between gap-2 py-3"
              >
                <span className="font-mono text-sm">{req.reference}</span>
                <Badge variant="light" color="primary">
                  {req.status}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </ComponentCard>

      <ComponentCard title="Site coverage today" desc="Read-only view (demo)">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Sunrise Warehouse — Bole:{" "}
          <span className="font-medium text-warning-600">1 of 2 guards on post</span>
        </p>
      </ComponentCard>

      <ComponentCard title="Your cases">
        <ul className="space-y-2 text-sm">
          {mockCases.map((c) => (
            <li key={c.id} className="flex justify-between gap-2">
              <span className="font-mono">{c.caseNo}</span>
              <span>{c.status}</span>
            </li>
          ))}
        </ul>
      </ComponentCard>
    </div>
  );
}
