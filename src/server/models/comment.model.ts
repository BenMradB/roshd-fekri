import { models, model, Schema, Types } from "mongoose";

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = models?.Comment || model("Comment", commentSchema);
export default CommentModel;
