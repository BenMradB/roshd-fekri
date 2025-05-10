"use client";
import React from "react";
import { TLectureContent, TSection } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TLecture } from "../../../../../../types/types";
import { ContentType } from "@/server/models/content.lecture.model";
import { VideoPlayer } from "vidify";

const TextContent = ({ content }: { content: TLectureContent }) => {
  console.log(content);
  return <div>TextContent</div>;
};

const ImageContent = ({
  lecture,
  content,
}: {
  lecture: TLecture;
  content: TLectureContent;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {lecture.description ? (
        <p className="text-sm text-gray-500 w-full text-right wrap-break-word">
          {lecture.description}
        </p>
      ) : null}
      <Image
        src={content.image!}
        alt={"image content"}
        width={500}
        height={500}
        className="w-full  object-contain rounded-md"
      />
    </div>
  );
};

const VideoContent = ({
  content,
  lecture,
}: {
  content: TLectureContent;
  lecture: TLecture;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {lecture.description ? (
        <p className="text-sm text-gray-500 w-full text-right wrap-break-word">
          {lecture.description}
        </p>
      ) : null}
      <VideoPlayer
        src={content.video!}
        className="object-cover max-w-full h-[400px] rounded mb-4"
        primaryColor="#092e24"
      />
    </div>
  );
};

const AudioContent = ({
  content,
  lecture,
}: {
  content: TLectureContent;
  lecture: TLecture;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {lecture.description ? (
        <p className="text-sm text-gray-500 w-full text-right wrap-break-word">
          {lecture.description}
        </p>
      ) : null}
      <audio
        controls
        color="#092e24"
        className="w-full border border-[#092e24] rounded-full"
      >
        <source src={content.audio!} type="audio/mpeg" />
        {/* Your browser does not support the audio element. */}
        <p className="text-[#092e24] font-extrabold">
          الصوت غير مدعوم في المتصفح الخاص بك
        </p>
      </audio>
    </div>
  );
};

const PDFContent = ({
  content,
  lecture,
}: {
  content: TLectureContent;
  lecture: TLecture;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {lecture.description ? (
        <p className="text-sm text-gray-500 w-full text-right wrap-break-word">
          {lecture.description}
        </p>
      ) : null}
      <iframe
        src={content.pdf!}
        title="PDF Preview"
        width={"100%"}
        height={"400px"}
        className="w-full h-[400px] border-none text-[#092e24] py-4 gap-y-2 rounded-md"
      />
    </div>
  );
};

type Props = {
  section: TSection;
  className?: string;
};

const LectureContent = ({ section, className }: Props) => {
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center gap-10",
          className
        )}
      >
        {section.lectures.length ? (
          section.lectures.map((lecture) => (
            <div key={lecture._id} className="w-[60%] mx-auto ">
              {lecture.content.type === ContentType.TEXT ? (
                <TextContent content={lecture.content} />
              ) : null}
              {lecture.content.type === ContentType.IMAGE ? (
                <ImageContent lecture={lecture} content={lecture.content} />
              ) : null}
              {lecture.content.type === ContentType.VIDEO ? (
                <VideoContent content={lecture.content} lecture={lecture} />
              ) : null}

              {lecture.content.type === ContentType.AUDIO ? (
                <AudioContent content={lecture.content} lecture={lecture} />
              ) : null}

              {lecture.content.type === ContentType.PDF ? (
                <PDFContent content={lecture.content} lecture={lecture} />
              ) : null}
            </div>
          ))
        ) : (
          <p>
            {/* Start adding content from the toolbar up in arabic */}
            ابدأ بإضافة محتوى من شريط الأدوات
          </p>
        )}
      </div>
    </>
  );
};

export default LectureContent;
