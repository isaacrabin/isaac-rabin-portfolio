import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/isaac-rabin-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/isaac-rabin-portfolio/' : '',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
