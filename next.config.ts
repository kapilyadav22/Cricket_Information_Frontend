import type { NextConfig } from "next";

const nextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  //  eslint: {
  //   ignoreDuringBuilds: true, 
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scores.iplt20.com",
      },
      {
        protocol: "https",
        hostname: "feeds-100mb.s3-ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img1.hscicdn.com",
      },
      {
        protocol: "https",
        hostname: "www.cricbuzz.com",
      },
    ],
  },
};

export default nextConfig;
