import { navigationBarItems } from "@/constants/constants";
import { TNavbarItem } from "@/types/types";
import Link from "next/link";
import React from "react";

interface Props {
  role?: "admin" | "user" | undefined;
}

const Navbar = ({ role }: Props) => {
  console.log("role", role);
  return (
    <nav className="w-full h-fit grid grid-cols-5 gap-4">
      {navigationBarItems.map((item: TNavbarItem) => (
        <Link
          href={item.url}
          key={item.id}
          className="w-fit h-fit flex justify-center items-center gap-4  hover:border-b-5 border-[#fbc50b] border-solid !pb-2 transition-all  ease-in-out relative"
        >
          <p className="text-white text-xl text-center font-normal w-full">
            {item.title}
          </p>
        </Link>
      ))}

      {role === "admin" ? (
        <Link
          href={"/admin/courses"}
          key={role}
          className="w-[100px] h-fit flex justify-center items-center gap-4  hover:border-b-5 border-[#fbc50b] border-solid !pb-2 transition-all  ease-in-out relative"
        >
          <p className="text-white text-xl text-center font-normal w-full">
            لوحة التحكم
          </p>
        </Link>
      ) : null}
    </nav>
  );
};

export default Navbar;
