import { NextResponse } from "next/server"

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY // Store in .env.local
  const CHANNEL_ID = "UCBi2mrWuNuyYy4gbM6fU18Q" // Replace with a news channel's ID
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`

  try {
    const res = await fetch(URL)
    const data = await res.json()

    if (!data.items.length) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 })
    }

    return NextResponse.json({ video: data.items[0] })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    )
  }
}
