import { NextResponse } from 'next/server';
import duroos from '../../../duroos';

export async function GET() {
  const categories = duroos.map(({ categorytitle, categorydescrption, categoryimage }) => ({
    title: categorytitle,
    description: categorydescrption,
    image: categoryimage,
  }));
  return NextResponse.json(categories);
}
