import React from 'react';

interface Params {
  params: {
    subcategories: string;
    course: string;
  };
}

interface Course {
  title: string;
  description?: string;
  image: string;
  YTplaylistlink?: string;
  introYTlink?: string;
  drivelink?: string;
  listenlink?: string;
}

export default async function CoursePage({ params }: Params) {
  const { subcategories, course } = params;
  console.log("params", subcategories,course)

  let courseData: Course | null = null;

  try {
    const res = await fetch(
      `/api/duroos/${subcategories}/${course}`,
    );
    console.log("res",res)

    if (!res.ok) {
      throw new Error('Failed to fetch course data');
    }

    const data = await res.json();
    courseData = data.course;
  } catch (error) {
    console.error("Error fetching course data:", error);
    return <div className="p-8 text-red-600">❌ Error loading course data.</div>;
  }

  if (!courseData) {
    return <div className="p-8 text-dovegray">⚠️ Course not found.</div>;
  }

  return (
    <main className="min-h-screen bg-bgcolor p-6">
      <section className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {/* Title & Image */}
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={courseData.image}
            alt={courseData.title}
            className="w-full max-w-sm rounded-xl shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-primarytext mb-4">
              {courseData.title}
            </h1>

            {courseData.description && (
              <p className="text-secondarytext mb-4">{courseData.description}</p>
            )}

            {/* Links Section */}
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

        {/* Audio Player Embed */}
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
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
