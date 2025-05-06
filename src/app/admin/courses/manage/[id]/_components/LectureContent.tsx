"use client";
import React from "react";
import ManageToolBar from "@/components/ManageToolBar";
import { cn } from "@/lib/utils";
import { TCourse, TLectureType } from "@/types/types";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import VideoContent from "./VideoContent";
import AudioContent from "./AudioContent";
import PDFContent from "./PDFContent";

type Props = {
  course: TCourse;
};

const LectureContent = ({ course }: Props) => {
  const [selectedType, setSelectedType] = React.useState<TLectureType>(null);
  console.log("COURSE", course);
  return (
    <>
      <div
        className={cn(
          "hidden w-full h-fit p-10  border-2 border-[#092e24] absolute top-0 left-1/2 -translate-x-1/2 bg-accent/70  !z-50",
          selectedType && "animate-fadeIn block"
        )}
      >
        {selectedType === "text" ? <TextContent /> : null}
        {selectedType === "image" ? <ImageContent /> : null}
        {selectedType === "video" ? <VideoContent /> : null}
        {selectedType === "audio" ? <AudioContent /> : null}
        {selectedType === "pdf" ? <PDFContent /> : null}
      </div>
      <div className={cn("w-full h-full overflow-auto relative")}>
        <ManageToolBar setSelectedType={setSelectedType} className="" />
        fsdfsdfsdfsf
      </div>
    </>
  );
};

export default LectureContent;
