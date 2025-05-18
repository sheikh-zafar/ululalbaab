import { NextRequest, NextResponse } from 'next/server';
import duroos from '../../.././../duroos';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryTitle = searchParams.get('category');

  if (!categoryTitle) {
    return NextResponse.json({ error: 'Category is required' }, { status: 400 });
  }

  const category = duroos.find(cat => cat.categorytitle === categoryTitle);
  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  // Return both category title and subcategories
  return NextResponse.json({
    category: category.categorytitle,
    description: category.categorydescrption,
    image: category.categoryimage,
    subcategories: category.subcategories,
  });
}
