import React from "react";
import { TCourse } from "@/types/types";
import { IResponse } from "@/server/utils/action.response";
import { getCourseById } from "@/server/actions/course/course.get";
import CreateSection from "./_components/CreateSection";
import Section from "./_components/Section";
type Params = Promise<{ id: string }>;

const ManageCoursePage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  let course: TCourse = {} as TCourse;

  try {
    const response: IResponse<TCourse> = await getCourseById(id);
    if (response.status === "error") {
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
        <div className="w-full flex items-center justify-between gap-8">
          <h1 className="text-5xl font-extrabold w-full  wrap-break-word">
            {/* in arabic */}
            {course.name}
          </h1>
          <CreateSection course={course} />
        </div>
        <p className="font-light text-md leading-6">{course.description}</p>
      </div>
      {course.sections.map((section) => (
        <Section section={section} key={section._id} />
      ))}
    </div>
  );
};

export default ManageCoursePage;
