"use client";

import { DEMO_PASSWORD, demoUsers } from "@/lib/demo-auth";
import { roleLabel } from "@/lib/demo-auth/routes";

export default function DemoAccounts() {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
      <p className="text-sm font-semibold text-gray-800 dark:text-white">
        Demo sign-in
      </p>
      <p className="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">
        Password for every account:{" "}
        <span className="font-mono font-medium">{DEMO_PASSWORD}</span>
      </p>
      <ul className="mt-3 space-y-2 text-theme-xs text-gray-600 dark:text-gray-400">
        {demoUsers.map((user) => (
          <li key={user.email} className="flex flex-wrap justify-between gap-1">
            <span className="font-mono text-gray-800 dark:text-gray-200">
              {user.email}
            </span>
            <span>{roleLabel(user.role)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
