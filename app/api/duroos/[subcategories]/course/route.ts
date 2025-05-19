import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../../duroos';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const subcategoryTitle = searchParams.get('subcategory');

  if (!subcategoryTitle) {
    return NextResponse.json({ error: 'Subcategory is required' }, { status: 400 });
  }

  // Find the subcategory across all categories
  for (const category of duroos) {
    const subcategory = category.subcategories.find(
      (sub) => sub.title === subcategoryTitle
    );

    if (subcategory) {
      return NextResponse.json({
        category: category.categorytitle,
        subcategory,
      });
    }
  }

  return NextResponse.json({ error: 'Subcategory not found' }, { status: 404 });
}
