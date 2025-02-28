import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, resume_url } = await req.json();
    console.log("Received Data:", { email, resume_url });

    if (!email || !resume_url) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.userData.update({
      where: { email: email },
      data: {
        resumeUrl: resume_url,
      },
    });

    console.log("Updated User:", updatedUser);

    return NextResponse.json({ success: true, updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
