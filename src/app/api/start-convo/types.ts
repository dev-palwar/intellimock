import { z } from "zod";

// Schema for contact information
const ContactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string().optional(),
});

// Schema for work experience
const ExperienceSchema = z.object({
  job_title: z.string(),
  company: z.string(),
  duration: z.string(),
});

// Schema for education
const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  year: z.string(),
});

// Main resume data schema
export const ResumeDataSchema = z.object({
  name: z.string(),
  contact_info: ContactInfoSchema,
  skills: z.array(z.string()),
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  certifications: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  summary: z.string().optional(),
});

// Type for the parsed resume data
export type ResumeData = z.infer<typeof ResumeDataSchema>;

// Type for text extraction results
export type TextExtractionResult =
  | { success: true; text: string }
  | { success: false; error: string };
