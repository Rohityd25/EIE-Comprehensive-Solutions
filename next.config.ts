import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Allow images from external sources if needed
  images: {
    domains: [],
  },
};

export default nextConfig;
