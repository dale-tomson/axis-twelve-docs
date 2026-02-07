import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/axis-twelve-docs',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/axis-twelve-docs',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
