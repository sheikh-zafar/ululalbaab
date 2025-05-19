import { NextRequest, NextResponse } from 'next/server'
import duroos from '../../../../duroos' // adjust based on your project structure

export async function GET(
  req: NextRequest,
  context: { params: { subcategories: string } }
) {
  const { subcategories } = context.params
  const categoryTitle = subcategories.replace(/-/g, ' ') // convert slug to title

  const category = duroos.find(
    (cat) =>
      cat.categorytitle.toLowerCase().trim() === categoryTitle.toLowerCase().trim()
  )

  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 })
  }

  return NextResponse.json({
    category: category.categorytitle,
    description: category.categorydescrption,
    image: category.categoryimage,
    subcategories: category.subcategories,
  })
}
