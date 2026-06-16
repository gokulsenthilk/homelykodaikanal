"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const headerClassName = ["site-header", isScrolled ? "scrolled" : "", isMenuOpen ? "menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <Link className="brand" href="/#home" aria-label="Kodaikanal Tourism home">
        <span className="brand-mark">K</span>
        <span>Kodaikanal Tourism</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
