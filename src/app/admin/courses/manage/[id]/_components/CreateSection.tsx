"use client";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

const CreateSection = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <PlusCircle className="h-6 w-6" />
    </div>
  );
};

export default CreateSection;
