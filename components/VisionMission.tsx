"use client"

import { Box, Typography, CircularProgress, Container } from "@mui/material"
import { useEffect, useState } from "react"

export default function LatestNewsVideo() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000) // Simulating a short loading delay
  }, [])

  return (
    <Container sx={{ textAlign: "center", mb: 20 }}>
      <h6 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-base xxs:text-2xl md:text-4xl font-extrabold font-sans">
          Vission Mission
        </h6>
        <hr className="bg-bgcolor text-2xl" />

      {loading ? (
        <CircularProgress color='primary' />
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // Aspect ratio for 16:9
            overflow: "hidden",
            mt: 5
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/ojrl3lG7994'
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 20,
              width: "100%",
              height: "80%",
            }}
          ></iframe>
        </Box>
      )}
    </Container>
  )
}
