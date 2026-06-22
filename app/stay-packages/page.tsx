import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { StayPackagesSection } from "@/components/sections/StayPackagesSection";

export const metadata: Metadata = {
  title: "Stay Packages",
  description:
    "Choose Kodaikanal stay packages including lakeside rooms, valley-view cottages, and premium mist villas."
};

export default function StayPackagesPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="route-hero" aria-labelledby="stay-page-title">
          <span>Stay packages</span>
          <h1 id="stay-page-title">Stay styles for quiet weekends and longer hill trips.</h1>
          <p>
            Browse room, cottage, and villa-style options, then share your dates to check availability and
            match the stay to your travel plan.
          </p>
        </section>
        <StayPackagesSection />
        <ContactSection
          status="Tell us your travel dates, guest count, and preferred stay style. We will help match the right Kodaikanal stay package."
          title="Enquire about a stay package"
        />
      </main>
      <Footer />
    </>
  );
}
