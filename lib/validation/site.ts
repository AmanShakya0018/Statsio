import { z } from "zod";

export const siteSchema = z.object({
  name: z.string().min(1, { message: "Site name is required" }),
  domain: z
    .string()
    .min(1, { message: "Domain is required" })
    .regex(
      /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
      { message: "Please enter a valid domain (e.g. example.com or sub.example.com)" }
    )
});

export type SiteFormData = z.infer<typeof siteSchema>;
