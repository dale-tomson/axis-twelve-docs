import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/axis-twelve-docs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
