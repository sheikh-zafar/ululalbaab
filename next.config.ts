// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/duroos/tafseerul-quran/surah-al-fathiha',
        destination: '/duroos/tafseerul-quran/al-fatiha',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-baqarah',
        destination: '/duroos/tafseerul-quran/al-baqarah',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-anaam',
        destination: '/duroos/tafseerul-quran/al-fatiha',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-araf',
        destination: '/duroos/tafseerul-quran/al-araf',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-ibrahim',
        destination: '/duroos/tafseerul-quran/ibrahim',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-hijr',
        destination: '/duroos/tafseerul-quran/al-hijr',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-ahzab',
        destination: '/duroos/tafseerul-quran/al-ahzab',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-saba',
        destination: '/duroos/tafseerul-quran/saba',
        permanent: true,
      },
      {
        source: '/duroos/tafseerul-quran/surah-al-hujurat',
        destination: '/duroos/tafseerul-quran/al-hujurat',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
