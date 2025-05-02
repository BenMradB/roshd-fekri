"use server";

import CommentModel from "@/server/models/comment.model";
import CourseModel from "@/server/models/course.model";
import SectionModel from "@/server/models/section.course";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TCourse } from "@/types/types";
import { isValidObjectId } from "mongoose";

export const getAllCourses = async (): Promise<IResponse<TCourse[]>> => {
  try {
    await connectToDatabase();
    await SectionModel.find();
    await CommentModel.find();
    const courses = await CourseModel.find()
      .populate("owner")
      .populate("sections")
      .populate("users")
      .populate("comments");

    if (!courses)
      return {
        status: "error",
        message: "Failed to fetch courses",
        statusCode: 500,
      };

    return Response({
      status: "success",
      message: "Courses fetched successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(courses)),
    });
  } catch (error) {
    console.error("Error creating course:", error);
    return {
      status: "error",
      message: "Failed to fetch courses",
      statusCode: 500,
    };
  }
};

export const getCourseById = async (
  id: string
): Promise<IResponse<TCourse[]>> => {
  try {
    await connectToDatabase();

    if (!isValidObjectId(id)) {
      return {
        status: "error",
        message: "Invalid course ID",
        statusCode: 400,
      };
    }

    await SectionModel.find();
    await CommentModel.find();
    const course = await CourseModel.findById(id)
      .populate("owner")
      .populate("sections")
      .populate("users")
      .populate("comments");

    if (!course)
      return {
        status: "error",
        message: "Failed to fetch course with the given ID",
        statusCode: 500,
      };

    return Response({
      status: "success",
      message: "Course fetched successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(course)),
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    return {
      status: "error",
      message: "Failed to fetch course",
      statusCode: 500,
    };
  }
};

export const getUserCourse = async (
  owner: string
): Promise<IResponse<TCourse[]>> => {
  try {
    await connectToDatabase();

    if (!isValidObjectId(owner)) {
      return {
        status: "error",
        message: "Invalid course ID",
        statusCode: 400,
      };
    }

    await SectionModel.find();
    await CommentModel.find();
    const courses = await CourseModel.find({ owner })
      .populate("owner")
      .populate("sections")
      .populate("users")
      .populate("comments");

    if (!courses)
      return {
        status: "error",
        message: "Failed to fetch courses with the given ID",
        statusCode: 500,
      };

    return Response({
      status: "success",
      message: "Courses fetched successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(courses)),
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    return {
      status: "error",
      message: "Failed to fetch course",
      statusCode: 500,
    };
  }
};
