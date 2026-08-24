"use client"

export default function AdCardTwo() {
  return (
    <div className="mt-20 sh xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
      <div className="px-8 xs:px-2 s:px-1 text-center ">

        {/* Buttons */}
        <div className="xl:flex xl:flex-row xxl:flex xxl:flex-row lg:flex lg:flex-row md:flex md:flex-row gap-4 grid grid-cols-2 justify-center">
          <a href="https://www.youtube.com/@Zafarulhasan" className="bg-red-600 hover:bg-[#a7772d] w-44 sm:w-20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
            Youtube
          </a>
          <a href="https://zafarulhasan.mixlr.com/" className="bg-dustygray hover:bg-[#4f4f4f] w-44 sm:w-20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm">
            Mixlr
          </a>
          <a href="/duroos" className="bg-[#bb8732] hover:bg-[#a7772d] w-44 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
            Duroos
          </a>
          <a href="/lecture-schedule" className="bg-dustygray hover:bg-[#4f4f4f] w-44 sm:w-20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm">
            Schedule
          </a>
        </div>
      </div>
    </div>
  )
}
