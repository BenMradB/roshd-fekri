"use server";

import SectionModel from "@/server/models/section.course";
import Response, { IResponse } from "@/server/utils/action.response";
import { TSection } from "@/types/types";
import { connectToDatabase } from "@/server/mongoose/connect.db";

export const getSectionById = async (
  id: string
): Promise<IResponse<TSection>> => {
  try {
    await connectToDatabase();

    const section = await SectionModel.findById(id).populate("lectures");

    if (!section) {
      return {
        status: "error",
        message: "Failed to fetch section",
        statusCode: 500,
      };
    }

    return Response({
      status: "success",
      message: "Section fetched successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(section)),
    });
  } catch (error: unknown) {
    console.error("Error creating section:", error);
    return Response({
      status: "error",
      message: "Failed to fetch section",
      statusCode: 500,
    });
  }
};
