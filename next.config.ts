import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["176.12.73.205", "stroimdv.cod94n.store", "127.0.0.1"],
  images: {
    remotePatterns: [new URL("https://xn--b1adlqilgi.xn--p1ai/**")],
  },
};

export default nextConfig;
