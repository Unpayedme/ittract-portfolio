import { ContactPreview } from "@/components/features/home/ContactPreview";
import { HeroBanner } from "@/components/features/home/HeroBanner";
import { RecentProjects } from "@/components/features/home/RecentProjects"; 


export default function Home() {
  return (
    <>
      <HeroBanner />
      <RecentProjects />
      <ContactPreview />
    </>
  )
}