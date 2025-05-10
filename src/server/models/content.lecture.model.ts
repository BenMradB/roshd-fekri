import { models, model, Schema } from "mongoose";

export enum ContentType {
  TEXT = "text",
  IMAGE = "image",
  AUDIO = "audio",
  VIDEO = "video",
  PDF = "pdf",
}

const contentSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(ContentType),
      required: true,
    },
    text: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },
    audio: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    },
    pdf: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const ContentModel = models?.Content || model("Content", contentSchema);
export default ContentModel;
