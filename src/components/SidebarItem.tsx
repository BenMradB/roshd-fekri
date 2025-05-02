"use client";
import { cn } from "@/lib/utils";
import { TSidebarItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  item: TSidebarItem;
};

const SidebarItem = ({ item: { title, url, icon: Icon } }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      href={url}
      className={cn(
        "w-full flex items-center gap-x-4 px-8 h-[50px] rounded-none border-4 border-transparent hover:border-b-[#fbc50b]",
        isActive && "border-b-[#fbc50b] bg-[#fbc50b]/80"
      )}
    >
      <Icon className="text-white" size={27} />
      <p className="text-white text-xl font-extrabold tracking-wide">{title}</p>
    </Link>
  );
};

export default SidebarItem;
