import type { StaticImageData } from "next/image";
import dealBinaryStar from "@/assets/deal-binary-star.jpg";
import dealSoloExplorer from "@/assets/deal-solo-explorer.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";

export type Deal = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
  imageSrc: StaticImageData;
  imageAlt: string;
};

export const DEALS: Deal[] = [
  {
    id: "binary-star",
    title: "Date Night Duo",
    price: "$24.99",
    description:
      "Two large 3-topping pizzas plus a 2-liter soda. Perfect for sharing.",
    features: ["2 Large Pizzas", "Any 3 Toppings", "Drinks Included"],
    cta: "Claim Offer",
    imageSrc: dealBinaryStar,
    imageAlt: "Pepperoni pizza with a slice being lifted",
  },
  {
    id: "supernova",
    title: "Party Pack",
    price: "$42.00",
    description:
      "Feeds the whole group. 3 pizzas, 2 sides, and 4 drinks. Our best value.",
    features: ["3 Family Pizzas", "Garlic Knots", "Ultimate Value"],
    cta: "Order Party Pack",
    featured: true,
    badge: "Most Popular",
    imageSrc: heroPizza,
    imageAlt: "Classic pepperoni pizza fresh from the oven",
  },
  {
    id: "solo-explorer",
    title: "Solo Slice",
    price: "$12.99",
    description:
      "One medium specialty pizza when you're dining alone. Quick and satisfying.",
    features: [
      "1 Medium Specialty",
      "Ready Fast",
      "Perfect for One",
    ],
    cta: "Claim Offer",
    imageSrc: dealSoloExplorer,
    imageAlt: "Single pizza on a wooden board",
  },
];
