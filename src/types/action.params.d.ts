import { ContentType } from "@/server/models/content.lecture.model";

export type TCreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
  avatar?: string;
  locked?: boolean;
  banned?: boolean;
  role?: string;
};

export type TCreateCourseParams = {
  owner: string;
  name: string;
  description: string;
  thumbnail?: string;
  startDate: Date;
  endDate: Date;
};

export type TCreateSectionCourse = {
  course: string;
  title: string;
  description?: string;
};

export type TToggleSectionCourse = {
  course: string;
  section: string;
};

export type TToggleLectureSection = {
  section: string;
  lecture: string;
};

export type TCreateContentParams = {
  type: ContentType;
  [key: string]: string;
  section: string;
  description?: string;
};

export type TCreateLectureParams = {
  content: string;
  section: string;
  description?: string;
};
