"use client";
import React from "react";
import { IconHome } from "@tabler/icons-react";
import { IoImages } from "react-icons/io5";
import { MdSlowMotionVideo } from "react-icons/md";
import { LuAudioLines } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa6";
import { CiText } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ContentType } from "@/server/models/content.lecture.model";

const links: {
  title: string;
  icon: React.ReactNode;
  type: ContentType | null;
}[] = [
  {
    title: "Home",
    type: null,
    icon: (
      <IconHome className="size-[25px]  cursor-pointer text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "Image Content",
    type: ContentType.IMAGE,
    icon: (
      <IoImages className="size-[25px] cursor-pointer text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Video Content",
    type: ContentType.VIDEO,
    icon: (
      <MdSlowMotionVideo className="size-[25px]  cursor-pointer text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: "Audio Content",
    type: ContentType.AUDIO,
    icon: (
      <LuAudioLines className="size-[25px] cursor-pointer  text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "PDF Document",
    type: ContentType.PDF,
    icon: (
      <FaFilePdf className="size-[25px]  cursor-pointer text-neutral-500 dark:text-neutral-300" />
    ),
  },

  {
    title: "Text Content",
    type: ContentType.TEXT,
    icon: (
      <CiText className="size-[25px]  cursor-pointer text-neutral-500 dark:text-neutral-300" />
    ),
  },
];

type Props = {
  className?: string;
  setSelectedType: (type: ContentType | null) => void;
};

const ManageToolBar = ({ className, setSelectedType }: Props) => {
  return (
    <div
      className={cn(
        "items-center justify-center gap-2 w-fit absolute top-0 left-0",
        className
      )}
    >
      {links.map((link) => (
        <Button
          className="size-[25px] !p-5 rounded-full  cursor-pointer bg-[#092e24]/5 hover:bg-[#092e24]/10"
          key={link.title}
          onClick={() => {
            setSelectedType(link.type);
          }}
        >
          {link.icon}
        </Button>
      ))}
    </div>
  );
};

export default ManageToolBar;
