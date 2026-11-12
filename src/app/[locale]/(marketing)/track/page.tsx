import PageBreadcrumb from "@/components/common/page-breadcrumb";
import TrackStatusForm from "@/components/public/track";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Request or Case | ShieldGuard",
};

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <PageBreadcrumb pageTitle="Track Status" />
      <div className="mt-6">
        <TrackStatusForm />
      </div>
    </div>
  );
}
