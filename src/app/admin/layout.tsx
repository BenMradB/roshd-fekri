import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getUserByClerkId } from "@/server/actions/user/user.get";
import { IResponse } from "@/server/utils/action.response";
import { TUser } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  try {
    const response: IResponse<TUser> = await getUserByClerkId(userId);

    if (response.status === "error") {
      return redirect("/");
    }

    if (response.data?.role !== "admin") {
      return redirect("/");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return redirect("/");
  }

  return (
    <>
      <Header className="rounded-none" showNavbar={false} />
      <div className="w-full min-h-[calc(100vh-128px)] flex">
        <Sidebar />
        <div className="w-full flex-1 py-4 px-4">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
