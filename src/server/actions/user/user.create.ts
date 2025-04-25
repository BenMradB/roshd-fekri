import UserModel from "@/server/models/user.moel";
import { connectToDatabase } from "@/server/mongoose/connect.db";
import Response from "@/server/utils/action.response";
import { TCreateUserParams } from "@/types/action.params";
import { Error } from "mongoose";

const findUserByClerkId = async (clerkId: string) => {
  try {
    const user = await UserModel.findOne({ clerkId });
    return user;
  } catch (error) {
    console.error("Error finding user by clerkId:", error);
    throw new Error("Failed to find user");
  }
};

const createUser = async (params: TCreateUserParams) => {
  try {
    await connectToDatabase();

    const exists = await findUserByClerkId(params.clerkId);

    if (exists) {
      throw new Error("User already exists");
    }

    const user = await UserModel.create(params);

    return Response({
      status: "success",
      message: "User created successfully",
      statusCode: 201,
      data: user,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating user:", error);
    return Response({
      status: "error",
      message: error.message,
      statusCode: 500,
      data: null,
    });
  }
};

export default createUser;
