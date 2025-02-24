import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query

  if (!code || Array.isArray(code)) {
    return res.status(400).json({ error: "Invalid authorization code" })
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: "authorization_code",
      code: code, // Ensure it's a single string
    }),
  })

  const data = await response.json()
  res.status(200).json(data)
}
