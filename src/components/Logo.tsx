import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/icons/logo.svg"}
      alt="logo"
      width={112}
      height={112}
      className="w-32 h-3w-32 object-cover"
    />
  );
};

export default Logo;
