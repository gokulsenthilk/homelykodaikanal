import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Homely Kodai to plan Kodaikanal stays, sightseeing routes, holiday packages, and direct booking support."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="subpage contact-page">
        <section className="route-hero" aria-labelledby="contact-page-title">
          <span>Contact Homely Kodai</span>
          <h1 id="contact-page-title">Share your dates and group size.</h1>
          <p>
            Send a quick enquiry for stays, packages, sightseeing routes, and direct booking support in
            Kodaikanal.
          </p>
        </section>
        <ContactSection status="Tell us your travel date, guest count, and the kind of trip you want. Homely Kodai will follow up with practical stay and route options." />
      </main>
      <Footer />
    </>
  );
}
