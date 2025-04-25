"use server";
import UserModel from "@/server/models/user.moel";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TUser } from "@/types/types";
import { isValidObjectId } from "mongoose";

export const getUserByClerkId = async (
  clerkId: string
): Promise<IResponse<TUser>> => {
  try {
    console.log("clerkId", clerkId);
    await connectToDatabase();
    const user = await UserModel.findOne({ clerkId });

    if (!user) {
      return Response({
        status: "error",
        message: "User not found",
        statusCode: 404,
      });
    }

    return Response({
      status: "success",
      message: "User found successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(user)),
    });
  } catch (error) {
    console.error("Error finding user by clerkId:", error);
    return Response({
      status: "error",
      message: "Failed to find user",
      statusCode: 500,
    });
  }
};

export const getUserById = async (id: string): Promise<IResponse<TUser>> => {
  try {
    await connectToDatabase();
    if (!isValidObjectId(id))
      return Response({
        status: "error",
        message: "Invalid user ID",
        statusCode: 400,
      });

    const user = await UserModel.findById(id);

    if (!user) {
      return Response({
        status: "error",
        message: "User not found",
        statusCode: 404,
      });
    }

    return Response({
      status: "success",
      message: "User found successfully",
      statusCode: 200,
      data: JSON.parse(JSON.stringify(user)),
    });
  } catch (error) {
    console.error("Error finding user by ID:", error);
    return Response({
      status: "error",
      message: "Failed to find user",
      statusCode: 500,
    });
  }
};
