"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import Button from "@/components/Button";
import logo from "@/app/logo.svg";

const NAV_LINKS = [
  { label: "Mission", href: "#our-story" },
  { label: "Menu", href: "#menu" },
  { label: "Deals", href: "#stellar-savings" },
  { label: "Order", href: "#menu" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__bar">
        <a className="navbar__brand" href="#" onClick={closeMenu}>
          <Image
            className="navbar__logo"
            src={logo}
            alt="Pepperoni Planet logo"
            width={48}
            height={48}
          />
          <span className="navbar__brand-name">Pepperoni Planet</span>
        </a>

        <button
          type="button"
          className={`navbar__toggle${isMenuOpen ? " navbar__toggle--open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>
      </div>

      <nav
        id={menuId}
        className={`navbar__nav${isMenuOpen ? " navbar__nav--open" : ""}`}
        aria-label="Main navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="button button--ghost button--sm navbar__link"
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <Button
          variant="primary"
          size="sm"
          className="navbar__cart"
          onClick={closeMenu}
        >
          View Cart
        </Button>
      </nav>
    </header>
  );
}
