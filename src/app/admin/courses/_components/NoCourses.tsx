"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import CreateCourse from "./CreateCourse";
import { TUser } from "@/types/types";

interface Props {
  user: TUser;
}

const NoCourses = ({ user }: Props) => {
  const [onCreatingCourse, setOnCreatingCourse] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={cn(
          "w-full h-full flex justify-center items-center flex-col gap-6",
          onCreatingCourse && "blur-md pointer-events-none"
        )}
      >
        <div className="w-full h-[400px]">
          <Image
            src="/icons/no-courses.svg"
            alt="empty courses"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/2 mx-auto flex flex-col items-center justify-center gap-4">
          <h1 className="text-center font-extralight text-xl">
            <p className="text-3xl text-primary font-extrabold mb-2">
              مرحبا بك Bilel Benmrad
            </p>
            ، لا توجد دورات متاحة بعد. يمكنك إنشاء دورة جديدة من خلال النقر على
            الزر أدناه
          </h1>{" "}
        </div>
      </div>
      <CreateCourse
        toggleState={() => setOnCreatingCourse((prev) => !prev)}
        isCreatingCourse={onCreatingCourse}
        user={user}
      />
    </div>
  );
};

export default NoCourses;
