"use server";

import CourseModel from "@/server/models/course.model";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TToggleSectionCourse } from "@/types/action.params";
import { TCourse } from "@/types/types";

export const addSectionToCourse = async (
  params: TToggleSectionCourse
): Promise<IResponse<TCourse>> => {
  try {
    const { course, section } = params;

    if (!course || !section) {
      return Response({
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      });
    }

    await connectToDatabase();

    const courseModel = await CourseModel.findByIdAndUpdate(course, {
      $push: { sections: section },
    });

    if (!courseModel) {
      return Response({
        status: "error",
        message: "Course not found",
        statusCode: 404,
      });
    }

    return Response({
      status: "success",
      message: "Section toggled successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(courseModel)),
    });
  } catch (error) {
    console.error("Error toggling section:", error);
    return Response({
      status: "error",
      message: "Failed to toggle section",
      statusCode: 500,
    });
  }
};

export const removeSectionFromCourse = async (
  params: TToggleSectionCourse
): Promise<IResponse<TCourse>> => {
  try {
    const { course, section } = params;

    if (!course || !section) {
      return Response({
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      });
    }

    await connectToDatabase();

    const courseModel = await CourseModel.findByIdAndUpdate(course, {
      $pull: { sections: section },
    });

    return Response({
      status: "success",
      message: "Section toggled successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(courseModel)),
    });
  } catch (error) {
    console.error("Error toggling section:", error);
    return Response({
      status: "error",
      message: "Failed to toggle section",
      statusCode: 500,
    });
  }
};
