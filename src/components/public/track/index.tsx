"use client";

import ComponentCard from "@/components/common/component-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCases, mockServiceRequests } from "@/data/security/mock-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const trackSchema = z.object({
  reference: z.string().trim().min(3, "Enter reference or case number"),
  phone: z.string().trim().min(9, "Enter the phone used on submission"),
});

type TrackFormData = z.infer<typeof trackSchema>;

export default function TrackStatusForm() {
  const [result, setResult] = useState<
    | { kind: "request"; data: (typeof mockServiceRequests)[0] }
    | { kind: "case"; data: (typeof mockCases)[0] }
    | null
  >(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TrackFormData>({
    resolver: zodResolver(trackSchema),
    defaultValues: { reference: "", phone: "" },
    mode: "onTouched",
  });

  const onSubmit = (data: TrackFormData) => {
    const ref = data.reference.toUpperCase();
    const request = mockServiceRequests.find((r) => r.reference === ref);
    if (request && request.phone.replace(/\s/g, "") === data.phone.replace(/\s/g, "")) {
      setResult({ kind: "request", data: request });
      return;
    }
    const caseRow = mockCases.find((c) => c.caseNo === ref);
    if (caseRow) {
      setResult({ kind: "case", data: caseRow });
      return;
    }
    setResult(null);
    alert("No matching record found in demo data. Try SR-2026-00123 or FB-2026-00441.");
  };

  return (
    <Tabs defaultValue="request">
      <TabsList className="mb-6">
        <TabsTrigger value="request">Service request</TabsTrigger>
        <TabsTrigger value="case">Feedback case</TabsTrigger>
      </TabsList>

      <TabsContent value="request">
        <ComponentCard
          title="Track a service request"
          desc="Enter reference number and phone. Demo: SR-2026-00123 with +251911223344"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4" noValidate>
            <Field data-invalid={Boolean(errors.reference)}>
              <FieldLabel>Reference *</FieldLabel>
              <Input {...register("reference")} placeholder="SR-2026-00123" />
              <FieldError errors={[errors.reference]} />
            </Field>
            <Field data-invalid={Boolean(errors.phone)}>
              <FieldLabel>Phone *</FieldLabel>
              <Input {...register("phone")} type="tel" />
              <FieldError errors={[errors.phone]} />
            </Field>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Look up
            </Button>
          </form>

          {result?.kind === "request" && (
            <ResultCard
              title={result.data.reference}
              rows={[
                ["Status", result.data.status],
                ["Service", result.data.serviceType],
                ["City", result.data.city],
                ["Guards", String(result.data.guardsNeeded)],
              ]}
            />
          )}
        </ComponentCard>
      </TabsContent>

      <TabsContent value="case">
        <ComponentCard title="Track a feedback case" desc="Demo: FB-2026-00441">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4" noValidate>
            <Field data-invalid={Boolean(errors.reference)}>
              <FieldLabel>Case number *</FieldLabel>
              <Input {...register("reference")} placeholder="FB-2026-00441" />
              <FieldError errors={[errors.reference]} />
            </Field>
            <Field data-invalid={Boolean(errors.phone)}>
              <FieldLabel>Phone (requests only)</FieldLabel>
              <Input {...register("phone")} type="tel" />
              <FieldError errors={[errors.phone]} />
            </Field>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Look up
            </Button>
          </form>

          {result?.kind === "case" && (
            <ResultCard
              title={result.data.caseNo}
              rows={[
                ["Type", result.data.type],
                ["Status", result.data.status],
                ["Site", result.data.site],
                ["Severity", result.data.severity],
              ]}
              badge={result.data.overdue ? "Overdue" : undefined}
            />
          )}
        </ComponentCard>
      </TabsContent>
    </Tabs>
  );
}

function ResultCard({
  title,
  rows,
  badge,
}: {
  title: string;
  rows: [string, string][];
  badge?: string;
}) {
  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-white/3">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-mono font-semibold text-gray-900 dark:text-white">{title}</p>
        {badge && (
          <Badge variant="light" color="error">
            {badge}
          </Badge>
        )}
      </div>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-gray-500 dark:text-gray-400">{label}</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
