import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import Duroos from "../../../../public/lib/duroos.json";

export interface DuroosVideo {
  videoId: string;
  playlistId: string;
  title: string;
  url: string;
  thumbnail: string;
  uploadDate: string;
}

type DuroosSubcategory = {
  title: string;
  author: string;
  description: string;
  image: string;
  YTplaylistlink: string;
  videos?: DuroosVideo[];
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

const SITE_URL = "https://www.zafarulhasan.com";

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

type Params = Promise<{ subcategories: string; course: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { subcategories, course } = await params;
  console.log(subcategories, course)

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

  if (!sub) notFound();

  return {
    title: `${sub.title} ${sub.author} | Urdu Explanation by Sheikh Zafarulhasan Madani`,
    description: sub.description || `Listen and Download MP3 audios ${sub.title} by Sheikh Zafarulhasan Madani`,
    alternates: {
      canonical: `https://zafarulhasan.com/duroos/${subcategories}/${course}`,
    },
    openGraph: {
      title: `${sub.title} ${sub.author} | Urdu Explanation by Sheikh Zafarulhasan Madani`,
      description: sub.description || `Listen and Download MP3 audios ${sub.title} by Sheikh Zafarulhasan Madani`,
      url: 'https://www.zafarulhasan.com/duroos',
      siteName: 'Urdu Lectures of Sheikh Zafarulhasan Madani',
      images: [
        {
          url: 'https://www.zafarulhasan.com/favicon.png',
          width: 48,
          height: 48,
        },
        {
          url: 'https://www.zafarulhasan.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://www.zafarulhasan.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'urdu bayan'
        }
      ],
      locale: 'en_US',
      type: 'website',
    }
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

  const videos = sub.videos ?? [];

  const pageUrl = `${SITE_URL}/duroos/${encodeURIComponent(subcategories)}/${encodeURIComponent(course)}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": sub.title,
    "description":
      sub.description ||
      `Urdu explanation of ${sub.title}${sub.author ? ` by ${sub.author}` : ""}, taught by Sheikh Zafarulhasan Madani.`,
    "url": pageUrl,
    "image": absoluteUrl(sub.image),
    "inLanguage": "ur",
    "provider": {
      "@type": "Person",
      "name": "Sheikh Zafarulhasan Madani",
    },
    "about": category,
  };

  if (sub.author) {
    schema["author"] = {
      "@type": "Person",
      "name": sub.author,
    };
  }

  if (videos.length > 0) {
    schema["hasPart"] = videos.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "description": video.title,
      "thumbnailUrl": video.thumbnail,
      "uploadDate": video.uploadDate,
      "contentUrl": video.url,
      "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
      "url": video.url,
    }));
  }

  if (sub.listenlink) {
    const audioObject = {
      "@type": "AudioObject",
      "name": `${sub.title} — Audio Lecture Series`,
      "description": `Audio recording of ${sub.title}${sub.author ? ` by ${sub.author}` : ""}, in Urdu.`,
      "contentUrl": sub.listenlink,
      "inLanguage": "ur",
    };

    schema["associatedMedia"] = schema["hasPart"]
      ? [...(schema["hasPart"] as unknown[]), audioObject]
      : [audioObject];
  }

  if (sub.drivelink) {
    schema["learningResourceType"] = "Audio/Video Lecture Series";
    schema["material"] = {
      "@type": "DataDownload",
      "name": `${sub.title} — Downloadable Materials`,
      "contentUrl": sub.drivelink,
    };
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] py-6 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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

        {videos.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">🎬 Lessons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {videos.map((video) => (
                <Link
                  key={video.videoId}
                  href={video.url}
                  target="_blank"
                  className="flex gap-3 border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
                >
                  {video.thumbnail && (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-auto object-cover flex-shrink-0"
                    />
                  )}
                  <span className="text-sm text-gray-700 py-2 pr-2 leading-snug self-center">
                    {video.title} <br /><span className="text-sm text-red-500">Upload Date: <span className="text-sm font-bold font-poppins text-gray-700 py-2 pr-2 leading-snug self-center">
                      {video.uploadDate}</span>
                    </span>

                  </span>


                </Link>
              ))}
            </div>
          </div>
        )}

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