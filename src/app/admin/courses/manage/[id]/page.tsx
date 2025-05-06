import React from "react";
import LectureContent from "./_components/LectureContent";
import { TCourse } from "@/types/types";
import { IResponse } from "@/server/utils/action.response";
import { getCourseById } from "@/server/actions/course/course.get";
import { toast } from "sonner";
import CreateSection from "./_components/CreateSection";
type Params = Promise<{ id: string }>;

const ManageCoursePage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  let course: TCourse = {} as TCourse;

  try {
    const response: IResponse<TCourse> = await getCourseById(id);
    if (response.status === "error") {
      toast.error(response.message);
      throw new Error(response.message);
    }

    course = response.data!;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching course:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="w-full h-full overflow-auto relative  p-10 flex flex-col gap-4 group/manageCourse">
      <div className="w-full h-fit flex flex-col gap-4 relative group-hover/group/manageCourse:blur-sm">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-5xl font-extrabold">
            {/* in arabic */}
            {course.name}
          </h1>
          <CreateSection className="" />
        </div>
        <p className="font-light text-md leading-6">{course.description}</p>
      </div>
      <LectureContent course={course} />
      <LectureContent course={course} />
      <LectureContent course={course} />
    </div>
  );
};

export default ManageCoursePage;
