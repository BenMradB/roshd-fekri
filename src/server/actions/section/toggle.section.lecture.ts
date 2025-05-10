"use server";

import SectionModel from "@/server/models/section.course";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TToggleLectureSection } from "@/types/action.params";
import { TSection } from "@/types/types";

export const addLectureToSection = async (
  params: TToggleLectureSection
): Promise<IResponse<TSection>> => {
  try {
    const { section, lecture } = params;

    if (!lecture || !section) {
      return Response({
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      });
    }

    await connectToDatabase();

    const sectionModel = await SectionModel.findByIdAndUpdate(section, {
      $push: { lectures: lecture },
    });

    return Response({
      status: "success",
      message: "Lecture added successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(sectionModel)),
    });
  } catch (error: unknown) {
    console.error("Error toggling lecture:", error);
    return Response({
      status: "error",
      message: "Failed to toggle section",
      statusCode: 500,
    });
  }
};

export const removeLectureFromSection = async (
  params: TToggleLectureSection
): Promise<IResponse<TSection>> => {
  try {
    const { section, lecture } = params;

    if (!lecture || !section) {
      return Response({
        status: "error",
        message: "Missing required fields",
        statusCode: 400,
      });
    }

    await connectToDatabase();

    const sectionModel = await SectionModel.findByIdAndUpdate(section, {
      $pull: { lectures: lecture },
    });

    return Response({
      status: "success",
      message: "Lecture removed successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(sectionModel)),
    });
  } catch (error: unknown) {
    console.error("Error toggling lecture:", error);
    return Response({
      status: "error",
      message: "Failed to toggle section",
      statusCode: 500,
    });
  }
};
