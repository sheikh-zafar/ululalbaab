// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: "/#/links",
        destination: "/links",
        permanent: true
      },

    ];
  },
};

export default nextConfig;
