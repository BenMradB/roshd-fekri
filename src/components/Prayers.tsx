"use client";
import { useIslamicTimes } from "@/hooks/useIslamicTimes";
import React from "react";
import PrayerCard from "./PrayerCard";
import { TPrayer } from "@/types/types";

const Prayers = () => {
  const { islamicTimings } = useIslamicTimes();
  const { Fajr, Dhuhr, Asr, Maghrib, Isha } = islamicTimings;
  // the prayer attribute should be in arabic

  const prayers: TPrayer[] = [
    {
      icon: "/icons/sunrise.svg",
      prayer: "الفجر",
      time: Fajr,
    },
    {
      icon: "/icons/dhohr.svg",
      prayer: "الظهر",
      time: Dhuhr,
    },
    {
      icon: "/icons/asr.svg",
      prayer: "العصر",
      time: Asr,
    },
    {
      icon: "/icons/sunset.svg",
      prayer: "المغرب",
      time: Maghrib,
    },
    {
      icon: "/icons/isha.svg",
      prayer: "العشاء",
      time: Isha,
    },
  ];
  console.log("Islamic Timings:", islamicTimings);
  return (
    <div className="container w-screen flex justify-between !mb-4">
      {prayers.map((prayer, key) => (
        <PrayerCard key={key} prayer={prayer} />
      ))}
    </div>
  );
};

export default Prayers;
