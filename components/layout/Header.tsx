"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  const headerClassName = ["site-header", isScrolled ? "scrolled" : "", isMenuOpen ? "menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <Link className="brand" href="/" aria-label="Homely Kodai home">
        <span className="brand-mark" aria-hidden="true">
          <Image src="/images/homely-logo.png" alt="" width={40} height={40} priority />
        </span>
        <span>Homely Kodai</span>
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
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={isActive ? "location" : undefined}
              className={isActive ? "active" : undefined}
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
