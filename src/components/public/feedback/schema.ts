import { z } from "zod";

export const feedbackSchema = z
  .object({
    type: z.enum(["complaint", "compliment", "suggestion", "feedback"]),
    category: z.string().min(1, "Select a category"),
    site: z.string().min(1, "Site is required"),
    guardName: z.string().trim().optional(),
    incidentDate: z.string().optional(),
    description: z.string().trim().min(10, "Please describe in at least 10 characters"),
    rating: z.number().min(0).max(5).optional(),
    contactName: z.string().trim().optional(),
    contactPhone: z.string().trim().optional(),
    anonymous: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.anonymous && data.type === "complaint") {
      if (!data.contactName?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["contactName"],
          message: "Contact name is required for complaints",
        });
      }
      if (!data.contactPhone?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["contactPhone"],
          message: "Phone is required for complaints",
        });
      }
    }
  });

export type FeedbackFormData = z.infer<typeof feedbackSchema>;
