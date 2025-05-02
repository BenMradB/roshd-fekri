import { models, model, Schema, Types } from "mongoose";

const lectureSection = new Schema(
  {
    content: {
      type: String,
      ref: "Content",
    },

    position: {
      type: Number,
      required: true,
    },

    section: {
      type: Types.ObjectId,
      ref: "Section",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LectureModel = models?.Lecture || model("Lecture", lectureSection);
export default LectureModel;
