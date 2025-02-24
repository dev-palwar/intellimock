"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
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
    <div className="flex flex-col h-[100vh] items-center justify-center">
      <h1>om ganeshaya namah</h1>
      <Button onClick={() => signOut()}>logout</Button>
    </div>
  );
}
