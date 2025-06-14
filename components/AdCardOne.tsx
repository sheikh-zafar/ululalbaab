"use client"
import { Container } from "@mui/material"

export default function AdCard() {
  return (
    <div  className="my-10 sh xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8"> 
      <div className="shadow-lg p-8 text-center md:text-left bg-gradient-to-r from-sunflower to-goldengrass ">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black font-mono mb-4">
          Experience Authentic Islamic Learning
        </h1>

        {/* Description */}
        <p className="text-dovegray text-lg mb-6 max-w-3xl mx-auto md:mx-0">
          Dive into a curated library of lectures, tafseer, and courses rooted in tradition and taught by trusted scholars.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 s:flex-col xs:flex-col xxs:flex-col justify-center">
          <button className="bg-[#bb8732] hover:bg-[#a7772d] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
            Explore Courses
          </button>
          <button className="bg-dustygray hover:bg-[#4f4f4f] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
