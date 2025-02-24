"use client";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex p-8 justify-between items-center sticky top-0 left-0 right-0 z-20">
      <div className="left-part">
        <h1
          className="uppercase text-xl font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Intellimock
        </h1>
      </div>
      <div className="flex gap-12">
        <ThemeToggle />
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
