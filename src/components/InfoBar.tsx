import Image from "next/image";
import Link from "next/link";
import React from "react";

const Info = ({
  icon,
  text,
  time,
}: {
  icon: string;
  text: string;
  time?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={icon}
        alt="icon"
        width={24}
        height={24}
        className="w-6 h-6 object-cover"
      />
      <div className="flex items-end gap-1">
        <p className="text-white text-md font-normal">{text}</p>
        {time && <p className="text-white text-sm font-bold"> : {time}</p>}
      </div>
    </div>
  );
};

type Props = {
  islamicTimings: {
    [key: string]: string;
  };
};

const InfoBar = ({ islamicTimings }: Props) => {
  return (
    <div className="w-full h-fit flex justify-between items-center !px-4">
      <div className="w-fit flex justify-between gap-10 items-center">
        <Info
          icon={"/icons/sunrise.svg"}
          text={"الشروق"}
          time={islamicTimings!["Sunrise"]}
        />

        <Info
          icon={"/icons/sunset.svg"}
          text={"الغروب"}
          time={islamicTimings!["Sunset"]}
        />
      </div>

      <div className="w-fit flex justify-between gap-8">
        <Link href={"/"}>
          <Image
            src={"/icons/facebook.svg"}
            alt="facebook"
            width={24}
            height={24}
            className="w-6 h-6 object-cover "
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/icons/twitter.svg"}
            alt="twitter"
            width={24}
            height={24}
            className="w-6 h-6 object-cover "
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/icons/linkedin.svg"}
            alt="linkedin"
            width={24}
            height={24}
            className="w-6 h-6 object-cover "
          />
        </Link>
      </div>

      {/* tunisia */}
      <Info icon={"/icons/location.svg"} text={"الموقع"} time={"تونس"} />
    </div>
  );
};

export default InfoBar;
