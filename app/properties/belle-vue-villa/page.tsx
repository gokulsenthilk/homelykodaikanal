import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { belleVueGallery, contactHref, contactNumber, properties } from "@/data/site";

const belleVue = properties.find((property) => property.slug === "belle-vue-villa");

export const metadata: Metadata = {
  title: "Belle Vue Villa",
  description:
    "Belle Vue Villa by Homely Kodai is a private 3BHK villa in Attuvampatti, Kodaikanal with kitchen, parking, caretaker support, photos, map, and booking contact."
};

export default function BelleVueVillaPage() {
  if (!belleVue) {
    return null;
  }

  const [heroImage, ...galleryImages] = belleVueGallery;

  return (
    <>
      <Header />
      <main className="property-page">
        <section className="property-hero">
          <div className="property-hero-copy">
            <span>{belleVue.eyebrow}</span>
            <h1>{belleVue.name}</h1>
            <p>{belleVue.description}</p>
            <div className="property-hero-actions">
              <a className="button primary" href={contactHref}>
                Call {contactNumber}
              </a>
              {belleVue.mapUrl ? (
                <a className="button secondary" href={belleVue.mapUrl} target="_blank" rel="noreferrer">
                  Open Google Maps
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

        <section className="section property-detail-section" aria-labelledby="overview-title">
          <div className="section-heading split-heading">
            <div>
              <span>Villa overview</span>
              <h2 id="overview-title">Private 3BHK stay with space for slow hill-station days.</h2>
            </div>
            {belleVue.photosUrl ? (
              <a className="text-link" href={belleVue.photosUrl} target="_blank" rel="noreferrer">
                View full photo and video album
              </a>
            ) : null}
          </div>

          <div className="detail-layout">
            <div className="detail-panel">
              <h3>Stay details</h3>
              <div className="detail-list">
                {belleVue.facts.map((fact) => (
                  <div key={fact.label}>
                    <strong>{fact.label}</strong>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-panel">
              <h3>Address</h3>
              <p>{belleVue.address}</p>
              <div className="property-actions">
                {belleVue.mapUrl ? (
                  <a className="button secondary" href={belleVue.mapUrl} target="_blank" rel="noreferrer">
                    Directions
                  </a>
                ) : null}
                {belleVue.instagramUrl ? (
                  <a className="text-link" href={belleVue.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="section media-section" aria-labelledby="media-title">
          <div className="section-heading">
            <span>Photos and videos</span>
            <h2 id="media-title">A closer look at Belle Vue Villa.</h2>
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
              <span>Video tour</span>
              <h3>Watch the full media album</h3>
              <p>
                Google Photos serves video files through temporary URLs, so this page links to the stable
                public album for video playback.
              </p>
              {belleVue.photosUrl ? (
                <a className="button primary" href={belleVue.photosUrl} target="_blank" rel="noreferrer">
                  Open album
                </a>
              ) : null}
            </article>
            <article>
              <span>Social videos</span>
              <h3>Follow Homely Kodai on Instagram</h3>
              <p>Recent reels and updates for Belle Vue Villa are available on the Homely Kodai page.</p>
              {belleVue.instagramUrl ? (
                <a className="button secondary" href={belleVue.instagramUrl} target="_blank" rel="noreferrer">
                  Open Instagram
                </a>
              ) : null}
            </article>
          </div>
        </section>

        <section className="section property-detail-section" aria-labelledby="amenities-title">
          <div className="section-heading">
            <span>Amenities and guest notes</span>
            <h2 id="amenities-title">Built for families, couples, and small groups.</h2>
          </div>
          <div className="amenity-layout">
            <div className="detail-panel">
              <h3>Amenities</h3>
              <ul className="pill-list">
                {belleVue.amenities.map((amenity) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="detail-panel">
              <h3>Highlights</h3>
              <ul>
                {belleVue.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            {belleVue.reviewSummary ? (
              <div className="detail-panel review-panel">
                <h3>Reviews</h3>
                <p>{belleVue.reviewSummary}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="contact-section property-contact" aria-labelledby="booking-title">
          <div>
            <h2 id="booking-title">Book Belle Vue Villa</h2>
            <p>Call Homely Kodai directly for availability, guest count, dates, and current tariff.</p>
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
