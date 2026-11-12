"use client";

import ComponentCard from "@/components/common/component-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/auth-context";
import { clientSites, complaintCategories } from "@/data/security/mock-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { feedbackSchema, type FeedbackFormData } from "./schema";

export default function FeedbackForm() {
  const { session } = useAuth();
  const isClient = session?.user.role === "client";
  const [caseNo, setCaseNo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      type: "complaint",
      category: complaintCategories[0],
      site: isClient ? clientSites[0] : "",
      description: "",
      rating: 0,
      contactName: session?.user.name ?? "",
      contactPhone: session?.user.phone ?? "",
      anonymous: false,
    },
    mode: "onTouched",
  });

  const feedbackType = watch("type");
  const anonymous = watch("anonymous");

  const onSubmit = async (_data: FeedbackFormData) => {
    await new Promise((r) => setTimeout(r, 500));
    setCaseNo(`FB-2026-${String(Math.floor(10000 + Math.random() * 89999))}`);
    reset();
  };

  if (caseNo) {
    return (
      <ComponentCard title="Thank you — we received your submission">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Case number:{" "}
          <span className="font-mono font-semibold text-gray-900 dark:text-white">
            {caseNo}
          </span>
        </p>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          A supervisor will respond within the target time for this severity
          (demo UI only).
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={() => setCaseNo(null)}>
            Submit another
          </Button>
        </div>
      </ComponentCard>
    );
  }

  return (
    <ComponentCard
      title="Feedback & complaints"
      desc="Complaints become tracked cases with owners and deadlines. Anonymous feedback is allowed except where follow-up is required."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2" noValidate>
        <Field data-invalid={Boolean(errors.type)} className="sm:col-span-2">
          <FieldLabel>Type *</FieldLabel>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="compliment">Compliment</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                  <SelectItem value="feedback">General feedback</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.type]} />
        </Field>

        <Field data-invalid={Boolean(errors.category)}>
          <FieldLabel>Category *</FieldLabel>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {complaintCategories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.category]} />
        </Field>

        <Field data-invalid={Boolean(errors.site)}>
          <FieldLabel>Site *</FieldLabel>
          {isClient ? (
            <Controller
              name="site"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {clientSites.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          ) : (
            <Input {...register("site")} placeholder="Site name or address" />
          )}
          <FieldError errors={[errors.site]} />
        </Field>

        <Field className="sm:col-span-2">
          <FieldLabel>Guard (optional)</FieldLabel>
          <Input {...register("guardName")} placeholder="Name or ID if known" />
        </Field>

        <Field className="sm:col-span-2">
          <FieldLabel>Date of incident</FieldLabel>
          <Input {...register("incidentDate")} type="datetime-local" />
        </Field>

        <Field data-invalid={Boolean(errors.description)} className="sm:col-span-2">
          <FieldLabel>Description *</FieldLabel>
          <Textarea {...register("description")} rows={5} />
          <FieldError errors={[errors.description]} />
        </Field>

        <Field className="sm:col-span-2">
          <FieldLabel>Service rating (optional, 1–5)</FieldLabel>
          <Input {...register("rating")} type="number" min={0} max={5} />
        </Field>

        {!anonymous && feedbackType === "complaint" && (
          <>
            <Field data-invalid={Boolean(errors.contactName)}>
              <FieldLabel>Contact name *</FieldLabel>
              <Input {...register("contactName")} />
              <FieldError errors={[errors.contactName]} />
            </Field>
            <Field data-invalid={Boolean(errors.contactPhone)}>
              <FieldLabel>Contact phone *</FieldLabel>
              <Input {...register("contactPhone")} type="tel" />
              <FieldError errors={[errors.contactPhone]} />
            </Field>
          </>
        )}

        <Field orientation="horizontal" className="sm:col-span-2 items-center gap-3">
          <Controller
            name="anonymous"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={(c) => field.onChange(Boolean(c))}
                id="anonymous-feedback"
              />
            )}
          />
          <FieldLabel htmlFor="anonymous-feedback" className="font-normal">
            Submit anonymously (not available for complaints requiring follow-up)
          </FieldLabel>
        </Field>

        <div className="sm:col-span-2 flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Submit"}
          </Button>
        </div>
      </form>
    </ComponentCard>
  );
}
