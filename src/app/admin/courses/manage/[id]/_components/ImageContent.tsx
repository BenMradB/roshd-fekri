"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/Upload";
import { ContentType } from "@/server/models/content.lecture.model";
import { TSection } from "@/types/types";
import Image from "next/image";
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

const ImageContent = ({ section, onFinish }: Props) => {
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>(
    undefined
  );
  const [description, setDescription] = React.useState<string>("");

  const onImageChange = (file: File) => {
    setSelectedImage(URL.createObjectURL(file));
  };

  const onUploadHandler = (url?: string) => {
    if (!url) return;
    setImage(url);
  };

  console.log("Image URL:", image);

  return (
    <div className="w-full grid gap-2">
      {image ? (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* The picture in arabic*/}
            الصورة
          </p>
          <Image
            src={image}
            alt="Image"
            width={500}
            height={500}
            className="object-cover w-full h-auto rounded mb-4"
          />
        </div>
      ) : (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* Add Content in the form of an image in arabic*/}
            أضف محتوى على شكل صورة
            <span className="text-red-600">*</span>
          </p>
          <Upload
            endpoint="image"
            onUpload={onUploadHandler}
            onChange={onImageChange}
            className="w-full flex flex-col gap-4 rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
          />
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Image"
              width={500}
              height={500}
              className="object-cover w-full h-auto mt-1"
            />
          ) : null}
        </div>
      )}
      <div className="w-full grid gap-2">
        <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
          {/* explain what the picture contains in arabic*/}
          اشرح ما تحتويه الصورة
        </p>

        <Textarea
          placeholder="اكتب هنا..."
          className="resize-none w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        disabled={!image}
        onClick={() => {
          onFinish({
            type: ContentType.IMAGE,
            section: section._id,
            description,
            image: image!,
          });
        }}
        className=" w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
      >
        حفظ المحتوى
      </Button>
    </div>
  );
};

export default ImageContent;
