import PageBreadcrumb from "@/components/common/page-breadcrumb";
import FeedbackForm from "@/components/public/feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback & Complaints | ShieldGuard",
};

export default function FeedbackPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <PageBreadcrumb pageTitle="Feedback & Complaints" />
      <div className="mt-6">
        <FeedbackForm />
      </div>
    </div>
  );
}
