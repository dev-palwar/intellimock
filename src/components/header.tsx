"use client";

import React, { useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, []);

  const links = [{ label: "Dashboard", link: "/dashboard" }];

  return (
    <div className="flex p-8 justify-between items-center sticky top-0 left-0 right-0 z-20 bg-white">
      <div className="left-part">
        <h1
          className="uppercase text-xl font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Intellimock
        </h1>
      </div>
      <div className="flex gap-12 justify-center items-center">
        {links.map((val, index) => {
          return (
            <Link key={index} href={val.link}>
              <p>{val.label}</p>
            </Link>
          );
        })}
        <ThemeToggle />
        <Button onClick={() => signOut()}>Logout</Button>
        {session?.data?.user?.image ? (
          <div className="h-[5vh] rounded-full overflow-hidden">
            <Image
              className="h-full w-full object-cover "
              src={session?.data.user?.image as string}
              height={100}
              width={100}
              alt="user"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
