import { ContentType } from "@/server/models/content.lecture.model";
import { LucideIcon } from "lucide-react";

export type TNavbarItem = {
  title: string;
  url: string;
  id: number;
};

export type TSidebarItem = {
  title: string;
  url: string;
  id: number;
  icon: LucideIcon;
};

export type TPrayer = {
  icon: string;
  prayer: string;
  time: string;
};

export type TUser = {
  _id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
  avatar?: string;
  locked: boolean;
  banned: boolean;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
};

export type TComment = {
  _id: string;
  text: string;
  user: TUser;
  course: TCourse;
  createdAt: Date;
  updatedAt: Date;
};

export type TSection = {
  _id: string;
  title: string;
  description: string;
  lectures: TLecture[];
  course: TCourse;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TLectureContent = {
  _id: string;
  type: ContentType;
  text?: string;
  image?: string;
  audio?: string;
  video?: string;
  pdf?: string;
  lecture: TLecture;
  createdAt: Date;
  updatedAt: Date;
};

export type TLecture = {
  _id: string;
  content: TLectureContent;
  position: number;
  section: TSection;
  createdAt: Date;
  updatedAt: Date;
};

export type TCourse = {
  _id: string;
  owner: TUser;
  name: string;
  description: string;
  thumbnail: string;
  startDate: Date;
  endDate: Date;
  price: number;
  sections: TSection[];
  users: TUser[];
  comments: TComment[];
  createdAt: Date;
  updatedAt: Date;
};

export type TLectureType = "text" | "image" | "video" | "audio" | "pdf" | null;
