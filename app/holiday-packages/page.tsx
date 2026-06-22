import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TripPlanner } from "@/components/sections/TripPlanner";

export const metadata: Metadata = {
  title: "Holiday Packages",
  description:
    "Explore Kodaikanal holiday packages for quick escapes, family sightseeing, and romantic hill-station trips."
};

export default function HolidayPackagesPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="route-hero" aria-labelledby="holiday-page-title">
          <span>Holiday packages</span>
          <h1 id="holiday-page-title">Sightseeing plans with stay support built in.</h1>
          <p>
            Pick a ready package or send your dates so the route, vehicle, stay style, and pace can be
            adjusted for your group.
          </p>
        </section>
        <TripPlanner />
      </main>
      <Footer />
    </>
  );
}
