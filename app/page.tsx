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
      
      
      <BookCarousel />
      <SocialLinks/>
      <WeeklySchedule />
      <VisionMission />

    </div>
  )
}
