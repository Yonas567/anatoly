import { z } from "zod";

export const serviceRequestSchema = z.object({
  contactName: z.string().trim().min(2, "Full name is required"),
  organization: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .min(9, "Enter a valid phone number")
    .regex(/^\+?[\d\s-]+$/, "Enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  serviceType: z.string().min(1, "Select a service type"),
  siteAddress: z.string().trim().min(5, "Site address is required"),
  city: z.string().trim().min(2, "City is required"),
  guardsNeeded: z.number({ error: "At least one guard" }).int().min(1),
  shiftCoverage: z.enum(["day", "night", "24h"]),
  armed: z.enum(["armed", "unarmed"]),
  startDate: z.string().min(1, "Start date is required"),
  duration: z.string().min(1, "Select duration"),
  details: z.string().trim().optional(),
  contactMethod: z.enum(["phone", "email", "sms"]).optional(),
});

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
