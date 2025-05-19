import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../duroos'; // Adjust if needed

export async function GET(req: NextRequest) {
  const subcategories = req.nextUrl.pathname.split('/').pop(); // get dynamic param from URL

  if (!subcategories) {
    return NextResponse.json({ error: 'Subcategory not provided' }, { status: 400 });
  }

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
