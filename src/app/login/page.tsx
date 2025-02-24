"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginPage from "./components/login";

export default function Page() {
  const router = useRouter();

  const session = useSession();

  useEffect(() => {
    if (session.status == "authenticated") {
      router.push("/");
    }
  }, [session]);

  return <LoginPage />;
}
