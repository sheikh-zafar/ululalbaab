/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../duroos';

export async function GET(
  req: NextRequest,
  context: { params: { subcategories: string } }
) {
  const { subcategories } = context.params;

  const formatted = subcategories.replace(/-/g, ' ').toLowerCase();

  const category = duroos.find(
    (cat) => cat.categorytitle.toLowerCase().trim() === formatted.trim()
  );

  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json({
    category: category.categorytitle,
    description: category.categorydescrption,
    image: category.categoryimage,
    subcategories: category.subcategories,
  });
}
