import { contactHref, contactNumber } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>Homely Kodai</span>
      <a href={contactHref}>{contactNumber}</a>
      <span>Lake walks. Forest mornings. Slow hill-station stays.</span>
    </footer>
  );
}
