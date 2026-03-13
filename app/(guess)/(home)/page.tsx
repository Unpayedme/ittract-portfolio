import { ContactPreview } from "@/components/features/home/ContactPreview";
import { HeroBanner } from "@/components/features/home/HeroBanner";
import { FeaturedProjects } from "@/components/features/home/FeaturedProjects"; 


export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedProjects />
      <ContactPreview />
    </>
  )
}