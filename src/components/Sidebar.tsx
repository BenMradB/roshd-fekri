"use client";
import { TSidebarItem } from "@/types/types";
import React from "react";
import SidebarItem from "./SidebarItem";
import { adminSidebarItems } from "@/constants/constants";

const Sidebar = () => {
  return (
    <div className="w-80 px-4 primary-bg min-h-full overflow-auto flex flex-col gap-y-10 py-4">
      {adminSidebarItems.map((item: TSidebarItem) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
