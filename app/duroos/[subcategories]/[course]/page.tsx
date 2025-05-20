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

// ✅ Fetch course data from API
async function getCourseData(subcategories: string, course: string) {
  const url = `https://ululalbaab.vercel.app/api/duroos/${subcategories}/${course}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const data: CourseApiResponse = await res.json();
  return data.course || null;
}

// ✅ Types for dynamic route params
type Params = Promise<{ subcategories: string; course: string }>;

// ✅ Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { subcategories, course } = await params;

  try {
    const courseData = await getCourseData(subcategories, course);

    return {
      title: `${courseData.title} | Ulul Albaab Duroos`,
      description: courseData.description || "",
      openGraph: {
        title: courseData.title,
        description: courseData.description || "",
        images: courseData.image ? [courseData.image] : [],
      },
    };
  } catch (error) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }
}

// ✅ Course Page Component
export default async function CoursePage({
  params,
}: {
  params: Params;
}) {
  const { subcategories, course } = await params;

  let courseData: Course | null = null;
  try {
    courseData = await getCourseData(subcategories, course);
  } catch (error) {
    console.error("Error fetching course data:", error);
    return (
      <div className="p-8 text-red-600">
        ❌ Error loading course data.
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="p-8 text-dovegray">
        ⚠️ Course not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bgcolor p-6">
      <section className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={courseData.image}
            alt={courseData.title}
            className="w-full max-w-sm rounded-xl shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-primarytext mb-4">{courseData.title}</h1>
            {courseData.description && (
              <p className="text-secondarytext mb-4">{courseData.description}</p>
            )}
            <div className="space-y-2">
              {courseData.YTplaylistlink && (
                <a
                  href={courseData.YTplaylistlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-button.primary text-white rounded-md hover:bg-button.hover"
                >
                  🎥 Watch Playlist on YouTube
                </a>
              )}
              {courseData.drivelink && (
                <a
                  href={courseData.drivelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-button.secondary text-white rounded-md hover:bg-button.hover2"
                >
                  📁 Download Course Materials (Drive)
                </a>
              )}
            </div>
          </div>
        </div>

        {courseData.listenlink && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-dovegray mb-2">
              🎧 Listen to Audio Lectures
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src={courseData.listenlink}
                className="w-full h-[550px] rounded-md"
                allow="autoplay"
                loading="lazy"
                title="Audio Playlist"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
