"use client";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { uploadResume } from "@/actions/save-candidate-resume";
import { toast } from "sonner";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session.status, router]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a valid PDF file");
      return;
    }

    setFileName(selectedFile.name);
    setLoading(true);

    const res = await uploadResume(selectedFile);

    if (res.url) {
      setResumeUrl(res.url);
      toast.success("Resume uploaded to the server");
      saveCandidateResume(res.url);
    } else if (res.error) {
      toast.error("Couldn't upload the resume " + res.error);
    }

    setLoading(false);
  };

  async function saveCandidateResume(downloadableResumeUrl: string) {
    setLoading(true);
    try {
      let response = await axios.post("/api/user/resume-upload", {
        resume_url: downloadableResumeUrl,
        email: session.data?.user.email,
      });

      if (response) {
        toast("Resume saved in the database");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error " + error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <div className="flex flex-col gap-4 p-4">
        <h1>Hi, {session.data?.user?.name}</h1>
        <p>Let's continue by giving me your resume</p>
        <Input
          type="file"
          className="cursor-pointer"
          onChange={handleFileChange}
          accept=".pdf"
        />

        {loading && (
          <p className="text-blue-500">Uploading it to the server...</p>
        )}

        {resumeUrl && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Uploaded Resume:</h2>
            <iframe
              src={resumeUrl}
              className="w-full h-96 border rounded"
              title="Resume Preview"
            />
          </div>
        )}
      </div>
    </div>
  );
}
