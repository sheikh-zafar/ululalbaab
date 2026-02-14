import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Course {
  title: string;
  description?: string;
  image: string;
  YTplaylistlink?: string;
  introYTlink?: string;
  drivelink?: string;
  listenlink?: string;
}

interface CourseApiResponse {
  course: Course;
  category?: string;
}

// Fetch single course details
async function getCourseData(subcategories: string, course: string): Promise<Course | null> {
  const url = `https://ululalbaab.vercel.app/api/duroos/${subcategories}/${course}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const data: CourseApiResponse = await res.json();
  return data.course || null;
}

type Params = Promise<{ subcategories: string; course: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { subcategories, course } = await params;

  try {
    const courseData = await getCourseData(subcategories, course);
    return {
      title: `${courseData?.title || "Course"} | Urdu Lecture by Sheikh Zafarulhasan Madani`,
      description: `${courseData?.description || ""}`,
    };
  } catch {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }
}

export default async function CoursePage({ params }: { params: Params }) {
  const { subcategories, course } = await params;
  let courseData: Course | null = null;

  try {
    courseData = await getCourseData(subcategories, course);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div className="p-8 text-red-600">❌ Error loading course data.</div>;
  }

  if (!courseData) {
    return <div className="p-8 text-gray-600">⚠️ Course not found.</div>;
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] py-6 px-4 sm:px-6 lg:px-8">

      <section className="max-w-4xl mx-auto bg-white p-6 xs:p-3 xxs:p-3 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <Image
            src={courseData.image}
            alt={courseData.title}
            width={1200}
            height={400}
            className="rounded-xl shadow-sm border"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{courseData.title}</h1>

            {courseData.description && (
              <p className="text-gray-600 mb-6 leading-relaxed">{courseData.description}</p>
            )}

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Lecturer:</strong> Sheikh Zafarulhasan Madani
              </p>
              <p>
                <strong>Language:</strong> Urdu | اردو
              </p>

              {courseData.YTplaylistlink && (
                <Link
                  href={courseData.YTplaylistlink}
                  target="_blank"
                  className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-md border border-blue-200 hover:bg-blue-100 transition"
                >
                  📺 Watch on YouTube
                </Link>
              )}

              {courseData.drivelink && (
                <Link
                  href={courseData.drivelink}
                  target="_blank"
                  className="inline-block bg-yellow-50 text-yellow-700 px-4 py-2 rounded-md border border-yellow-200 hover:bg-yellow-100 transition"
                >
                  📁 Download Materials
                </Link>
              )}

              {courseData.listenlink && (
                <Link
                  href={courseData.listenlink}
                  target="_blank"
                  className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-md border border-green-200 hover:bg-green-100 transition"
                >
                  🎧 Listen to Audio
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
