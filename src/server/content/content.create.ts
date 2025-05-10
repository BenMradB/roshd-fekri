"use server";

import { TCreateContentParams } from "@/types/action.params";
import Response, { IResponse } from "../utils/action.response";
import { TLectureContent } from "@/types/types";
import { connectToDatabase } from "../mongoose/connect.db";
import ContentModel from "../models/content.lecture.model";
import { createLecture } from "../actions/lecture/create.lecture";

export const createContent = async (
  params: TCreateContentParams
): Promise<IResponse<TLectureContent>> => {
  try {
    await connectToDatabase();

    const content = await ContentModel.create(params);

    if (!content) {
      return Response({
        status: "error",
        message: "Failed to create content",
        statusCode: 500,
      });
    }

    await createLecture({
      section: params.section,
      description: params.description,
      content: content._id,
    });

    return Response({
      status: "success",
      message: "Content created successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(content)),
    });
  } catch (error: unknown) {
    console.error("Error creating content:", error);
    return Response({
      status: "error",
      message: "Failed to create content",
      statusCode: 500,
    });
  }
};
