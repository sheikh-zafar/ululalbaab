import LectureSchedule from "@/components/LectureSchedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Lecture Schedule | Sheikh Zafar ul Hasan Madani",
  description:
    "Weekly Islamic lecture schedule by Sheikh Zafar ul Hasan Madani — online and in-person sessions across Dubai covering Seerat, Tafseer, Hadith, and more.",
  keywords: [
    "Zafar ul Hasan Madani",
    "Islamic lectures Dubai",
    "urdu bayan",
    "salafi lectures",
    "Quran Tafseer Dubai",
    "Bulugh al Maram",
  ],
  openGraph: {
    title: "Weekly Lecture Schedule | Sheikh Zafar ul Hasan Madani",
    description:
      "Attend or watch online — weekly Islamic lectures in Dubai and on YouTube.",
    url: "https://zafarulhasan.com/lecture-schedule",
    siteName: "Zafar ul Hasan Madani",
    images: [
      {
        url: "https://zafarulhasan.com/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Sheikh Zafar ul Hasan Madani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Lecture Schedule | Sheikh Zafar ul Hasan Madani",
    description:
      "Weekly Islamic lectures online and in-person across Dubai.",
    images: ["https://zafarulhasan.com/icons/icon-512x512.png"],
  },
  alternates: {
    canonical: "https://zafarulhasan.com/lecture-schedule",
  },
};

export default function HomePage() {
    return (
        <div>
            <LectureSchedule />
        </div>
    );
}
