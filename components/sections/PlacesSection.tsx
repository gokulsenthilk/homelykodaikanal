import Image from "next/image";
import Link from "next/link";
import { getPlaces } from "@/lib/places";

export async function PlacesSection() {
  const places = await getPlaces({ limit: 6 });
  const [featuredPlace, ...regularPlaces] = places;

  if (!featuredPlace) {
    return (
      <section className="section places-section" id="places" aria-labelledby="places-title">
        <div className="section-heading">
          <span>Places to visit in Kodaikanal</span>
          <h2 id="places-title">A hill-station route with lake air, forest shade, and valley views.</h2>
        </div>
        <div className="empty-state">
          Add place records in Supabase to show Kodaikanal destinations here.
        </div>
      </section>
    );
  }

  return (
    <section className="section places-section" id="places" aria-labelledby="places-title">
      <div className="section-heading">
        <span>Places to visit in Kodaikanal</span>
        <h2 id="places-title">A hill-station route with lake air, forest shade, and valley views.</h2>
      </div>

      <div className="places-layout">
        <article className="place-feature">
          {featuredPlace.image ? (
            <Image
              src={featuredPlace.image}
              alt={featuredPlace.imageAlt ?? featuredPlace.name}
              width={760}
              height={620}
              sizes="(max-width: 940px) 100vw, 44vw"
            />
          ) : null}
          <div>
            <h3>{featuredPlace.name}</h3>
            <p>{featuredPlace.description}</p>
          </div>
        </article>

        <div className="place-grid">
          {regularPlaces.map((place) => (
            <article
              className={["place-card", place.image ? "" : "text-card", place.wide ? "wide" : ""]
                .filter(Boolean)
                .join(" ")}
              key={place.name}
            >
              {place.image ? (
                <Image
                  src={place.image}
                  alt={place.imageAlt ?? place.name}
                  width={640}
                  height={360}
                  sizes="(max-width: 640px) 100vw, (max-width: 940px) 50vw, 28vw"
                />
              ) : null}
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-actions">
        <Link className="button secondary" href="/places">
          View all places
        </Link>
      </div>
    </section>
  );
}
