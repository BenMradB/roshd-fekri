"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { IoImages } from "react-icons/io5";
import { MdSlowMotionVideo } from "react-icons/md";
import { LuAudioLines } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa6";
import { CiText } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { TLectureType } from "@/types/types";

const links: {
  title: string;
  icon: React.ReactNode;
  type: TLectureType;
}[] = [
  {
    title: "Home",
    type: null,
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "Image Content",
    type: "image",
    icon: (
      <IoImages className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Video Content",
    type: "video",
    icon: (
      <MdSlowMotionVideo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Audio Content",
    type: "audio",
    icon: (
      <LuAudioLines className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "PDF Document",
    type: "pdf",
    icon: (
      <FaFilePdf className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "Text Content",
    type: "text",
    icon: (
      <CiText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
];

type Props = {
  className?: string;
  setSelectedType: (type: TLectureType) => void;
};

const ManageToolBar = ({ className, setSelectedType }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full absolute bottom-0 left-1/2 -translate-x-1/2",
        className
      )}
    >
      <FloatingDock
        desktopClassName="cursor-pointer bg-transparent p-0"
        items={links}
        onSelectTypeHandler={(type: TLectureType) => {
          setSelectedType(type);
        }}
      />
    </div>
  );
};

export default ManageToolBar;
