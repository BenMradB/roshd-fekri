"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { getUserByClerkId } from "@/server/actions/user/user.get";
import { TUser } from "@/types/types";
import { IResponse } from "@/server/utils/action.response";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const { userId } = useAuth();

  const [userData, setUserData] = useState<IResponse<TUser | null>>();

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const response: IResponse<TUser> = await getUserByClerkId(userId);
        if (response.status === "success") {
          setUserData(response);
        } else {
          console.error("Error fetching user:", response.message);
        }
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <header
      className={cn(
        "w-full grid grid-cols-4 gap-4 items-center  primary-bg rounded-xl px-4",
        className
      )}
    >
      <Logo />
      <Navbar />

      <SignedOut>
        <div className="grid w-fit grid-cols-2 gap-2">
          <Link href={"/sign-up"}>
            <Button className="w-fit h-full px-4 py-2 border border-[#fbc50b] bg-[#fbc50b] hover:bg-transparent cursor-pointer  rounded-xs">
              {/* Signup in arabic */}
              انشاء حساب
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="w-fit h-full px-4 py-2 border border-[#fbc50b] bg-transparent hover:bg-[#fbc50b] cursor-pointer  rounded-xs">
              {/* Signin in arabic */}
              تسجيل الدخول
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SearchBar />

      <div className="flex w-full items-center justify-end">
        <SignedIn>
          {userData ? (
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={`${userData && userData!.data!.avatar}`}
                alt="@shadcn"
              />
              <AvatarFallback>
                {" "}
                <Skeleton className="h-12 w-12 rounded-full" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className="h-12 w-12 rounded-full" />
          )}
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
