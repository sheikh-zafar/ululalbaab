"use client"

import { Box, Typography, CircularProgress, Container } from "@mui/material"
import { useEffect, useState } from "react"

export default function LatestNewsVideo() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000) // Simulating a short loading delay
  }, [])

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant='h4' fontWeight='bold' color='primary' gutterBottom>
        Vission & Mission
      </Typography>

      {loading ? (
        <CircularProgress color='primary' />
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // Aspect ratio for 16:9
            overflow: "hidden",
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/ojrl3lG7994'
            frameBorder='0'
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
      )}
    </Container>
  )
}
