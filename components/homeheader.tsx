

import React from 'react'

export default function CrunchyHomeHeader() {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden mb-20">
            <img
                src="https://via.placeholder.com/1200x700?text=Hero+Background"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>


            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                <h4 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                    Discover Your Next Favorite Duroos
                </h4>

                <a href="#explore" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
                    Explore Now
                </a>
            </div>
        </div>


    )
}
