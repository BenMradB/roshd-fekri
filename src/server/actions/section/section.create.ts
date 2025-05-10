"use server";

import SectionModel from "@/server/models/section.course";
import Response, { IResponse } from "@/server/utils/action.response";
import { TCreateSectionCourse } from "@/types/action.params";
import { addSectionToCourse } from "../course/toggle.course.section";
import { TSection } from "@/types/types";
import { connectToDatabase } from "@/server/mongoose/connect.db";

export const createSection = async (
  params: TCreateSectionCourse
): Promise<IResponse<TSection>> => {
  try {
    await connectToDatabase();

    const { course, title, description } = params;

    if (!course || !title || !description) {
      return {
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      };
    }

    const sections = await SectionModel.find({ course });

    const position = sections.length
      ? sections[sections.length - 1].position + 1
      : 0;

    const newSection = await SectionModel.create({ ...params, position });

    if (!newSection) {
      return {
        status: "error",
        message: "Failed to create section",
        statusCode: 500,
      };
    }

    await addSectionToCourse({
      course,
      section: newSection._id,
    });

    return Response({
      status: "success",
      message: "Section created successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(newSection)),
    });
  } catch (error: unknown) {
    console.error("Error creating section:", error);
    return Response({
      status: "error",
      message: "Failed to create section",
      statusCode: 500,
    });
  }
};
