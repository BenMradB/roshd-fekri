"use server";

import { TCreateLectureParams } from "@/types/action.params";
import { TLecture, TSection } from "@/types/types";
import { getSectionById } from "../section/section.get";
import LectureModel from "@/server/models/lecture.model";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { addLectureToSection } from "../section/toggle.section.lecture";

export const createLecture = async (
  params: TCreateLectureParams
): Promise<IResponse<TLecture>> => {
  try {
    await connectToDatabase();
    console.log("CREATING LECTURE", params);

    const response: IResponse<TSection> = await getSectionById(params.section);

    console.log("RESPONSE ", response);

    if (response.status !== "success") {
      return Response({
        status: "error",
        message: response.message,
        statusCode: response.statusCode,
      });
    }

    const section = response.data as TSection;

    console.log("SECTION :::::: : ", section);
    const position = section.lectures.length
      ? section.lectures[section.lectures.length - 1].position + 1
      : 0;

    const lecture = await LectureModel.create({
      ...params,
      position,
      section: section._id,
    });

    if (!lecture) {
      return Response({
        status: "error",
        message: "Failed to create lecture",
        statusCode: 500,
      });
    }

    console.log("LECTURE CREATED : ", params);

    await addLectureToSection({
      section: section._id,
      lecture: lecture._id,
    });

    return Response({
      status: "success",
      message: "Lecture created successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(lecture)),
    });
  } catch (error: unknown) {
    console.error("Error creating lecture:", error);
    return Response({
      status: "error",
      message: "Failed to create lecture",
      statusCode: 500,
    });
  }
};
