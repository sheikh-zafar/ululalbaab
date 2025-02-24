import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function GET(req: NextRequest) {
  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/calendar.readonly"]
    )

    const calendar = google.calendar({ version: "v3", auth })

    const now = new Date()

    // Calculate the most recent Friday
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - ((now.getDay() + 2) % 7)) // Get last Friday
    startOfWeek.setHours(0, 0, 0, 0)

    // Calculate the next Thursday
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 6) // Thursday
    endOfWeek.setHours(23, 59, 59, 999)

    const response = await calendar.events.list({
      calendarId: "3b8poos1bsipthgbp95hcbvni4@group.calendar.google.com", // Replace with your actual Calendar ID
      timeMin: startOfWeek.toISOString(),
      timeMax: endOfWeek.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    })

    return NextResponse.json({ events: response.data.items || [] })
  } catch (error) {
    console.error("Google Calendar API Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    )
  }
}
