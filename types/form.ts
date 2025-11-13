import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    contactNo: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number too long"),

    profession: z.enum(["doctor", "patient", "organisation"], {
      errorMap: () => ({ message: "Please select a valid profession" }),
    }),

    speciality: z.string().optional(),
    prescriptionIssue: z.string().optional(),
    organisationName: z.string().optional(),

    age: z
      .string()
      .min(1, "Age is required")
      .transform((val) => Number(val))
      .refine((val) => val > 0 && val <= 120, {
        message: "Age must be between 1 and 120",
      }),

    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Please select a valid gender" }),
    }),

    location: z.string().min(1, "Location is required"),

    subscribeToNewsletter: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (data.profession === "doctor" && !data.speciality) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["speciality"],
        message: "Speciality is required for doctors",
      });
    }

    if (data.profession === "patient" && !data.prescriptionIssue) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["prescriptionIssue"],
        message: "Prescription issue is required for patients",
      });
    }

    if (data.profession === "organisation" && !data.organisationName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["organisationName"],
        message: "Organisation name is required for organisations",
      });
    }
  });

export type FormData = z.infer<typeof formSchema>;
