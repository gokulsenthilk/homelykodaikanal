import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPlaces } from "@/lib/places";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Places to Visit",
  description:
    "Browse all Kodaikanal places to visit, including lakes, viewpoints, forests, temples, caves, parks, and waterfall stops."
};

export default async function PlacesPage() {
  const places = await getPlaces();

  return (
    <>
      <Header />
      <main className="places-page">
        <section className="places-hero" aria-labelledby="all-places-title">
          <span>Places to visit in Kodaikanal</span>
          <h1 id="all-places-title">Lakes, viewpoints, forests, caves, temples, and slow mountain walks.</h1>
          <p>
            A fuller sightseeing list inspired by popular traveller routes around Kodaikanal, from the lake
            circuit to quieter countryside drives.
          </p>
          <Link className="button primary" href="/#holiday-packages">
            Plan this trip
          </Link>
        </section>

        <section className="section all-places-section" aria-label="All Kodaikanal places">
          {places.length ? (
            <div className="all-places-grid">
              {places.map((place, index) => (
                <article className="place-list-card" key={place.name}>
                  {place.image ? (
                    <Image
                      src={place.image}
                      alt={place.imageAlt ?? place.name}
                      width={560}
                      height={360}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="place-list-card-mark" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  )}
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h2>{place.name}</h2>
                    <p>{place.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              Add place records in Supabase to show Kodaikanal destinations here.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
