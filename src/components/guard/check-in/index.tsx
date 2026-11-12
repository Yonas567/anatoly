"use client";

import ComponentCard from "@/components/common/component-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { mockGuardShift } from "@/data/security/mock-data";
import { format } from "date-fns";
import { useState } from "react";

export default function GuardCheckInPanel() {
  const { session, signOut } = useAuth();
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  const start = new Date(mockGuardShift.start);
  const end = new Date(mockGuardShift.end);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-heading-four font-semibold text-gray-900 dark:text-white">
            Guard check-in
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user.name} · {session?.user.employeeNo}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={signOut}>
          Sign out
        </Button>
      </div>

      <ComponentCard title="Today's shift">
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="text-gray-500">Site</dt>
            <dd className="font-medium">{mockGuardShift.site}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Address</dt>
            <dd>{mockGuardShift.address}</dd>
          </div>
          <div className="flex gap-6">
            <div>
              <dt className="text-gray-500">Start</dt>
              <dd>{format(start, "HH:mm")} EAT</dd>
            </div>
            <div>
              <dt className="text-gray-500">End</dt>
              <dd>{format(end, "HH:mm")} EAT</dd>
            </div>
          </div>
        </dl>
        <Badge className="mt-4" variant="light" color="primary">
          {mockGuardShift.status}
        </Badge>
      </ComponentCard>

      <ComponentCard title="Check-in actions" desc="Demo only — GPS, geofence, and QR not enforced yet">
        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            disabled={checkedIn}
            onClick={() => setCheckedIn(true)}
          >
            {checkedIn ? "Checked in" : "Check in (GPS + QR demo)"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            disabled={!checkedIn || checkedOut}
            onClick={() => setCheckedOut(true)}
          >
            {checkedOut ? "Checked out" : "Check out"}
          </Button>
        </div>
        {checkedIn && !checkedOut && (
          <p className="mt-4 text-sm text-success-600 dark:text-success-400">
            Present on post — server time recorded (UTC+3 display in production).
          </p>
        )}
      </ComponentCard>
    </div>
  );
}
