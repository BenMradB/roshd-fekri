import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();
  console.log("userID", userId);
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  image: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),

  pdf: f({ pdf: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),

  video: f({ video: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),

  audio: f({ audio: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
