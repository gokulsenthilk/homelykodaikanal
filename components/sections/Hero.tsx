import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/hero-kodaikanal.png"
        alt="Misty sunrise over Kodaikanal Lake and green hills"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <h1 id="hero-title">Homely Kodai</h1>
        <p>
          Misty hills, lake walks, pine forests, waterfalls, and calm stays shaped into simple trip plans for
          families, couples, and small groups.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/places">
            <span>Explore Places</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link className="button ghost" href="/holiday-packages">
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
