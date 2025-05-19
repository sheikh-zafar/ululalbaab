// components/CourseDescription.tsx
import React from 'react';

interface CourseProps {
  title: string;
  description: string;
  image: string;
  YTplaylistlink?: string;
  introYTlink?: string;
  drivelink?: string;
  listenlink?: string;
}

const CourseDescription: React.FC<{ course: CourseProps }> = ({ course }) => {
  const {
    title,
    description,
    image,
    YTplaylistlink,
    drivelink,
    listenlink,
  } = course;

  return (
    <div className="bg-bgcolor text-dovegray max-w-5xl mx-auto p-6 rounded-xl shadow-md mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={image} alt={title} className="w-full md:w-80 rounded-lg shadow" />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-primarytext mb-2">{title}</h1>
          {description ? (
            <p className="text-secondarytext mb-4">{description}</p>
          ) : (
            <p className="text-dustygray italic mb-4">No description provided.</p>
          )}

          <div className="flex flex-wrap gap-4 mt-6">
            {YTplaylistlink && (
              <a
                href={YTplaylistlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-button-primary hover:bg-button-hover text-white px-4 py-2 rounded-md shadow"
              >
                 Watch on YouTube
              </a>
            )}

            {drivelink && (
              <a
                href={drivelink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-button-secondary hover:bg-button-hover2 text-white px-4 py-2 rounded-md shadow"
              >
                 View in Drive
              </a>
            )}

            {listenlink && (
              <a
                href={listenlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-button-green hover:bg-button-greenhover text-black px-4 py-2 rounded-md shadow"
              >
                 Listen
              </a>
            )}
          </div>

          {listenlink && (
            <div className="mt-8">
              <iframe
                src={listenlink}
                width="100%"
                height="550"
                frameBorder="0"
                allow="autoplay"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
