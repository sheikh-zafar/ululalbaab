import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import Duroos from "../../../../public/lib/duroos.json";

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

type Params = Promise<{ subcategories: string; course: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { subcategories, course } = await params;

  const category = (Duroos as DuroosCategory[]).find(
    (cat) => slugify(cat.category) === decodeURIComponent(subcategories)
  );

  const sub = category?.subcategories.find(
    (s) => slugify(s.title) === decodeURIComponent(course)
  );

  if (!sub) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${sub.title} | Urdu Lecture by Sheikh Zafarulhasan Madani`,
    description: sub.description || `Listen and Download MP3 audios ${sub.title} by Sheikh Zafarulhasan Madani`,
  };
}

export default async function CoursePage({ params }: { params: Params }) {
  const { subcategories, course } = await params;

  const category = (Duroos as DuroosCategory[]).find(
    (cat) => slugify(cat.category) === decodeURIComponent(subcategories)
  );

  if (!category) notFound();

  const sub = category.subcategories.find(
    (s) => slugify(s.title) === decodeURIComponent(course)
  );

  if (!sub) notFound();

  return (
    <main className="min-h-screen bg-[#f9fafb] py-6 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto bg-white p-6 xs:p-3 xxs:p-3 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <Image
            src={sub.image}
            alt={sub.title}
            width={1200}
            height={400}
            className="rounded-xl shadow-sm border"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{sub.title}</h1>

            {sub.author && (
              <p className="text-gray-500 italic mb-2">{sub.author}</p>
            )}

            {sub.description && (
              <p className="text-gray-600 mb-6 leading-relaxed">{sub.description}</p>
            )}

            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Lecturer:</strong> Sheikh Zafarulhasan Madani</p>
              <p><strong>Language:</strong> Urdu | اردو</p>

              {sub.YTplaylistlink && (
                <Link
                  href={sub.YTplaylistlink}
                  target="_blank"
                  className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-md border border-blue-200 hover:bg-blue-100 transition"
                >
                  📺 Watch on YouTube
                </Link>
              )}

              {sub.drivelink && (
                <Link
                  href={sub.drivelink}
                  target="_blank"
                  className="inline-block bg-yellow-50 text-yellow-700 px-4 py-2 rounded-md border border-yellow-200 hover:bg-yellow-100 transition"
                >
                  📁 Download Materials
                </Link>
              )}

              {sub.listenlink && (
                <Link
                  href={sub.listenlink}
                  target="_blank"
                  className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-md border border-green-200 hover:bg-green-100 transition"
                >
                  🎧 Listen to Audio
                </Link>
              )}
            </div>
          </div>
        </div>

        {sub.listenlink && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">🎙️ Audio Player</h2>
            <iframe
              src={sub.listenlink}
              width="100%"
              height="550"
              className="rounded-xl border"
              allowFullScreen
            />
          </div>
        )}
      </section>
    </main>
  );
}