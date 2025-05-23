import HeaderSection from "@/components/header"
import BookCarousel from "@/components/PopularSharh"
import WeeklySchedule from "@/components/WeeklySchedule"
import VisionMission from "@/components/VisionMission"
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
