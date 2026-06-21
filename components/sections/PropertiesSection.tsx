import Image from "next/image";
import Link from "next/link";
import { contactHref, contactNumber, properties } from "@/data/site";

export function PropertiesSection() {
  return (
    <section className="section properties-section" id="properties" aria-labelledby="properties-title">
      <div className="section-heading split-heading">
        <div>
          <span>Homely Kodai properties</span>
          <h2 id="properties-title">Two stays, one direct booking contact.</h2>
        </div>
        <a className="button secondary" href={contactHref}>
          Call {contactNumber}
        </a>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <article className="property-card" key={property.slug}>
            <div className="property-card-media">
              <Image
                src={property.image}
                alt={property.imageAlt}
                width={720}
                height={520}
                sizes="(max-width: 760px) 100vw, 45vw"
              />
              <span>{property.status === "available" ? "Available now" : "Coming soon"}</span>
            </div>
            <div className="property-card-body">
              <span>{property.eyebrow}</span>
              <h3>{property.name}</h3>
              <p>{property.summary}</p>
              <div className="property-facts">
                {property.facts.slice(0, 3).map((fact) => (
                  <div key={fact.label}>
                    <strong>{fact.label}</strong>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>
              <div className="property-actions">
                {property.status === "available" ? (
                  <Link className="button primary" href={`/properties/${property.slug}`}>
                    View details
                  </Link>
                ) : (
                  <a className="button primary" href={contactHref}>
                    Ask for details
                  </a>
                )}
                {property.mapUrl ? (
                  <a className="text-link" href={property.mapUrl} target="_blank" rel="noreferrer">
                    Open map
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
