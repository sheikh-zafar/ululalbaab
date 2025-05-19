import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../../duroos';

// Slugify utility to match slug from URL with title in data
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove special chars like apostrophes
    .replace(/\s+/g, '-')     // replace spaces with -
    .trim();
}

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const segments = pathname.split('/');

  const subcategorySlug = segments[3];  // 'tawheed' or similar
  const courseSlug = segments[4];       // 'raf-ul-malam'

  if (!subcategorySlug || !courseSlug) {
    return NextResponse.json({ error: 'Subcategory and Course are required' }, { status: 400 });
  }

  for (const category of duroos) {
    const match = category.subcategories.find(
      (sub) => slugify(sub.title) === courseSlug
    );

    console.log('Matching subcategory:', match);

    if (match) {
      return NextResponse.json({
        category: category.categorytitle,
        course: match,
      });
    }
  }

  return NextResponse.json({ error: 'Course not found' }, { status: 404 });
}
