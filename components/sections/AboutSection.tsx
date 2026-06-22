import Link from "next/link";
import { properties } from "@/data/site";

const aboutPoints = [
  {
    title: "Property-first stays",
    description: "We focus on real Homely Kodai stays, with clear photos, amenities, locations, and direct booking support."
  },
  {
    title: "Trip-aware planning",
    description: "Stay suggestions are matched with sightseeing routes, group size, travel pace, and the kind of Kodai break you want."
  },
  {
    title: "Simple direct contact",
    description: "Share your dates once and get practical help with availability, tariffs, routes, and local stay choices."
  }
];

export function AboutSection() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="about-copy">
        <div className="section-heading">
          <span>About Homely Kodai</span>
          <h2 id="about-title">Local stays and Kodaikanal trip support, kept simple.</h2>
        </div>
        <p>
          Homely Kodai helps families, couples, and groups choose comfortable Kodaikanal stays and shape
          practical hill-station plans around them. Our current stay collection is built around Belle Vue
          Villa and Veranda Luxe Stay, with direct support for availability, guest count, routes, and travel
          timing.
        </p>
        <Link className="button secondary" href="/properties">
          View our properties
        </Link>
      </div>

      <div className="about-details" aria-label="What Homely Kodai helps with">
        <div className="about-stat">
          <strong>{properties.length}</strong>
          <span>Homely Kodai properties</span>
        </div>
        {aboutPoints.map((point) => (
          <article key={point.title}>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
