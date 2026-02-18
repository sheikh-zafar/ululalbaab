"use client"

export default function AdCardThree() {
    return (
        <div className="my-10 sh xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
            <div className="shadow-lg p-8 text-center md:text-left bg-gradient-to-r from-goldengrass to-sunflower  border border-[#f1f1f1]">
                {/* Title */}
                <h4 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                    Ramadan Schedule 2026
                </h4>

                {/* Description */}
                <p className="text-dovegray text-lg mb-6 max-w-3xl mx-auto md:mx-0">
                    Stay Updated with Ramadan Schedule 2026, 1447 AH.
                </p>

                {/* Buttons */}
                <div className="flex flex-row gap-4 s:flex-col xs:flex-col xxs:flex-col justify-center">
                    <a href="/lecture-schedule" target="_blank" className="bg-red-600 hover:bg-[#a7772d] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
                        Schedule
                    </a>
                </div>
            </div>
        </div>
    )
}
