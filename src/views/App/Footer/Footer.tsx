import Image from "next/image";
import logo from "@/app/logo.svg";
import SocialIcon from "./SocialIcons";
import "./Footer.css";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "Mission", href: "#" },
      { label: "Franchise", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Galactic Support", href: "#" },
      { label: "Track Order", href: "#" },
      { label: "Safety Protocols", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
  { label: "X", href: "#", icon: "x" as const },
] as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__brand-link" href="#">
              <Image
                className="footer__logo"
                src={logo}
                alt=""
                width={40}
                height={40}
              />
              <span className="footer__brand-name">Pepperoni Planet</span>
            </a>
            <p className="footer__tagline">
              One small slice for man, one giant pie for mankind!
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {FOOTER_LINKS.map((column) => (
              <div key={column.title} className="footer__column">
                <h3 className="footer__column-title">{column.title}</h3>
                <ul className="footer__link-list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="footer__link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Pepperoni Planet. All systems go.
          </p>
          <div className="footer__social" role="list">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                className="footer__social-link"
                href={item.href}
                aria-label={item.label}
                role="listitem"
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
