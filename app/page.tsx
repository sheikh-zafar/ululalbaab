import HeaderSection from "@/components/header"
import BookCarousel from "@/components/PopularSharh"
import WeeklySchedule from "@/components/WeeklySchedule"
import VisionMission from "@/components/VisionMission"
import SocialLinks from "@/components/SocialMedia"
import MainCategory from "@/components/MainCategory"
import Tafseer from "@/components/Tafseer"
import AdCard from "@/components/AdCardOne"

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <SocialLinks/>
      <BookCarousel />
      <WeeklySchedule />
      <AdCard/>
      <MainCategory/>
      <Tafseer/>
    </div>
  )
}
