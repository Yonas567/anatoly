"use client";

import ComponentCard from "@/components/common/component-card";
import { Button } from "@/components/ui/button";
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
import { serviceTypes } from "@/data/security/mock-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  serviceRequestSchema,
  type ServiceRequestFormData,
} from "./schema";

export default function ServiceRequestForm() {
  const { session } = useAuth();
  const [reference, setReference] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      contactName: session?.user.name ?? "",
      organization: session?.user.organization ?? "",
      phone: session?.user.phone ?? "",
      email: session?.user.email ?? "",
      serviceType: "",
      siteAddress: "",
      city: "Addis Ababa",
      guardsNeeded: 1,
      shiftCoverage: "24h",
      armed: "unarmed",
      startDate: "",
      duration: "3",
      details: "",
      contactMethod: "phone",
    },
    mode: "onTouched",
  });

  const onSubmit = async (_data: ServiceRequestFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    const ref = `SR-2026-${String(Math.floor(10000 + Math.random() * 89999))}`;
    setReference(ref);
    reset();
  };

  if (reference) {
    return (
      <ComponentCard
        title="Request submitted"
        desc="In production, you would receive SMS or email confirmation with this reference."
      >
        <div className="rounded-xl border border-success-200 bg-success-50 p-6 text-center dark:border-success-500/30 dark:bg-success-500/10">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your reference number
          </p>
          <p className="mt-2 font-mono text-2xl font-semibold text-success-700 dark:text-success-400">
            {reference}
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Status: <span className="font-medium">New</span> — our operations
            team will contact you shortly.
          </p>
          <Button className="mt-6" variant="outline" onClick={() => setReference(null)}>
            Submit another request
          </Button>
        </div>
      </ComponentCard>
    );
  }

  return (
    <ComponentCard
      title="Request guard services"
      desc="Visitors can submit without an account. Signed-in clients have contact details pre-filled."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2" noValidate>
        <Field data-invalid={Boolean(errors.contactName)}>
          <FieldLabel>Full name / contact person *</FieldLabel>
          <Input {...register("contactName")} placeholder="Contact name" />
          <FieldError errors={[errors.contactName]} />
        </Field>
        <Field>
          <FieldLabel>Organization (optional)</FieldLabel>
          <Input {...register("organization")} placeholder="Company name" />
        </Field>
        <Field data-invalid={Boolean(errors.phone)}>
          <FieldLabel>Phone *</FieldLabel>
          <Input {...register("phone")} type="tel" placeholder="+251..." />
          <FieldError errors={[errors.phone]} />
        </Field>
        <Field data-invalid={Boolean(errors.email)}>
          <FieldLabel>Email</FieldLabel>
          <Input {...register("email")} type="email" placeholder="email@company.com" />
          <FieldError errors={[errors.email]} />
        </Field>
        <Field data-invalid={Boolean(errors.serviceType)} className="sm:col-span-2">
          <FieldLabel>Service type *</FieldLabel>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(val) => field.onChange(val ?? "")}
                items={serviceTypes.map((t) => ({ value: t, label: t }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.serviceType]} />
        </Field>
        <Field data-invalid={Boolean(errors.siteAddress)} className="sm:col-span-2">
          <FieldLabel>Site address *</FieldLabel>
          <Input {...register("siteAddress")} placeholder="Street, building, area" />
          <FieldError errors={[errors.siteAddress]} />
        </Field>
        <Field data-invalid={Boolean(errors.city)}>
          <FieldLabel>City *</FieldLabel>
          <Input {...register("city")} />
          <FieldError errors={[errors.city]} />
        </Field>
        <Field data-invalid={Boolean(errors.guardsNeeded)}>
          <FieldLabel>Guards needed *</FieldLabel>
          <Input
            {...register("guardsNeeded", { valueAsNumber: true })}
            type="number"
            min={1}
          />
          <FieldError errors={[errors.guardsNeeded]} />
        </Field>
        <Field data-invalid={Boolean(errors.shiftCoverage)}>
          <FieldLabel>Shift coverage *</FieldLabel>
          <Controller
            name="shiftCoverage"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Shift" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                  <SelectItem value="24h">24-hour</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.shiftCoverage]} />
        </Field>
        <Field data-invalid={Boolean(errors.armed)}>
          <FieldLabel>Armed or unarmed *</FieldLabel>
          <Controller
            name="armed"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unarmed">Unarmed</SelectItem>
                  <SelectItem value="armed">Armed</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.armed]} />
        </Field>
        <Field data-invalid={Boolean(errors.startDate)}>
          <FieldLabel>Start date *</FieldLabel>
          <Input {...register("startDate")} type="date" />
          <FieldError errors={[errors.startDate]} />
        </Field>
        <Field data-invalid={Boolean(errors.duration)}>
          <FieldLabel>Duration *</FieldLabel>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-off">One-off event</SelectItem>
                  <SelectItem value="1">1 month</SelectItem>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                  <SelectItem value="12">12 months</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.duration]} />
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel>Additional details</FieldLabel>
          <Textarea {...register("details")} rows={4} placeholder="Access rules, risks, special requirements..." />
        </Field>
        <div className="sm:col-span-2 flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Submit request"}
          </Button>
        </div>
      </form>
    </ComponentCard>
  );
}
