"use client";

import { useAuth } from "@/context/auth-context";
import type { UserRole } from "@/lib/demo-auth";
import { Link, useRouter } from "@/i18n/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

interface RequireAuthProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function RequireAuth({
  children,
  allowedRoles,
}: RequireAuthProps) {
  const { session, isReady } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isReady) return;
    if (!session) {
      router.replace("/signin");
      return;
    }
    if (allowedRoles && !allowedRoles.includes(session.user.role)) {
      router.replace("/");
    }
  }, [allowedRoles, isReady, router, session]);

  if (!isReady) {
    return (
      <div className="flex min-h-48 items-center justify-center">
        <Spinner className="size-8 text-brand-500" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-white/3">
        <p className="text-gray-700 dark:text-gray-300">
          You do not have access to this area.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-brand-500 hover:text-brand-600"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return children;
}
