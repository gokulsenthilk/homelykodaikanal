import { tripHighlights } from "@/data/site";

export function IntroStrip() {
  return (
    <section className="intro-strip" aria-label="Trip highlights">
      {tripHighlights.map((highlight) => (
        <div key={highlight.title}>
          <strong>{highlight.title}</strong>
          <span>{highlight.description}</span>
        </div>
      ))}
    </section>
  );
}
