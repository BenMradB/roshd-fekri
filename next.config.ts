import type { NextConfig } from "next";

// "https://o33fe1biak.ufs.sh/f/Y6EIdYwAq5sgy4J3GuvRVJd4HwCE8YOnopkrQu0IgiZSzc12"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "utfs.io",
      "img.clerk.com",
      "images.unsplash.com",
      "aceternity.com",
      "example.com",
      "miro.medium.com",
      "encrypted-tbn0.gstatic.com",
      "assets.aceternity.com",
      "o33fe1biak.ufs.sh",
    ],
  },
};

export default nextConfig;
