import Image from "next/image";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { DEALS, type Deal } from "./deals";

type DealCardProps = {
  deal: Deal;
};

function DealCard({ deal }: DealCardProps) {
  return (
    <Card className="stellar-savings__card">
      <div className="stellar-savings__image-wrap">
        <Image
          className="stellar-savings__image"
          src={deal.imageSrc}
          alt={deal.imageAlt}
          width={400}
          height={267}
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        {deal.badge && (
          <Badge variant="primary" className="stellar-savings__badge">
            {deal.badge}
          </Badge>
        )}
      </div>

      <div className="stellar-savings__body">
        <div className="stellar-savings__title-row">
          <h3 className="stellar-savings__deal-title">{deal.title}</h3>
          <span className="stellar-savings__price">{deal.price}</span>
        </div>

        <p className="stellar-savings__description">{deal.description}</p>

        <ul className="stellar-savings__features">
          {deal.features.map((feature) => (
            <li key={feature} className="stellar-savings__feature">
              {feature}
            </li>
          ))}
        </ul>

        <Button variant="ghost" size="md" className="stellar-savings__cta">
          {deal.cta}
        </Button>
      </div>
    </Card>
  );
}

export default function StellarSavings() {
  return (
    <section id="stellar-savings" className="stellar-savings" aria-labelledby="stellar-savings-heading">
      <header className="stellar-savings__header">
        <h2 id="stellar-savings-heading" className="stellar-savings__title">
          Deals & Specials
        </h2>
        <p className="stellar-savings__subtitle">
          Great bundles for date night, parties, or a quick meal on your own.
        </p>
      </header>

      <div className="stellar-savings__grid">
        {DEALS.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
