import BookCarousel from "@/components/PopularSharh"
import WeeklySchedule from "@/components/WeeklySchedule"
import SocialLinks from "@/components/SocialMedia"
import MainCategory from "@/components/MainCategory"
import Tafseer from "@/components/Tafseer"
import AdCard from "@/components/AdCardOne"
import TaweelCarousel from "@/components/TaweelCarousel"
import AamDuroos from "@/components/AamDuroos"
import AdCardTwo from "@/components/AdCardTwo"
import AdCardThree from "@/components/AdCarThree"
import Logo from "@/components/SheikhName"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Logo />
      <SocialLinks />
      <AdCardThree />
      <BookCarousel />
      <WeeklySchedule />
      <AdCard />
      <MainCategory />
      <Tafseer />
      <AdCardTwo />
      <TaweelCarousel />
      <AamDuroos />
    </div>
  )
}
