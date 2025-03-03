"use client";

import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<string>("chalta kutta...");
  const router = useRouter();

  useEffect(() => {
    processResume();
  }, []);

  const processResume = async () => {
    try {
      setStatus("Processing your resume...");

      // Step 1: Process resume
      const resumeResponse = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/extract-resume-text",
        {
          method: "POST",
        }
      );

      if (!resumeResponse.ok) throw new Error("Resume processing failed");
      const userDetails = await resumeResponse.json();

      setStatus("Initializing conversation...");

      // Step 2: Initialize conversation
      const convoResponse = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/initiate-convo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userDetails),
        }
      );

      if (!convoResponse.ok) throw new Error("Convo initiation failed");
      const { chatId } = await convoResponse.json();

      setTimeout(() => {
        router.push(`/chat/${chatId}`);
      }, 3000);
    } catch (error) {
      setStatus("Error processing your request. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader />
        {/* <div className="animate-spin mb-4">🌀</div> */}
        <p className="text-gray-600">{status}</p>
      </div>
    </div>
  );
}
