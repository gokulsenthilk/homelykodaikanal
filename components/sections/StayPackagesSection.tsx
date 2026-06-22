import Image from "next/image";
import Link from "next/link";
import { properties, stayPackages } from "@/data/site";

const stayPackageProperties = properties.filter((property) =>
  stayPackages.some((stayPackage) => stayPackage.propertySlug === property.slug)
);

export function StayPackagesSection() {
  return (
    <section className="section stay-section" id="stay-packages" aria-labelledby="stay-title">
      <div className="stay-media property-stay-media">
        {stayPackageProperties.map((property, index) => (
          <Link
            className={["stay-property-photo", index === 0 ? "large" : ""].filter(Boolean).join(" ")}
            href={`/properties/${property.slug}`}
            key={property.slug}
          >
            <Image
              src={property.image}
              alt={property.imageAlt}
              width={760}
              height={620}
              sizes="(max-width: 940px) 100vw, 42vw"
            />
            <span>{property.name}</span>
          </Link>
        ))}
      </div>
      <div className="stay-content">
        <div className="section-heading">
          <span>Stay packages for Kodaikanal</span>
          <h2 id="stay-title">Choose the stay style that matches your trip mood.</h2>
        </div>

        <div className="stay-list">
          {stayPackages.map((stayPackage) => (
            <article className="stay-card" key={stayPackage.name}>
              <div>
                <h3>{stayPackage.name}</h3>
                <p>{stayPackage.description}</p>
                <Link className="text-link" href={`/properties/${stayPackage.propertySlug}`}>
                  View property
                </Link>
              </div>
              <strong>{stayPackage.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
