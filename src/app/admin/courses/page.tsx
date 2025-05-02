import React from "react";
import NoCourses from "./_components/NoCourses";
import { TCourse, TUser } from "@/types/types";
import { getAllCourses } from "@/server/actions/course/course.get";
import { IResponse } from "@/server/utils/action.response";
import CoursesList from "./_components/CoursesList";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/server/actions/user/user.get";

const AdminListCoursesPage = async () => {
  const { userId } = await auth();

  if (!userId) return redirect("/sign-in");

  let courses: TCourse[] = [];
  let user: TUser = {} as TUser;

  try {
    const response: IResponse<TCourse[] | null> = await getAllCourses();

    if (response.status === "success") {
      courses = response.data!;
    } else {
      console.error("Error fetching courses:", response.message);
    }
  } catch (error: unknown) {
    console.error("Error fetching courses:", error);
  }

  try {
    const response: IResponse<TUser | null> = await getUserByClerkId(userId);

    if (response.status === "success") {
      user = response.data!;
    } else {
      console.error("Error fetching user:", response.message);
    }
  } catch (error: unknown) {
    console.error("Error fetching courses:", error);
  }

  if (!user) return redirect("/sign-in");
  return (
    <div className="w-full h-full relative overflow-auto">
      {courses.length ? (
        <CoursesList courses={courses} user={user!} />
      ) : (
        <NoCourses user={user!} />
      )}
    </div>
  );
};

export default AdminListCoursesPage;
