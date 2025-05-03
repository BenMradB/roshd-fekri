import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date provided");
  }

  // Not arabic the formatted date should be like this  Example 01/01/2025
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const [month, day, year] = formattedDate.split("/");
  return `${day} / ${month} / ${year}`;
};
