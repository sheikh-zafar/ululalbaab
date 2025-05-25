import HeaderSection from "@/components/header"
import BookCarousel from "@/components/PopularSharh"
import WeeklySchedule from "@/components/WeeklySchedule"
import VisionMission from "@/components/VisionMission"
import SocialLinks from "@/components/SocialMedia"
import MainCategory from "@/components/MainCategory"
import Tafseer from "@/components/Tafseer"

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <BookCarousel />
      <SocialLinks/>
      <WeeklySchedule />
      <MainCategory/>
      <Tafseer/>
      <VisionMission />
    </div>
  )
}
