import { TNavbarItem, TSidebarItem } from "@/types/types";
import { BookCopy, UserCog, MessageCircleMore } from "lucide-react";

export const PrayerTimesURL = "https://api.aladhan.com/v1/timings";
export const navigationBarItems: TNavbarItem[] = [
  {
    title: "الرئيسية",
    url: "/",
    id: 1,
  },
  {
    title: "الدروس",
    url: "/courses",
    id: 2,
  },
  {
    title: "من نحن",
    url: "/about-us",
    id: 3,
  },
  {
    title: "اتصل بنا",
    url: "/contact-us",
    id: 4,
  },
];

export const adminSidebarItems: TSidebarItem[] = [
  {
    title: "الدروس",
    url: "/admin/courses",
    id: 1,
    icon: BookCopy,
  },
  {
    title: "المستخدمين",
    url: "/admin/users",
    id: 2,
    icon: UserCog,
  },
  {
    title: "التعليقات",
    url: "/admin/comments",
    id: 3,
    icon: MessageCircleMore,
  },
];
