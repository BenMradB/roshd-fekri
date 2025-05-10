"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/Upload";
import { ContentType } from "@/server/models/content.lecture.model";
import { TSection } from "@/types/types";
import React from "react";
import { VideoPlayer } from "vidify";

type Props = {
  section: TSection;
  onFinish: ({
    type,
    section,
    description,
    ...rest
  }: {
    type: ContentType;
    section: string;
    description: string;
    [key: string]: string;
  }) => void;
};

const VideoContent = ({ section, onFinish }: Props) => {
  const [video, setVideo] = React.useState<string | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = React.useState<string | undefined>(
    undefined
  );
  const [description, setDescription] = React.useState<string>("");

  const onVideoChange = (file: File) => {
    setSelectedVideo(URL.createObjectURL(file));
  };

  const onUploadHandler = (url?: string) => {
    if (!url) return;
    setVideo(url);
  };

  return (
    <div className="w-full grid gap-2">
      {video ? (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* The Video in arabic*/}
            فيديو
          </p>
          <VideoPlayer
            src={video}
            className="object-cover max-w-full h-[200px] rounded-md mb-4"
            primaryColor="#092e24"
          />
        </div>
      ) : (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* Add Content in the form of an video in arabic*/}
            أضف محتوى على شكل صورة
            <span className="text-red-600">*</span>
          </p>
          <Upload
            endpoint="video"
            onUpload={onUploadHandler}
            onChange={onVideoChange}
            className="w-full flex flex-col gap-4 rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
          />
          {selectedVideo ? (
            <VideoPlayer
              src={selectedVideo}
              className="object-cover max-w-full h-[200px] rounded-md mb-4"
              primaryColor="#092e24"
            />
          ) : null}
        </div>
      )}
      <div className="w-full grid gap-2">
        <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
          {/* explain what the video contains in arabic*/}
          وصف المحتوى
        </p>

        <Textarea
          placeholder="اكتب هنا..."
          className="resize-none w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        disabled={!video}
        onClick={() => {
          onFinish({
            type: ContentType.VIDEO,
            section: section._id,
            description,
            video: video!,
          });
        }}
        className=" w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
      >
        حفظ المحتوى
      </Button>
    </div>
  );
};

export default VideoContent;
