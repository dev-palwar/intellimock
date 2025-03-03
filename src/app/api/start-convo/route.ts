import { NextRequest, NextResponse } from "next/server";
import { ResumeDataSchema } from "./types";
import { logger } from "@/lib/logger";
import { analyzeResumeWithDeepSeek, extractTextFromFile } from "./helpers";

export async function POST(req: NextRequest) {
  // 1. Validate request body
  const { resume_url } = await req.json();
  if (!resume_url) {
    return NextResponse.json({ error: "Missing resume_url" }, { status: 400 });
  }

  // 2. Download resume
  const response = await fetch(resume_url);
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to download resume" },
      { status: 400 }
    );
  }

  // 3. Extract text
  const contentType = response.headers.get("content-type");
  const buffer = await response.arrayBuffer();
  const extractionResult = await extractTextFromFile(buffer, contentType);
  if (!extractionResult.success) {
    return NextResponse.json(
      { error: extractionResult.error },
      { status: 400 }
    );
  }

  console.log(extractionResult);

  return NextResponse.json({ msg: "chal raha hai" });

  // // 4. Process with AI
  // const aiResponse = await analyzeResumeWithDeepSeek(extractionResult.text);
  // const validationResult = ResumeDataSchema.safeParse(aiResponse);
  // if (!validationResult.success) {
  //   return NextResponse.json(
  //     { error: "Invalid AI response" },
  //     { status: 500 }
  //   );
  // }

  // // 5. Return success
  // return NextResponse.json(validationResult.data);
  // try {
  //   // 1. Validate request body
  //   const { resume_url } = await req.json();
  //   if (!resume_url) {
  //     return NextResponse.json(
  //       { error: "Missing resume_url" },
  //       { status: 400 }
  //     );
  //   }

  //   // 2. Download resume
  //   const response = await fetch(resume_url);
  //   if (!response.ok) {
  //     return NextResponse.json(
  //       { error: "Failed to download resume" },
  //       { status: 400 }
  //     );
  //   }

  //   // 3. Extract text
  //   const contentType = response.headers.get("content-type");
  //   const buffer = await response.arrayBuffer();
  //   const extractionResult = await extractTextFromFile(buffer, contentType);
  //   if (!extractionResult.success) {
  //     return NextResponse.json(
  //       { error: extractionResult.error },
  //       { status: 400 }
  //     );
  //   }

  //   console.log(buffer);
  //   console.log(contentType);
  //   // console.log(extractionResult);

  //   return NextResponse.json({ msg: "chal raha hai" });

  //   // // 4. Process with AI
  //   // const aiResponse = await analyzeResumeWithDeepSeek(extractionResult.text);
  //   // const validationResult = ResumeDataSchema.safeParse(aiResponse);
  //   // if (!validationResult.success) {
  //   //   return NextResponse.json(
  //   //     { error: "Invalid AI response" },
  //   //     { status: 500 }
  //   //   );
  //   // }

  //   // // 5. Return success
  //   // return NextResponse.json(validationResult.data);
  // } catch (error) {
  //   logger.error("Critical error:", error);
  //   return NextResponse.json(
  //     { error: "Internal server error" },
  //     { status: 500 }
  //   );
  // }
}
