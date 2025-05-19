// /api/duroos/[subcategories]/[course]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../../duroos';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const subcategoryTitle = searchParams.get('subcategories');
  const courseTitle = searchParams.get('course');

  if (!subcategoryTitle || !courseTitle) {
    return NextResponse.json({ error: 'Subcategory and Course are required' }, { status: 400 });
  }

  for (const category of duroos) {
    const subcategory = category.subcategories.find(
      (sub) => sub.title === courseTitle
    );
    console.log(subcategory)

    if (subcategory) {
      return NextResponse.json({
        category: category.categorytitle,
        course: subcategory, // return as course
      });
    }
  }

  return NextResponse.json({ error: 'Course not found' }, { status: 404 });
}
