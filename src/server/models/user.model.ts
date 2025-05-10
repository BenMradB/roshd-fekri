import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
  avatar?: string;
  locked?: boolean;
  banned?: boolean;
  role?: "user" | "admin";
}

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    locked: {
      type: Boolean,
      default: false,
    },
    banned: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = models?.User || model<IUser>("User", userSchema);

export default UserModel;
