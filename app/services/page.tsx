import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { serviceOffers } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Homely Kodai services including corporate booking, jeep rides, tent stays, travel booking, itinerary planning, celebrations, and food preference support."
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="subpage services-page">
        <section className="route-hero services-hero" aria-labelledby="services-page-title">
          <span>Services we offer</span>
          <h1 id="services-page-title">Stay, travel, celebration, and itinerary support for Kodaikanal.</h1>
          <p>
            Homely Kodai can help with the details around your stay, from property-led group booking to
            travel coordination, local experiences, celebration setup, and food preferences.
          </p>
        </section>

        <section className="section services-section" aria-label="Homely Kodai services">
          <div className="services-grid">
            {serviceOffers.map((service, index) => (
              <article className={index === 0 ? "service-card featured" : "service-card"} key={service.title}>
                <div className="service-card-media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={760}
                    height={540}
                    sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 38vw"
                  />
                </div>
                <div className="service-card-body">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactSection
          status="Tell us which services you need, your travel dates, guest count, and stay preference. Homely Kodai will help connect the plan around your group."
          title="Ask for service support"
        />
      </main>
      <Footer />
    </>
  );
}
