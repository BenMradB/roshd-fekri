"use server";
import UserModel from "@/server/models/user.moel";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response, { IResponse } from "@/server/utils/action.response";
import { TCreateUserParams } from "@/types/action.params";
import { Error } from "mongoose";
import { getUserByClerkId } from "./user.get";
import { TUser } from "@/types/types";

const createUser = async (
  params: TCreateUserParams
): Promise<IResponse<TUser>> => {
  try {
    await connectToDatabase();

    const response: IResponse<TUser> = await getUserByClerkId(params.clerkId);

    if (response.status === "success" && response.data) {
      throw new Error("User already exists");
    }

    const user = await UserModel.create(params);

    return Response({
      status: "success",
      message: "User created successfully",
      statusCode: 201,
      data: JSON.parse(JSON.stringify(user)),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating user:", error);
    return Response({
      status: "error",
      message: error.message,
      statusCode: 500,
    });
  }
};

export default createUser;
