import Image from "next/image";
import Button from "@/components/Button";
import logo from "@/app/logo.svg";

const NAV_ITEMS = [
  { label: "Galactic Menu", variant: "ghost" as const },
  { label: "Launch Tracker", variant: "ghost" as const },
  { label: "Beam to Cart", variant: "primary" as const },
];

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
          priority
        />
        <span className="navbar__brand-name">Pepperoni Planet</span>
      </a>

      <nav className="navbar__nav" aria-label="Main navigation">
        {NAV_ITEMS.map(({ label, variant }) => (
          <Button key={label} variant={variant} size="sm">
            {label}
          </Button>
        ))}
      </nav>
    </header>
  );
}
