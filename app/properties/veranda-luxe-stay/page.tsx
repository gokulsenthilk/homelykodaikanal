import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { contactHref, contactNumber, properties, verandaLuxeGallery } from "@/data/site";

const verandaLuxe = properties.find((property) => property.slug === "veranda-luxe-stay");

export const metadata: Metadata = {
  title: "Veranda Luxe Stay",
  description:
    "Veranda Luxe Stay by Homely Kodai is a luxury 5-bedroom valley-view villa in Vala Kattu Odai, Kodaikanal with garden, balconies, barbecue, bonfire, and group-friendly spaces."
};

export default function VerandaLuxeStayPage() {
  if (!verandaLuxe) {
    return null;
  }

  const [heroImage, ...galleryImages] = verandaLuxeGallery;

  return (
    <>
      <Header />
      <main className="property-page">
        <section className="property-hero">
          <div className="property-hero-copy">
            <span>{verandaLuxe.eyebrow}</span>
            <h1>{verandaLuxe.name}</h1>
            <p>{verandaLuxe.description}</p>
            <div className="property-hero-actions">
              <a className="button primary" href={contactHref}>
                Call {contactNumber}
              </a>
              {verandaLuxe.mapUrl ? (
                <a className="button secondary" href={verandaLuxe.mapUrl} target="_blank" rel="noreferrer">
                  Open Google Maps
                </a>
              ) : null}
              {verandaLuxe.airbnbUrl ? (
                <a className="text-link" href={verandaLuxe.airbnbUrl} target="_blank" rel="noreferrer">
                  Airbnb listing
                </a>
              ) : null}
              {verandaLuxe.stayVistaUrl ? (
                <a className="text-link" href={verandaLuxe.stayVistaUrl} target="_blank" rel="noreferrer">
                  StayVista listing
                </a>
              ) : null}
            </div>
          </div>
          <div className="property-hero-media">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={980}
              height={720}
              priority
              sizes="(max-width: 940px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className="section property-detail-section" aria-labelledby="veranda-overview-title">
          <div className="section-heading split-heading">
            <div>
              <span>Villa overview</span>
              <h2 id="veranda-overview-title">A five-bedroom valley-view villa for larger Kodai stays.</h2>
            </div>
            {verandaLuxe.instagramUrl ? (
              <a className="text-link" href={verandaLuxe.instagramUrl} target="_blank" rel="noreferrer">
                View Instagram
              </a>
            ) : null}
          </div>

          <div className="detail-layout">
            <div className="detail-panel">
              <h3>Stay details</h3>
              <div className="detail-list">
                {verandaLuxe.facts.map((fact) => (
                  <div key={fact.label}>
                    <strong>{fact.label}</strong>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-panel">
              <h3>Address and booking links</h3>
              <p>{verandaLuxe.address}</p>
              <div className="property-actions">
                {verandaLuxe.mapUrl ? (
                  <a className="button secondary" href={verandaLuxe.mapUrl} target="_blank" rel="noreferrer">
                    Directions
                  </a>
                ) : null}
                {verandaLuxe.airbnbUrl ? (
                  <a className="button secondary" href={verandaLuxe.airbnbUrl} target="_blank" rel="noreferrer">
                    Open Airbnb
                  </a>
                ) : null}
                {verandaLuxe.stayVistaUrl ? (
                  <a className="text-link" href={verandaLuxe.stayVistaUrl} target="_blank" rel="noreferrer">
                    Open StayVista
                  </a>
                ) : null}
                {verandaLuxe.instagramUrl ? (
                  <a className="text-link" href={verandaLuxe.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="section media-section" aria-labelledby="veranda-media-title">
          <div className="section-heading">
            <span>Photos</span>
            <h2 id="veranda-media-title">Garden, veranda, bedrooms, and shared spaces.</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure className={index === 0 ? "wide" : ""} key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={760}
                  height={540}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </figure>
            ))}
          </div>

          <div className="video-links">
            <article>
              <span>Social videos</span>
              <h3>View reels and updates</h3>
              <p>
                The Instagram page carries current reels and video previews for Veranda Luxe Stay.
              </p>
              {verandaLuxe.instagramUrl ? (
                <a className="button primary" href={verandaLuxe.instagramUrl} target="_blank" rel="noreferrer">
                  Open Instagram
                </a>
              ) : null}
            </article>
            <article>
              <span>Source listings</span>
              <h3>Compare listing details</h3>
              <p>
                Airbnb and StayVista list the live availability, policies, and current platform pricing.
              </p>
              {verandaLuxe.airbnbUrl ? (
                <a className="button secondary" href={verandaLuxe.airbnbUrl} target="_blank" rel="noreferrer">
                  Open Airbnb
                </a>
              ) : null}
            </article>
          </div>
        </section>

        <section className="section property-detail-section" aria-labelledby="veranda-amenities-title">
          <div className="section-heading">
            <span>Amenities and guest notes</span>
            <h2 id="veranda-amenities-title">Designed for group stays with elevated outdoor time.</h2>
          </div>
          <div className="amenity-layout">
            <div className="detail-panel">
              <h3>Amenities</h3>
              <ul className="pill-list">
                {verandaLuxe.amenities.map((amenity) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="detail-panel">
              <h3>Highlights</h3>
              <ul>
                {verandaLuxe.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            {verandaLuxe.reviewSummary ? (
              <div className="detail-panel review-panel">
                <h3>Reviews</h3>
                <p>{verandaLuxe.reviewSummary}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="contact-section property-contact" aria-labelledby="veranda-booking-title">
          <div>
            <h2 id="veranda-booking-title">Book Veranda Luxe Stay</h2>
            <p>Call Homely Kodai for direct availability support, guest count, dates, and current tariff.</p>
          </div>
          <div className="property-hero-actions">
            <a className="button primary" href={contactHref}>
              {contactNumber}
            </a>
            <Link className="button secondary" href="/properties">
              Back to properties
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
