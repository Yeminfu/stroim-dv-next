import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://xn--b1adlqilgi.xn--p1ai/**")],
  },
};

export default nextConfig;
