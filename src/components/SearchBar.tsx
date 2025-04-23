/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  return (
    <div className="w-full relative text-white text-lg font-normal text-right">
      <Search
        onClick={() => setIsFocused(true)}
        className={cn(
          "absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer",
          searchValue ? "hidden" : "block"
        )}
        size={25}
      />
      <Input
        className={cn(
          "w-full h-full py-4 outline-0 border-0  focus-visible:border-b-5 focus-visible:border-[#fbc50b] rounded-none transition-all ease-in-out"
        )}
        type="text"
        // Search for courses (in arabic)
        placeholder="ابحث عن الدورات... "
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
