import RequireAuth from "@/components/security/require-auth";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth allowedRoles={["client"]}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">{children}</div>
      </div>
    </RequireAuth>
  );
}
