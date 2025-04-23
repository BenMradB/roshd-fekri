/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import InfoBar from "./InfoBar";
import Header from "./Header";
import Image from "next/image";
import { Button } from "./ui/button";
import { useIslamicTimes } from "@/hooks/useIslamicTimes";
const staticImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpg",
  "/images/hero-4.jpg",
  "/images/prayer.jpg",
  "/images/hero-img-back-1.jpg",
];

interface Props {
  images?: string[];
  title: string;
  subTitle: string;
  actionText: string;
}

const Hero = ({ images = [], title, subTitle, actionText }: Props) => {
  const heroImages: string[] = images.length ? images : staticImages;
  const { islamicTimings } = useIslamicTimes();
  return (
    <section className="w-full h-full bg-[url(/images/hero-img-back-1.jpg)] bg-no-repeat bg-cover relative ">
      <div className="h-full w-full container flex flex-col gap-10 text-white !py-12 !z-10">
        <InfoBar islamicTimings={islamicTimings} />
        <Header />
        <div className="h-full w-full flex items-center justify-between gap-4">
          <div className="h-full flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-9xl font-extrabold">{title}</h1>
              <p
                className="text-lg font-semibold"
                style={{
                  lineHeight: "1.7",
                }}
              >
                {subTitle}
              </p>
            </div>
            <Button className="w-1/2 !py-8 secondary-bg font-bold text-lg text-black rounded-full cursor-pointer">
              {actionText}{" "}
            </Button>
          </div>
          <Image
            src={"/images/hero-3.png"}
            alt="hero"
            width={120}
            height={120}
            className="w-96 h-96 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
