import { navigationBarItems } from "@/constants/constants";
import { TNavbarItem } from "@/types/types";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-fit h-fit flex justify-between items-center gap-6">
      {navigationBarItems.map((item: TNavbarItem) => (
        <Link
          href={item.url}
          key={item.id}
          className="w-fit h-fit flex justify-between items-center gap-4  hover:border-b-5 border-[#fbc50b] border-solid !pb-2 transition-all  ease-in-out relative"
        >
          <p className="text-white text-xl font-normal">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
