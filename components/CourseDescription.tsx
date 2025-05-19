// components/CourseDescription.tsx
import React from 'react';

interface Course {
  title: string;
  description?: string;
  image: string;
  YTplaylistlink?: string;
  introYTlink?: string;
  drivelink?: string;
  listenlink?: string;
}

interface Props {
  course: Course;
}

export default function CourseDescription({ course }: Props) {
  return (
    <section className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
      {/* Title & Image */}
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={course.image}
          alt={course.title}
          className="w-full max-w-sm rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-primarytext mb-4">
            {course.title}
          </h1>
          {course.description && (
            <p className="text-secondarytext mb-4">{course.description}</p>
          )}

          {/* Links Section */}
          <div className="space-y-2">
            {course.YTplaylistlink && (
              <a
                href={course.YTplaylistlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-button.primary text-white rounded-md hover:bg-button.hover"
              >
                🎥 Watch Playlist on YouTube
              </a>
            )}

            {course.drivelink && (
              <a
                href={course.drivelink}
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
      {course.listenlink && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-dovegray mb-2">🎧 Listen to Audio Lectures</h2>
          <div className="aspect-video w-full">
            <iframe
              src={course.listenlink}
              className="w-full h-[550px] rounded-md"
              allow="autoplay"
              loading="lazy"
              title="Audio Playlist"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
