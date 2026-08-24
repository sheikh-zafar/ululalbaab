"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"


const slides = [
    {
        id: 2,
        src: "/images/59.png",
        alt: "Slide 2",
        day: "Sunday",
        time: "After Isha",
        title: "Seerat un Nabi(ﷺ)",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: ""
    },
    {
        id: 2,
        src: "/images/39.png",
        alt: "Slide 2",
        day: "Monday",
        time: "After Isha",
        title: "Mukhtasar Sho'bul emaan lil Bayhaqi",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/6.png",
        alt: "Slide 2",
        day: "Monday",
        time: "After Isha",
        title: "Riyadus saliheen",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/61.png",
        alt: "Slide 2",
        day: "Tuesday",
        time: "After Isha",
        title: "Breeze of Iman",
        masjidname: "Masjid Yusuf Baqar - Hor Al Anz",
        masjid: "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/11.png",
        alt: "Slide 2",
        day: "Wednesday",
        time: "After Isha",
        title: "Quran Tafseer",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/1.png",
        alt: "Slide 2",
        day: "Thursday",
        time: "After Isha",
        title: "Sharh Bulugh al Maram li Ibn Hajar al Asqalani",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/2.png",
        alt: "Slide 2",
        day: "Friday",
        time: "After Isha",
        title: "Sharh Al-Targheeb wat-Tarheeb",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/60.png",
        alt: "Slide 2",
        day: "Friday",
        time: "After Isha",
        title: "Beauty of Islam",
        masjidname: "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)",
        masjid: "https://maps.app.goo.gl/mscog2WwkqiHVszA8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: ""
    }
]
const mslides = [
    {
        id: 2,
        src: "/images/mview/39.png",
        alt: "Slide 2",
        day: "Sunday",
        time: "After Isha",
        title: "Seerat un Nabi(ﷺ)",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: ""
    },
    {
        id: 2,
        src: "/images/mview/43.png",
        alt: "Slide 2",
        day: "Monday",
        time: "After Isha",
        title: "Mukhtasar Sho'bul emaan lil Bayhaqi",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/4.png",
        alt: "Slide 2",
        day: "Monday",
        time: "After Isha",
        title: "Riyadus saliheen",
        masjidname: "",
        masjid: "",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/45.png",
        alt: "Slide 2",
        day: "Tuesday",
        time: "After Isha",
        title: "Breeze of Iman",
        masjidname: "Masjid Yusuf Baqar - Hor Al Anz",
        masjid: "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/9.png",
        alt: "Slide 2",
        day: "Wednesday",
        time: "After Isha",
        title: "Quran Tafseer",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/2.png",
        alt: "Slide 2",
        day: "Thursday",
        time: "After Isha",
        title: "Sharh Bulugh al Maram li Ibn Hajar al Asqalani",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/1.png",
        alt: "Slide 2",
        day: "Friday",
        time: "After Isha",
        title: "Sharh Al-Targheeb wat-Tarheeb",
        masjidname: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2",
        masjid: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: "https://mixlr.com/zafarulhasan"
    },
    {
        id: 2,
        src: "/images/mview/44.png",
        alt: "Slide 2",
        day: "Friday",
        time: "After Isha",
        title: "Beauty of Islam",
        masjidname: "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)",
        masjid: "https://maps.app.goo.gl/mscog2WwkqiHVszA8",
        livestreaming: "https://youtube.com/Zafarulhasan",
        mixlr: ""
    }
]

const HeaderCrunchyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50; // px threshold to count as a swipe

        if (distance > minSwipeDistance) {
            handleNext(); // swiped left -> next slide
        } else if (distance < -minSwipeDistance) {
            handlePrev(); // swiped right -> previous slide
        }
    };

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
    const mcurrentSlide = slides[currentIndex]

    return (
        <div>
            <div className="relative w-full h-[600px] font-aref md:h-[700px] overflow-hidden bg-black mb-20 hidden xl:block xxl:block lg:block md:block">
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
                        className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center md:items-center xl:items-start xxl:items-center lg:items-center px-4 pb-24 md:pb-16 text-white text-center md:text-left lg:text-left xxl:text-left xl:text-left md:max-w-2xl"
                    >
                        {/* Title */}
                        <h1 className="text-3xl md:text-3xl font-bold mb-4 leading-tight">
                            {currentSlide.title}
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-xl mb-4 max-w-2xl leading-relaxed opacity-90">
                            {currentSlide.masjidname}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex flex-col gap-2 s:grid s:grid-cols-1 s:gap-3 xs:flex-col xs:gap-3 xxs:flex-col xxs:gap-4 sm:flex-row  sm:gap-4 md:gap-6">
                            {currentSlide.masjid && (
                                <a
                                    href={currentSlide.masjid}
                                    className="flex items-center gap-1.5 bg-yellow-200 border rounded-md text-yellow-700 hover:text-yellow-600 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <path d="M12 2a1 1 0 0 1 .993.883L13 3v1.17C16.38 4.7 19 7.54 19 11v2h1a1 1 0 0 1 .117 1.993L20 15h-1v6a1 1 0 0 1-1.993.117L17 21h-2v-4a3 3 0 0 0-5.996-.166L9 17v4H7a1 1 0 0 1-1-1v-6H5a1 1 0 0 1-.117-1.993L5 14h1v-3c0-3.46 2.62-6.3 6-6.83V3a1 1 0 0 1 1-1zm5 11H7v6h2v-2a3 3 0 0 1 5.996-.166L15 17v2h2v-6zm-5-7c-2.454 0-4.5 1.79-4.5 4v1h9v-1c0-2.21-2.046-4-4.5-4z" />
                                    </svg>
                                    <span>Map Link</span>
                                </a>
                            )}
                            {currentSlide.day && (
                                <div
                                    className="flex items-center gap-1.5 bg-green-300 border rounded-md text-green-600 hover:text-green-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 14.5L10.5 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    <span>{currentSlide.day}</span>
                                </div>
                            )}
                            {currentSlide.time && (
                                <div
                                    className="flex items-center gap-1.5 bg-blue-300 border rounded-md text-blue-600 hover:text-blue-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg fill="#000000" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24,12a1,1,0,0,1-2,0A10.011,10.011,0,0,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12Zm-8,1a1,1,0,0,0,0-2H13.723A2,2,0,0,0,13,10.277V7a1,1,0,0,0-2,0v3.277A1.994,1.994,0,1,0,13.723,13ZM1.827,6.784a1,1,0,1,0,1,1A1,1,0,0,0,1.827,6.784ZM2,12a1,1,0,1,0-1,1A1,1,0,0,0,2,12ZM12,22a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM4.221,3.207a1,1,0,1,0,1,1A1,1,0,0,0,4.221,3.207ZM7.779.841a1,1,0,1,0,1,1A1,1,0,0,0,7.779.841ZM1.827,15.216a1,1,0,1,0,1,1A1,1,0,0,0,1.827,15.216Zm2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,4.221,18.793Zm3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,7.779,21.159Zm14.394-5.943a1,1,0,1,0,1,1A1,1,0,0,0,22.173,15.216Zm-2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,19.779,18.793Zm-3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,16.221,21.159Z"></path></g></svg>
                                    <span>{currentSlide.time}</span>
                                </div>
                            )}

                            {currentSlide.livestreaming && (
                                <a
                                    href={currentSlide.livestreaming}
                                    className="flex items-center gap-1.5 bg-red-300 border rounded-md text-red-600 hover:text-red-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span>Live Stream</span>
                                </a>
                            )}

                            {currentSlide.mixlr && (
                                <a
                                    href={currentSlide.mixlr}
                                    className="flex items-center gap-1.5 bg-orange-200 border rounded-md text-orange-500 hover:text-orange-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <circle cx="4" cy="12" r="3" fill="currentColor" />
                                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                                        <circle cx="20" cy="12" r="3" fill="currentColor" />
                                    </svg>
                                    <span>Mixlr</span>
                                </a>
                            )}
                        </div>


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
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
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
                            className="relative h-3 flex items-center justify-center"
                            style={{ width: index === currentIndex ? 28 : 12 }}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === currentIndex ? (
                                <motion.span
                                    layoutId="active-dot"
                                    className="absolute inset-0 rounded-full bg-yellow-500"
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                />
                            ) : (
                                <span className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/70 transition-colors duration-200" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative w-full bg-black mb-20 hidden xs:block xxs:block sm:block aspect-[2/3]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={mcurrentSlide.src}
                        alt={mcurrentSlide.alt}
                        className={`w-full h-full transition-opacity duration-800 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                            } object-cover`}
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
                        className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center md:items-start xl:items-start xxl:items-center lg:items-start px-4 md:px-10 pb-28 md:pb-0 text-white font-aref text-center md:text-left lg:text-left xxl:text-left xl:text-left md:max-w-2xl"
                    >
                        {/* Title */}
                        <h2 className="text-3xl md:text-3xl font-bold mb-4 leading-tight">
                            {mcurrentSlide.title}
                        </h2>

                        {/* Description */}
                        <p className="text-base  md:text-xl mb-4 max-w-2xl leading-relaxed opacity-90">
                            {mcurrentSlide.masjidname}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex flex-col gap-2 s:grid s:grid-cols-1 s:gap-3 xs:flex-col xs:gap-3 xxs:flex-col xxs:gap-4 sm:flex-row  sm:gap-4 md:gap-6">
                            {mcurrentSlide.masjid && (
                                <a
                                    href={mcurrentSlide.masjid}
                                    className="flex items-center gap-1.5 bg-yellow-200 border rounded-md text-yellow-700 hover:text-yellow-600 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <path d="M12 2a1 1 0 0 1 .993.883L13 3v1.17C16.38 4.7 19 7.54 19 11v2h1a1 1 0 0 1 .117 1.993L20 15h-1v6a1 1 0 0 1-1.993.117L17 21h-2v-4a3 3 0 0 0-5.996-.166L9 17v4H7a1 1 0 0 1-1-1v-6H5a1 1 0 0 1-.117-1.993L5 14h1v-3c0-3.46 2.62-6.3 6-6.83V3a1 1 0 0 1 1-1zm5 11H7v6h2v-2a3 3 0 0 1 5.996-.166L15 17v2h2v-6zm-5-7c-2.454 0-4.5 1.79-4.5 4v1h9v-1c0-2.21-2.046-4-4.5-4z" />
                                    </svg>
                                    <span>Map Link</span>
                                </a>
                            )}
                            {mcurrentSlide.day && (
                                <div
                                    className="flex items-center gap-1.5 bg-green-300 border rounded-md text-green-600 hover:text-green-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 14.5L10.5 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    <span>{mcurrentSlide.day}</span>
                                </div>
                            )}
                            {mcurrentSlide.time && (
                                <div
                                    className="flex items-center gap-1.5 bg-blue-300 border rounded-md text-blue-600 hover:text-blue-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg fill="#000000" viewBox="0 0 24 24" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24,12a1,1,0,0,1-2,0A10.011,10.011,0,0,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12Zm-8,1a1,1,0,0,0,0-2H13.723A2,2,0,0,0,13,10.277V7a1,1,0,0,0-2,0v3.277A1.994,1.994,0,1,0,13.723,13ZM1.827,6.784a1,1,0,1,0,1,1A1,1,0,0,0,1.827,6.784ZM2,12a1,1,0,1,0-1,1A1,1,0,0,0,2,12ZM12,22a1,1,0,1,0,1,1A1,1,0,0,0,12,22ZM4.221,3.207a1,1,0,1,0,1,1A1,1,0,0,0,4.221,3.207ZM7.779.841a1,1,0,1,0,1,1A1,1,0,0,0,7.779.841ZM1.827,15.216a1,1,0,1,0,1,1A1,1,0,0,0,1.827,15.216Zm2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,4.221,18.793Zm3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,7.779,21.159Zm14.394-5.943a1,1,0,1,0,1,1A1,1,0,0,0,22.173,15.216Zm-2.394,3.577a1,1,0,1,0,1,1A1,1,0,0,0,19.779,18.793Zm-3.558,2.366a1,1,0,1,0,1,1A1,1,0,0,0,16.221,21.159Z"></path></g></svg>
                                    <span>{mcurrentSlide.time}</span>
                                </div>
                            )}

                            {mcurrentSlide.livestreaming && (
                                <a
                                    href={mcurrentSlide.livestreaming}
                                    className="flex items-center gap-1.5 bg-red-300 border rounded-md text-red-600 hover:text-red-400 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span>Live Stream</span>
                                </a>
                            )}

                            {mcurrentSlide.mixlr && (
                                <a
                                    href={mcurrentSlide.mixlr}
                                    className="flex items-center gap-1.5 bg-orange-200 border rounded-md text-orange-700 hover:text-orange-600 underline font-medium transition-colors duration-200 s:text-xs xs:text-sm xxs:text-base"
                                >
                                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" className="w-4 h-4 s:w-4 s:h-4 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5 shrink-0">
                                        <circle cx="4" cy="12" r="3" fill="currentColor" />
                                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                                        <circle cx="20" cy="12" r="3" fill="currentColor" />
                                    </svg>
                                    <span>Mixlr</span>
                                </a>
                            )}
                        </div>


                    </motion.div>
                </AnimatePresence>



                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
                    {mslides.map((_, index) => (
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
                            className="relative h-3 flex items-center justify-center"
                            style={{ width: index === currentIndex ? 28 : 12 }}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === currentIndex ? (
                                <motion.span
                                    layoutId="active-dot"
                                    className="absolute inset-0 rounded-full bg-yellow-500"
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                />
                            ) : (
                                <span className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/70 transition-colors duration-200" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default HeaderCrunchyCarousel;