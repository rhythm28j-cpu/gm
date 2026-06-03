import Image from "next/image";
import Button from "@/components/Button";
import logo from "@/app/logo.svg";

const NAV_LINKS = [
  { label: "Mission", href: "#our-story" },
  { label: "Menu", href: "#menu" },
  { label: "Deals", href: "#stellar-savings" },
  { label: "Order", href: "#menu" },
] as const;

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#">
        <Image
          className="navbar__logo"
          src={logo}
          alt="Pepperoni Planet logo"
          width={48}
          height={48}
        />
        <span className="navbar__brand-name">Pepperoni Planet</span>
      </a>

      <nav className="navbar__nav" aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="button button--ghost button--sm"
          >
            {label}
          </a>
        ))}
        <Button variant="primary" size="sm">
          View Cart
        </Button>
      </nav>
    </header>
  );
}
