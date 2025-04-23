import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={cn(
        "w-full flex justify-between items-center  primary-bg rounded-xl !px-4",
        className
      )}
    >
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
