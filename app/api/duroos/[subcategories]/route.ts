import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../../../duroos'; // adjust path to match your project

export async function GET(
  _req: NextRequest,
  { params }: { params: { subcategories: string } }
) {
  const categorySlug = params.subcategories;
  const decodedTitle = categorySlug.replace(/-/g, ' '); // Convert slug to title

  const category = duroos.find(
    (cat) => cat.categorytitle.toLowerCase() === decodedTitle.toLowerCase()
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
