import { models, model, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    sections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
        default: [],
      },
    ],

    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CourseModel = models?.Course || model("Course", courseSchema);
export default CourseModel;
