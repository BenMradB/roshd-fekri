"use client";
import { TCourse } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  course: TCourse;
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="!w-[300px] h-[400px] border-1 border-[#092e24]/50 rounded-t-md  flex flex-col justify-between hover:bg-[#092e24]/5 cursor-pointer">
      <div className="w-full flex flex-col gap-y-2 p-2">
        <Image
          src={
            course.thumbnail
              ? course.thumbnail
              : "/images/default-thumbnail.jpeg"
          }
          alt={course.name}
          width={250}
          height={150}
          className="w-full h-[200px] object-cover rounded-t-md"
        />

        <h2 className="font-extrabold text-lg">{course.name}</h2>
        <p className="font-light line-clamp-2">{course.description}</p>
      </div>

      <div className="w-full h-[60px] flex items-center p-2 justify-between border-t-2 border-[#092e24]/50 ">
        footer
      </div>
    </div>
  );
};

export default CourseCard;
