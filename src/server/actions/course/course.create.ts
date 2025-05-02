"use server";

import CourseModel from "@/server/models/course.model";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TCreateCourseParams } from "@/types/action.params";
import { TCourse } from "@/types/types";

export const createCourse = async (
  params: TCreateCourseParams
): Promise<IResponse<TCourse>> => {
  try {
    await connectToDatabase();

    const { owner, name, description, startDate, endDate } = params;

    if (!owner || !name || !description || !startDate || !endDate) {
      return {
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      };
    }

    const newCourse = await CourseModel.create(params);

    if (!newCourse) {
      return {
        status: "error",
        message: "Failed to create course",
        statusCode: 500,
      };
    }

    return Response({
      status: "success",
      message: "Course created successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(newCourse)),
    });
  } catch (error) {
    console.error("Error creating course:", error);
    return {
      status: "error",
      message: "Failed to create course",
      statusCode: 500,
    };
  }
};
