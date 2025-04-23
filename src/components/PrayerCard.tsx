import { TPrayer } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  prayer: TPrayer;
};

const PrayerCard = ({ prayer }: Props) => {
  return (
    <div
      className="group h-[300px] w-[250px] rounded-b-full border-2 border-t-0 border-[#007d3a] flex flex-col justify-around items-center gap-4 !py-4 prayer-card
"
    >
      <Image
        src={prayer.icon}
        alt={prayer.prayer}
        width={100}
        height={100}
        className="w-14 h-14"
      />

      <h2 className="text-5xl font-extrabold  group-hover:text-white transition-all duration-300 ease-in-out">
        {prayer.prayer}
      </h2>

      <p className="font-stretch-normal text-3xl text-roshd-green group-hover:text-white transition-all duration-300 ease-in-out">
        {prayer.time}
      </p>

      <div className="w-6 h-6 rounded-full border-5 border-[#fbc50b]"></div>
    </div>
  );
};

export default PrayerCard;
