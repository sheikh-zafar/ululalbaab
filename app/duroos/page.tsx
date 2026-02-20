import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import CrunchyCarousel from "@/components/header";
import Duroos from "../../public/lib/duroos.json";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata: Metadata = {
  title: 'فضيلة الشيخ ظفر الحسن مدني حفظه اللّه | zafarulhasan.com',
  description: 'Urdu Lectures | Listen and Download | Zafar ul hasan madani',
  metadataBase: new URL('https://zafarulhasan.com/duroos'),
  manifest: 'https://zafarulhasan.com/manifest.json',
  alternates: {
    canonical: 'https://zafarulhasan.com/duroos'
  },
  verification: {
    google: 'AkxGbeUiN14LV567z1U8sIVKZEfNYwrC20ftAaq5CcA',
    yahoo: 'yahoo',
    other: {
      me: ['audios.shkzafars@gmail.com', 'https://zafarulhasan.com/duroos']
    }
  },
  openGraph: {
    title: 'فضيلة الشيخ ظفر الحسن مدني حفظه اللّه | zafarulhasan.com',
    description: 'Urdu Lectures | Listen and Download | Zafar ul hasan madani',
    url: 'https://zafarulhasan.com/duroos',
    siteName: 'Urdu Lectures of Sheikh Zafarulhasan Madani',
    images: [
      {
        url: 'https://zafarulhasan.com/favicon.png',
        width: 48,
        height: 48,
      },
      {
        url: 'https://zafarulhasan.com/icon-192x192.png',
        width: 192,
        height: 192
      },
      {
        url: 'https://zafarulhasan.com/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'urdu bayan'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urdu Lectures',
    description: 'Zafar ul hasan madani - Listen and Download the Lectures',
    images: ['https://zafarulhasan.com/favicon.png']
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/icons/icon-96x96.png',
    apple: '/logo192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon-152x152.png'
    }
  },
  category: 'urdu lectures',
  keywords: 'urdu lectures, salafi urdu lectures,'
};

type DuroosSubcategory = {
  title: string;
  author: string;
  description: string;
  image: string;
  YTplaylistlink: string;
  introYTlink: string;
  drivelink: string;
  listenlink: string;
};

type DuroosCategory = {
  category: string;
  description: string;
  image: string;
  subcategories: DuroosSubcategory[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

export default function DuroosPage() {
  const duroos = Duroos as DuroosCategory[];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <CrunchyCarousel />
      <h1 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans mb-20">
        Course Categories | Sheikh Zafarul Hasan Madani
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 xs:gap-4 xxs:gap-4 gap-8 max-w-6xl mx-auto">
        {duroos.map((category, idx) => {
          const slug = slugify(category.category);

          return (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/duroos/${encodeURIComponent(slug)}`}>
                <Image
                  src={category.image}
                  alt={category.category}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl xs:text-base xxs:text-lg xl:text-xl xxl:text-xl font-semibold text-gray-700">
                    {category.category}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}