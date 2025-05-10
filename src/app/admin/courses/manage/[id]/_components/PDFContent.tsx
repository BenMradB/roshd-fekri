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

const PDFContent = ({ section, onFinish }: Props) => {
  const [document, setDocument] = React.useState<string | undefined>(undefined);
  const [selectedDocument, setSelectedDocument] = React.useState<
    string | undefined
  >(undefined);
  const [description, setDescription] = React.useState<string>("");

  const onDocumentChange = (file: File) => {
    setSelectedDocument(URL.createObjectURL(file));
  };

  const onUploadHandler = (url?: string) => {
    if (!url) return;
    setDocument(url);
  };

  return (
    <div className="w-full grid gap-2">
      {document ? (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* The document pdf in arabic*/}
            ملف PDF
          </p>
          <iframe
            src={document}
            title="PDF Preview"
            width="100%"
            height="200px"
            style={{ border: "none" }}
            className="rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
          />
        </div>
      ) : (
        <div className="w-full grid gap-2">
          <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
            {/* Add Content in the form of PDF in arabic*/}
            أضف محتوى على شكل ملف PDF
            <span className="text-red-600">*</span>
          </p>
          <Upload
            endpoint="pdf"
            onUpload={onUploadHandler}
            onChange={onDocumentChange}
            className="w-full flex flex-col gap-4 rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
          />
          {selectedDocument ? (
            <iframe
              src={selectedDocument}
              title="PDF Preview"
              width="100%"
              height="200px"
              style={{ border: "none" }}
              className="rounded-none border-2 border-[#092e24] text-[#092e24] py-4 gap-y-2"
            />
          ) : null}
        </div>
      )}
      <div className="w-full grid gap-2">
        <p className="flex items-center gap-2 text-2xl font-extrabold text-[#092e24]">
          {/* explain what the document contains in arabic*/}
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
        disabled={!document}
        onClick={() => {
          onFinish({
            type: ContentType.PDF,
            section: section._id,
            description,
            pdf: document!,
          });
        }}
        className=" w-full h-[30px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2 text-white font-extrabold cursor-pointer bg-[#092e24] hover:bg-[#092e24]/95"
      >
        حفظ المحتوى
      </Button>
    </div>
  );
};

export default PDFContent;
