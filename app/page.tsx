import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { Hero } from "@/components/sections/Hero";
import { IntroStrip } from "@/components/sections/IntroStrip";
import { PlacesSection } from "@/components/sections/PlacesSection";
import { PropertiesSection } from "@/components/sections/PropertiesSection";
import { StayPackagesSection } from "@/components/sections/StayPackagesSection";
import { TripPlanner } from "@/components/sections/TripPlanner";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroStrip />
        <AboutSection />
        <PropertiesSection />
        <PlacesSection />
        <TripPlanner />
        <StayPackagesSection />
      </main>
      <Footer />
    </>
  );
}
