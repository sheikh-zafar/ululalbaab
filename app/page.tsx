import HeaderSection from "@/components/header"
import Image from "next/image"
import BookCarousel from "@/components/PopularSharh"
import WeeklySchedule from "@/components/WeeklySchedule"
import VisionMission from "@/components/VisionMission"
import Link from "next/link"
import logo from "../public/images/icon-192x192.png"
import SocialLinks from "@/components/SocialMedia"

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <div className="max-w-7xl mx-2 my-20 xs:my-14 xxs:my-14 s:my-14">
        <h6 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans">
          About Sheikh zafarulhasan Madani
        </h6>
        <hr className="bg-bgcolor text-2xl" />
        <div className="max-w-7xl mx-2 mt-5">
        <div className="flex">
          <div className="w-1/6">
            <Image
              src={logo}
              alt="ahle ilm"
              width="150"
              height="80"
            />
          </div>
          <div className="w-5/6">
            <p className="text-text-primary text-lg md:text-base xs:text-xs xxs:text-xs my-4 xs:my-3 xxs:my-3">
              Zafar-ul-Hasan Ahmedullah was born in 1956. He
              hails from a religious family of eight members
              from Changhaipur (Pratapgarh), a small town in
              Uttar Pradesh, India. His father was a farmer
              and Quran teacher, used to attend lectures of
              Moulana Ahmedullah Pratapgadhi, Moulana
              Sanaullah Amritseri...
            </p>
            <Link
              href="/about"
              className="bg-button-primary hover:bg-button-hover text-whiterock rounded-xl hover:shadow-2xl p-3 text-base font-bold font-mono "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      </div>
      
      <BookCarousel />
      <SocialLinks/>
      <WeeklySchedule />
      <VisionMission />

    </div>
  )
}
