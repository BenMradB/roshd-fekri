"use client";
import { TSection } from "@/types/types";
import React from "react";
import LectureContent from "./LectureContent";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ManageToolBar from "@/components/ManageToolBar";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import VideoContent from "./VideoContent";
import AudioContent from "./AudioContent";
import PDFContent from "./PDFContent";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContentType } from "@/server/models/content.lecture.model";
import { createContent } from "@/server/content/content.create";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = { section: TSection };

const Section = ({ section }: Props) => {
  const router = useRouter();

  const [selectedType, setSelectedType] = React.useState<ContentType | null>(
    null
  );

  const onFinishAddingLectureHandler = async ({
    type,
    section,
    description,
    ...rest
  }: {
    type: ContentType;
    section: string;
    description: string;
    [key: string]: string;
  }) => {
    await createContent({
      type,
      section,
      description,
      ...rest,
    });

    router.refresh();
    toast.success("Lecture added successfully");
    setSelectedType(null);
  };

  return (
    <div
      className={cn(
        "group/section relative hover:bg-[#092e24]/5 p-2 border-r-6 border-[#092e24] w-full h-full",
        selectedType && "hover:bg-white"
      )}
    >
      <Accordion type="single" collapsible className={cn("w-full h-full ")}>
        <AccordionItem
          value={`item-${section._id}`}
          className="hover:underline-offset-0"
        >
          <AccordionTrigger className="grid gap-2 text-right cursor-pointer ">
            <h2 className="text-xl font-extrabold">{section.title}</h2>
            <p className="font-light text-sm line-clamp-2">
              {section.description}
            </p>
          </AccordionTrigger>
          <AccordionContent className={cn("text-right relative ")}>
            <LectureContent section={section} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Dialog
        open={selectedType !== null}
        onOpenChange={() => setSelectedType(null)}
      >
        <DialogContent className="sm:max-w-[425px] border-2 border-[#092e24] rounded-none p-10 overflow-auto">
          <DialogHeader className="hidden">
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          {selectedType === "text" ? <TextContent /> : null}
          {selectedType === "image" ? (
            <ImageContent
              section={section}
              onFinish={onFinishAddingLectureHandler}
            />
          ) : null}
          {selectedType === "video" ? (
            <VideoContent
              section={section}
              onFinish={onFinishAddingLectureHandler}
            />
          ) : null}
          {selectedType === "audio" ? (
            <AudioContent
              section={section}
              onFinish={onFinishAddingLectureHandler}
            />
          ) : null}
          {selectedType === "pdf" ? (
            <PDFContent
              section={section}
              onFinish={onFinishAddingLectureHandler}
            />
          ) : null}
        </DialogContent>
      </Dialog>

      <ManageToolBar
        setSelectedType={setSelectedType}
        className={cn("hidden", !selectedType && "group-hover/section:flex")}
      />
    </div>
  );
};

export default Section;
