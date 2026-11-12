import RequireAuth from "@/components/security/require-auth";

export default function GuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth allowedRoles={["guard"]}>
      <div className="min-h-screen bg-white px-4 py-6 dark:bg-gray-900 md:px-6">
        {children}
      </div>
    </RequireAuth>
  );
}
