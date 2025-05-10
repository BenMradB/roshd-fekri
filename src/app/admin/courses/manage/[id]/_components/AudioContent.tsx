"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/Upload";
import { ContentType } from "@/server/models/content.lecture.model";
import { TSection } from "@/types/types";
import React from "react";

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

const AudiContent = ({ section, onFinish }: Props) => {
  const [audio, setAudio] = React.useState<string | undefined>(undefined);
  const [selectedAudio, setSelectedAudio] = React.useState<string | undefined>(
    undefined
  );
  const [description, setDescription] = React.useState<string>("");

  const onAudioChange = (file: File) => {
    setSelectedAudio(URL.createObjectURL(file));
  };

  const onUploadHandler = (url?: string) => {
    if (!url) return;
    setAudio(url);
  };

  return (
    <div className="w-full grid gap-2">
      {audio ? (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* The audio in arabic*/}
            الصوت
          </p>
          <audio
            controls
            color="#092e24"
            className="w-full border border-[#092e24] rounded-full"
          >
            <source src={audio} type="audio/mpeg" />
            {/* Your browser does not support the audio element. */}
            <p className="text-[#092e24] font-extrabold">
              الصوت غير مدعوم في المتصفح الخاص بك
            </p>
          </audio>
        </div>
      ) : (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* Add Content in the form of an audio in arabic*/}
            أضف محتوى على شكل صوت
            <span className="text-red-600">*</span>
          </p>
          <Upload
            endpoint="audio"
            onUpload={onUploadHandler}
            onChange={onAudioChange}
            className="w-full flex flex-col gap-4 rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
          />
          {selectedAudio ? (
            <audio
              controls
              color="#092e24"
              className="w-full border border-[#092e24] rounded-full"
            >
              <source
                src={selectedAudio}
                type="audio/mpeg"
                color="#092e24"
                className="rounded-none"
              />
              Your browser does not support the audio element.
            </audio>
          ) : null}
        </div>
      )}
      <div className="w-full grid gap-2">
        <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
          {/* explain what the audio contains in arabic*/}
          اشرح ما تحتويه الصوت
        </p>

        <Textarea
          placeholder="اكتب هنا..."
          className="resize-none w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        disabled={!audio}
        onClick={() => {
          onFinish({
            type: ContentType.AUDIO,
            section: section._id,
            description,
            audio: audio!,
          });
        }}
        className=" w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
      >
        حفظ المحتوى
      </Button>
    </div>
  );
};

export default AudiContent;
