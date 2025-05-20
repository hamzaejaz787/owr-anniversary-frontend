import { z } from "zod";

export const formSchema = z.object({
  firstname: z
    .string({ required_error: "First name cannot be empty" })
    .min(2)
    .max(120),
  lastname: z.string().min(2).max(120),
  jobTitle: z
    .string({ required_error: "Job title is required" })
    .min(2)
    .max(200),
  company: z
    .string({ required_error: "Enter a valid company name" })
    .min(1)
    .max(200),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" })
    .min(2)
    .refine(
      (val) =>
        !/(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|outlook\.com|icloud\.com|protonmail\.com|live\.com|msn\.com|gmx\.com)$/i.test(
          val.split("@")[1]
        ),
      {
        message: "Please enter a valid business email address",
      }
    ),
  numberOfEvents: z.string(),
  contact: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\+?\d[\d\s\-().]{7,}$/, {
      message: "Phone number is not valid!!",
    })
    .transform((val) => val.replace(/\D/g, "")),
});
