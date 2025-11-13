import { z } from "zod"

// Validation schema for the registration form
export const RegistrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(10, "Contact number must be at least 10 digits").max(15),
  profession: z.enum(["doctor", "patient", "organisation"], {
    errorMap: () => ({ message: "Please select a valid profession" }),
  }),
  speciality: z
    .string()
    .optional()
    .refine(
      (val, ctx) => {
        const profession = (ctx as any).parent?.profession
        if (profession === "doctor" && !val) {
          return false
        }
        return true
      },
      { message: "Speciality is required for doctors" },
    ),
  prescriptionIssue: z
    .string()
    .optional()
    .refine(
      (val, ctx) => {
        const profession = (ctx as any).parent?.profession
        if (profession === "patient" && !val) {
          return false
        }
        return true
      },
      { message: "Prescription issue is required for patients" },
    ),
  organisationName: z
    .string()
    .optional()
    .refine(
      (val, ctx) => {
        const profession = (ctx as any).parent?.profession
        if (profession === "organisation" && !val) {
          return false
        }
        return true
      },
      { message: "Organisation name is required for organisations" },
    ),
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  location: z.string().min(1, "Location is required"),
  subscribeToNewsletter: z.boolean().default(false),
})

export type RegistrationFormData = z.infer<typeof RegistrationSchema>

// For patient-specific NCDs
export const NCDOptions = [
  "Diabetes - Type 1",
  "Diabetes - Type 2",
  "Hypertension",
  "Heart Disease",
  "Asthma",
  "COPD",
  "Cancer",
  "Other",
] as const

// Specialities for doctors
export const DoctorSpecialities = [
  "Cardiology",
  "Neurology",
  "Endocrinology",
  "Pulmonology",
  "Oncology",
  "General Practice",
  "Internal Medicine",
  "Other",
] as const

// Locations
export const LocationOptions = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Other",
] as const
