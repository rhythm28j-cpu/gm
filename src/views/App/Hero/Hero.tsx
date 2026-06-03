import Image from "next/image";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import heroPizza from "@/assets/hero-pizza.jpg";

const HERO_CONTENT = {
  badge: "Limited time offer",
  titleLead: "The",
  titleHighlight: "Perfect Pie",
  titleTrail: "Is Here.",
  description:
    "Hand-tossed crust, generous pepperoni, and fresh ingredients — pizza the way it should be.",
  dealNote: "Combo special — $24.99",
  primaryCta: "Order Now",
  secondaryCta: "Our Story",
};

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <Badge variant="primary" className="hero__badge">
            <span aria-hidden="true">🍕</span> {HERO_CONTENT.badge}
          </Badge>

          <h1 id="hero-heading" className="hero__heading">
            {HERO_CONTENT.titleLead}{" "}
            <span className="hero__heading-accent">
              {HERO_CONTENT.titleHighlight}
            </span>{" "}
            {HERO_CONTENT.titleTrail}
          </h1>

          <p className="hero__description">{HERO_CONTENT.description}</p>

          <p className="hero__deal-note">{HERO_CONTENT.dealNote}</p>

          <div className="hero__actions">
            <Button variant="primary" size="md" className="hero__cta-primary">
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button variant="ghost" size="md" className="hero__cta-secondary">
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__diamond">
            <div className="hero__diamond-glow" />
            <div className="hero__diamond-frame">
              <Image
                className="hero__diamond-image"
                src={heroPizza}
                alt=""
                width={900}
                height={900}
                sizes="(max-width: 48rem) min(90vw, 18rem), min(36rem, 42vw)"
                priority
              />
            </div>
            <ul className="hero__sparkles">
              {Array.from({ length: 6 }, (_, i) => (
                <li key={i} className="hero__sparkle" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
