import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PropertiesSection } from "@/components/sections/PropertiesSection";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse Homely Kodai properties in Kodaikanal, including Belle Vue Villa and Veranda Luxe Stay."
};

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="route-hero" aria-labelledby="properties-page-title">
          <span>Homely Kodai properties</span>
          <h1 id="properties-page-title">Direct stays for families, couples, and group trips.</h1>
          <p>
            Compare available villas, review amenities and gallery links, then call directly for dates,
            guest count, and current tariff.
          </p>
        </section>
        <PropertiesSection />
      </main>
      <Footer />
    </>
  );
}
