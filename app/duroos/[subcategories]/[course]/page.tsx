import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import Duroos from "../../../../public/lib/durros-final.json";

type Status = "completed" | "ongoing" | "upcoming";
type RawItem = Record<string, any>;

export interface DuroosVideo {
  videoId: string;
  playlistId?: string;
  title: string;
  url: string;
  thumbnail: string;
  uploadDate?: string;
}

interface Course {
  slug: string;
  title: string;
  author: string;
  description: string;
  image: string;
  arabic: string;
  number?: number;
  juz?: number;
  status?: Status;
  YTplaylistlink: string;
  drivelink: string;
  listenlink: string;
  videos: DuroosVideo[];
}

type DuroosCategory = {
  category: string;
  description: string;
  image: string;
  subcategories: RawItem[];
};

/* ---------- Helpers ---------- */
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

const SITE_URL = "https://www.zafarulhasan.com";

function absoluteUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const VALID_STATUS: Status[] = ["completed", "ongoing", "upcoming"];

const STATUS_LABEL: Record<Status, { label: string; cls: string }> = {
  completed: { label: "Completed", cls: "bg-sky-50 text-sky-700 border-sky-200" },
  ongoing: { label: "Ongoing", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  upcoming: { label: "Coming Soon", cls: "bg-amber-50 text-amber-700 border-amber-200" },
};

/** Maps any raw item shape to the Course shape. Edit only this if the JSON changes. */
function normalizeVideo(raw: RawItem): DuroosVideo {
  const videoId = String(raw.videoId ?? raw.id ?? "");
  return {
    videoId,
    playlistId: raw.playlistId,
    title: String(raw.title ?? raw.name ?? ""),
    url: String(
      raw.url ?? (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "")
    ),
    thumbnail: String(
      raw.thumbnail ?? (videoId ? `https://i.ytimg.com/vi/${videoId}/sddefault.jpg` : "")
    ),
    uploadDate: raw.uploadDate ?? raw.date,
  };
}

function normalizeCourse(raw: RawItem): Course {
  const title = String(raw.title ?? raw.name ?? raw.englishName ?? "");
  const rawStatus = String(raw.status ?? "").toLowerCase();
  const videosRaw = raw.videos ?? raw.lectures ?? raw.episodes ?? raw.items ?? [];
  const num = Number(raw.number ?? raw.id ?? raw.surahNumber);
  const juz = Number(raw.juz ?? raw.para ?? raw.parah);

  return {
    slug: String(raw.slug ?? slugify(title)),
    title,
    author: String(raw.author ?? ""),
    description: String(raw.description ?? ""),
    image: String(raw.image ?? ""),
    arabic: String(raw.arabic ?? raw.arabicName ?? raw.arabic_title ?? ""),
    number: Number.isFinite(num) && num > 0 ? num : undefined,
    juz: Number.isFinite(juz) && juz > 0 ? juz : undefined,
    status: VALID_STATUS.includes(rawStatus as Status) ? (rawStatus as Status) : undefined,
    YTplaylistlink: String(raw.YTplaylistlink ?? raw.playlist ?? raw.playlistUrl ?? ""),
    drivelink: String(raw.drivelink ?? ""),
    listenlink: String(raw.listenlink ?? ""),
    videos: Array.isArray(videosRaw) ? videosRaw.map(normalizeVideo) : [],
  };
}

/** Finds category + course. Matches the explicit slug first, then the slugified title. */
function findCourse(subcategories: string, course: string) {
  const catSlug = decodeURIComponent(subcategories);
  const courseSlug = decodeURIComponent(course);

  const category = (Duroos as unknown as DuroosCategory[]).find(
    (cat) => slugify(cat.category) === catSlug
  );
  if (!category) return { category: undefined, sub: undefined };

  const courses = category.subcategories.map(normalizeCourse);
  const sub =
    courses.find((c) => c.slug === courseSlug) ??
    courses.find((c) => slugify(c.title) === courseSlug);

  return { category, sub };
}

type Params = Promise<{ subcategories: string; course: string }>;

/* ---------- Metadata ---------- */
export async function generateMetadata({ params }: { params: Params }) {
  const { subcategories, course } = await params;
  const { sub } = findCourse(subcategories, course);

  if (!sub) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  const title = `${sub.title} ${sub.author} | Urdu Explanation by Sheikh Zafarulhasan Madani`.replace(
    /\s+\|/,
    " |"
  );
  const description =
    sub.description ||
    `Listen and Download MP3 audios ${sub.title} by Sheikh Zafarulhasan Madani`;
  const canonical = `${SITE_URL}/duroos/${subcategories}/${course}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Urdu Lectures of Sheikh Zafarulhasan Madani",
      images: [
        { url: `${SITE_URL}/favicon.png`, width: 48, height: 48 },
        { url: `${SITE_URL}/icon-192x192.png`, width: 192, height: 192 },
        {
          url: `${SITE_URL}/icons/icon-512x512.png`,
          width: 512,
          height: 512,
          alt: "urdu bayan",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

/* ---------- Page ---------- */
export default async function CoursePage({ params }: { params: Params }) {
  const { subcategories, course } = await params;
  const { category, sub } = findCourse(subcategories, course);

  if (!category || !sub) notFound();

  const videos = sub.videos;
  const pageUrl = `${SITE_URL}/duroos/${encodeURIComponent(subcategories)}/${encodeURIComponent(course)}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: sub.title,
    description:
      sub.description ||
      `Urdu explanation of ${sub.title}${sub.author ? ` by ${sub.author}` : ""}, taught by Sheikh Zafarulhasan Madani.`,
    url: pageUrl,
    inLanguage: "ur",
    provider: { "@type": "Person", name: "Sheikh Zafarulhasan Madani" },
    about: category.category,
  };

  if (sub.image) schema["image"] = absoluteUrl(sub.image);

  if (sub.author) {
    schema["author"] = { "@type": "Person", name: sub.author };
  }

  if (videos.length > 0) {
    schema["hasPart"] = videos.map((video, index) => ({
      "@type": "VideoObject",
      position: index + 1,
      name: video.title,
      description: video.title,
      thumbnailUrl: video.thumbnail,
      ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
      contentUrl: video.url,
      embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
      url: video.url,
    }));
  }

  if (sub.listenlink) {
    const audioObject = {
      "@type": "AudioObject",
      name: `${sub.title} — Audio Lecture Series`,
      description: `Audio recording of ${sub.title}${sub.author ? ` by ${sub.author}` : ""}, in Urdu.`,
      contentUrl: sub.listenlink,
      inLanguage: "ur",
    };

    schema["associatedMedia"] = schema["hasPart"]
      ? [...(schema["hasPart"] as unknown[]), audioObject]
      : [audioObject];
  }

  if (sub.drivelink) {
    schema["learningResourceType"] = "Audio/Video Lecture Series";
    schema["material"] = {
      "@type": "DataDownload",
      name: `${sub.title} — Downloadable Materials`,
      contentUrl: sub.drivelink,
    };
  }

  const statusMeta = sub.status ? STATUS_LABEL[sub.status] : undefined;

  return (
    <main className="min-h-screen bg-[#f9fafb] py-6 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="max-w-4xl mx-auto bg-white p-6 xs:p-3 xxs:p-3 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex flex-col items-start gap-6">
          {sub.image && category.category !== "Tafseerul Quran" && (
            <Image
              src={sub.image}
              alt={sub.title}
              width={1200}
              height={400}
              className="rounded-xl shadow-sm border"
            />
          )}

          <div className="flex-1 w-full">
            {/* Arabic name (Tafseerul Quran) */}
            {sub.arabic && (
              <p
                dir="rtl"
                className="text-4xl text-gray-800 mb-1 text-left"
                style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
              >
                {sub.arabic}
              </p>
            )}

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {sub.number ? `${sub.number}. ` : ""}
              {sub.title}
            </h1>

            {/* Badges: Juz + Status */}
            {(sub.juz || statusMeta) && (
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {sub.juz && (
                  <span className="rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    Juz {sub.juz}
                  </span>
                )}
                {statusMeta && (
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusMeta.cls}`}
                  >
                    {statusMeta.label}
                  </span>
                )}
              </div>
            )}

            {sub.author && <p className="text-gray-500 italic mb-2">{sub.author}</p>}

            {sub.description && (
              <p className="text-gray-600 mb-6 leading-relaxed">{sub.description}</p>
            )}

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Lecturer:</strong> Sheikh Zafarulhasan Madani
              </p>
              <p>
                <strong>Language:</strong> Urdu | اردو
              </p>

              <div className="flex flex-wrap gap-3">
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
        </div>

        {videos.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">🎬 Lessons</h2>
            <div className="grid grid-cols-1 gap-4">
              {videos.map((video, index) => (
                <Link
                  key={`${video.videoId}-${index}`}
                  href={video.url || "#"}
                  target="_blank"
                  className="flex gap-3 border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
                >
                  {video.thumbnail && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-auto object-cover flex-shrink-0"
                    />
                  )}
                  <span className="text-sm text-gray-700 py-2 pr-2 leading-snug self-center">
                    {video.title}
                    {video.uploadDate && (
                      <>
                        <br />
                        <span className="text-sm text-red-500">
                          Upload Date:{" "}
                          <span className="text-sm font-bold font-poppins text-gray-700">
                            {formatDate(video.uploadDate)}
                          </span>
                        </span>
                      </>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          sub.status === "upcoming" && (
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              Lessons for this surah are coming soon, in shaa Allah.
            </p>
          )
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