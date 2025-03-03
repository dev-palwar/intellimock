import { ResumeDataSchema, TextExtractionResult } from "../types";
import { logger } from "@/lib/logger";
import { deepseek } from "@/lib/ai/deepseek";
import pdf from "pdf-parse";
import fs from "fs";
import PdfParse from "pdf-parse";

export async function extractTextFromFile(
  buffer: ArrayBuffer,
  contentType: string | null
): Promise<TextExtractionResult> {
  const pdfBuffer = fs.readFileSync("public/dev's-resume-updated.pdf");

  console.log(pdfBuffer);

  const data = await PdfParse(pdfBuffer);

  console.log(data);

  return { success: true, text: "nhi chalra" };

  // try {
  //   // Handle PDF files
  //   if (
  //     contentType?.includes("pdf") ||
  //     contentType === "application/octet-stream"
  //   ) {
  //     const pdfBuffer = Buffer.from(buffer);
  //     const data = await pdf(pdfBuffer);
  //     return { success: true, text: data.text };
  //   }

  //   return {
  //     success: false,
  //     error: "Unsupported file type. Only PDF files are supported.",
  //   };
  // } catch (error) {
  //   logger.error("Text extraction failed:", error);
  //   return {
  //     success: false,
  //     error: "Failed to extract text from file. The file may be corrupted.",
  //   };
  // }
}

// AI processing function for DeepSeek
export async function analyzeResumeWithDeepSeek(text: string): Promise<any> {
  const prompt = [
    "Analyze this resume and extract key details in JSON format. Include:",
    "- name, contact_info (email, phone, location)",
    "- skills (array), experience (array of objects with job_title, company, duration)",
    "- education (array of objects with degree, institution, year)",
    "- certifications (array), languages (array), summary",
    "Respond ONLY with valid JSON matching this schema:",
    JSON.stringify(ResumeDataSchema),
  ].join("\n");

  const result = await deepseek.createChatCompletion({
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content:
          "You are a expert resume parser. Extract structured data from resumes.",
      },
      { role: "user", content: prompt + "\n\nResume Content:\n" + text },
    ],
    response_format: { type: "json_object" },
    temperature: 0.1,
    max_tokens: 2000,
  });

  try {
    return JSON.parse(result.choices[0].message.content);
  } catch (error) {
    logger.error(
      "Failed to parse DeepSeek response:",
      result.choices[0].message.content
    );
    throw new Error("Invalid JSON response from AI");
  }
}
