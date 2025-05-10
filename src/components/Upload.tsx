"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

interface Props {
  onUpload: (url?: string) => void;
  onChange: (file: File) => void;
  endpoint: keyof typeof ourFileRouter;
  className?: string;
}

function FileUpload({ endpoint, onUpload, onChange, className }: Props) {
  return (
    <UploadDropzone<keyof typeof ourFileRouter>
      config={{ cn: twMerge }}
      className={cn("", className)}
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onUpload(res[0]?.ufsUrl);
      }}
      onChange={(e) => onChange(e[0])}
      onUploadError={(error: Error) => window.alert(`ERROR! ${error.message}`)}
      appearance={{
        button:
          "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-none w-1/2 mx-auto bg-[#092e24] bg-none after:bg-orange-400",
        container: "text-[#092e24]",
        allowedContent:
          "flex h-8 flex-col items-center justify-center px-2 text-white",
      }}
    />
  );
}

export default FileUpload;
