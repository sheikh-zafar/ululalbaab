"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


const slides = [
  {
    id: 1,
    src: "/images/2.png",
    alt: "Slide 1",
    title: "Targeeb wat Tarheeb",
    description: "Join The class here!",
    link: "#",
    label: "New Episodes Weekly",
    buttonText: "Watch Now",
  },
  {
    id: 2,
    src: "/images/6.png",
    alt: "Slide 2",
    title: "Targeeb wat Tarheeb",
    description: "Join The class here!",
    link: "#",
    label: "New Episodes Weekly",
    buttonText: "Watch Now",
  },
  {
    id: 3,
    src: "/images/4.png",
    alt: "Slide 3",
    title: "Bulugh Al maram",
    description: "Rulings and Evidences",
    link: "#",
    label: "Final Season",
    buttonText: "Watch Now",
  },
  {
    id: 4,
    src: "/images/6.png",
    alt: "Slide 4",
    title: "Tafseer",
    description: "Surah Hujurat streaming! Watch now",
    link: "#",
    label: "Season 3 Streaming",
    buttonText: "Watch Now",
  },
]

const CrunchyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      setIsTransitioning(false)
    }, 150)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 150)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black mb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.src}
          alt={currentSlide.alt}
          className={`w-full h-full transition-opacity duration-800 ${isTransitioning ? 'opacity-0' : 'opacity-100'
            } object-cover md:object-right object-center`}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent md:from-black/80 md:via-black/20 md:to-transparent"></div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center md:items-start xl:items-start xxl:items-center lg:items-start px-4 md:px-10 pb-8 md:pb-0 text-white text-center md:text-left lg:text-left xxl:text-left xl:text-left md:max-w-2xl"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl mb-4 max-w-2xl leading-relaxed opacity-90">
            {currentSlide.description}
          </p>

          {/* Learn More Link */}
          <a
            href={currentSlide.link}
            className="text-yellow-500 hover:text-yellow-400 underline mb-2 font-medium transition-colors duration-200"
          >
            Learn More
          </a>

          {/* Label */}
          <span className="text-sm mb-6 opacity-80">
            {currentSlide.label}
          </span>

          {/* Call-to-Action Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md w-4/5 xl:w-1/4 xxl:w-1/4 lg:w-1/4 md:w-auto min-w-[200px] transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95">
            {currentSlide.buttonText}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-20">
        <button
          onClick={handlePrev}
          className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white border-none text-3xl p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white border-none text-3xl p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 150)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-yellow-500 scale-125'
              : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CrunchyCarousel