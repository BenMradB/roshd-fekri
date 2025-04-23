import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={cn(
        "w-full grid grid-cols-3 items-center  primary-bg rounded-xl !px-4",
        className
      )}
    >
      <Logo />
      <Navbar />
      <SearchBar />
    </header>
  );
};

export default Header;
