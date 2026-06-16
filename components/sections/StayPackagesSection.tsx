import Image from "next/image";
import { stayPackages } from "@/data/site";

export function StayPackagesSection() {
  return (
    <section className="section stay-section" id="stay-packages" aria-labelledby="stay-title">
      <div className="stay-media">
        <Image
          src="/images/hillside-cottages.png"
          alt="Cottages in Kodaikanal with gardens and misty valley views"
          width={760}
          height={950}
          sizes="(max-width: 940px) 100vw, 42vw"
        />
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
              </div>
              <strong>{stayPackage.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
