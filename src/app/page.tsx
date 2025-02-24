"use client";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  // Handles redirect
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session.status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <div>
        <Input type="file" className="cursor-pointer" />
      </div>
    </div>
  );
}
