"use client";
import { TCourse, TUser } from "@/types/types";
import React, { useState } from "react";
import CreateCourse from "./CreateCourse";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";

type Props = {
  courses: TCourse[];
  user: TUser;
};

const CoursesList = ({ courses, user }: Props) => {
  console.log("courses", courses);
  const [onCreatingCourse, setOnCreatingCourse] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="w-full flex items-center gap-4">
        <CreateCourse
          toggleState={() => setOnCreatingCourse((prev) => !prev)}
          isCreatingCourse={onCreatingCourse}
          user={user}
          btnClassName="w-fit h-fit px-4 py-2 border-2 h-[50px]"
        />
        <Input
          placeholder="ابحث عن دورة"
          className="w-full h-[50px] border-2 border-[#092e24] rounded-none outline-none py-6 text-lg focus-visible:border-[#092e24] focus-visible:ring-0 focus-visible:border-b-2"
        />
      </div>

      <div className="w-full mx-auto h-full grid grid-cols-1 md:grid-cols-3 flex-wrap gap-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
