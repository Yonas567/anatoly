import PageBreadcrumb from "@/components/common/page-breadcrumb";
import ServiceRequestForm from "@/components/public/request-service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Service | ShieldGuard",
};

export default function RequestServicePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <PageBreadcrumb pageTitle="Request a Service" />
      <div className="mt-6">
        <ServiceRequestForm />
      </div>
    </div>
  );
}
