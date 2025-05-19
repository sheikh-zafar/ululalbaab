import React from 'react';
import CourseDescription from '@/components/CourseDescription';

interface Params {
  params: {
    subcategories: string;
    course: string;
  };
}

async function fetchCourseData(subcategories: string, course: string) {
  const res = await fetch(
    `/api/duroos/${subcategories}/${course}`,
    { cache: 'no-store' } // or 'force-cache' if you want caching
  );

  if (!res.ok) {
    throw new Error('Failed to fetch course data');
  }
  return res.json();
}

export default async function CoursePage({ params }: Params) {
  const { subcategories, course } = params;

  let courseData;
  try {
    const data = await fetchCourseData(subcategories, course);
    console.log(data)
    courseData = data.course;
  } catch (error) {
    return <div className="p-8 text-red-600">Error loading course data.</div>;
  }

  if (!courseData) {
    return <div className="p-8 text-dovegray">Course not found.</div>;
  }

  return (
    <main className="min-h-screen bg-bgcolor p-6">
      <CourseDescription course={courseData} />
    </main>
  );
}
