"use client" // Required for Next.js app directory

import React, { useState, useEffect } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { id: 1, src: "/images/2.png", alt: "Slide 1" },
  { id: 2, src: "/images/4.png", alt: "Slide 2" },
  { id: 3, src: "/images/6.png", alt: "Slide 3" },
  { id: 4, src: "/images/8.png", alt: "Slide 4" },
  { id: 5, src: "/images/10.png", alt: "Slide 5" },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile ? "50vh" : "700px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <AnimatePresence mode='wait'>
        <motion.img
          key={slides[currentIndex].id}
          src={slides[currentIndex].src}
          alt={slides[currentIndex].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            width: isMobile ? "90%" : "80%",
            height: isMobile ? "auto" : "100%",
            maxHeight: "90vh",
            objectFit: isMobile ? "contain" : "cover",
            borderRadius: "10px",
          }}
        />
      </AnimatePresence>

      {/* Manual Navigation */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          top: "50%",
          transform: "translateY(-50%)",
          px: 2,
        }}
      >
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
          style={buttonStyle}
        >
          ‹
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
          style={buttonStyle}
        >
          ›
        </button>
      </Box>
    </Box>
  )
}

// Button Styles
const buttonStyle = {
  background: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  border: "none",
  fontSize: "24px",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 10,
}

export default Carousel
