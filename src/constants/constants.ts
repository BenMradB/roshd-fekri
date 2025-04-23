import { TNavbarItem } from "@/types/types";

export const PrayerTimesURL = "https://api.aladhan.com/v1/timings";
export const navigationBarItems: TNavbarItem[] = [
  {
    title: "الرئيسية",
    url: "/",
    id: 1,
  },
  {
    title: "القرآن",
    url: "/quran",
    id: 2,
  },
  {
    title: "الأذكار",
    url: "/adhkar",
    id: 3,
  },
  {
    title: "التقويم",
    url: "/calendar",
    id: 4,
  },
];
