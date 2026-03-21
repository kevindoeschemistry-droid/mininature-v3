import HeroSection from "@/components/home/HeroSection";
import ImpactBar from "@/components/home/ImpactBar";
import MapPreview from "@/components/home/MapPreview";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedReserves from "@/components/home/FeaturedReserves";
import TestimonialSection from "@/components/home/TestimonialSection";
import FinalCTA from "@/components/home/FinalCTA";
import PillarsSection from "@/components/home/PillarsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactBar />
      <MapPreview />
      <HowItWorks />
      <FeaturedReserves />
      <PillarsSection />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
