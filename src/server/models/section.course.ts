import { models, model, Schema, Types } from "mongoose";

const sectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lectures: [
      {
        type: Types.ObjectId,
        ref: "Lecture",
      },
    ],
    course: {
      type: Types.ObjectId,
      ref: "Course",
      required: true,
    },

    position: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SectionModel = models?.Section || model("Section", sectionSchema);
export default SectionModel;
