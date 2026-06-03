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
    title: "Binary Star Bundle",
    price: "$24.99",
    description:
      "Two large 3-topping pizzas plus a 2-liter Nebula Nectar. Perfect for pairs.",
    features: ["2 Large Pizzas", "Any 3 Toppings", "Drinks Included"],
    cta: "Claim Offer",
    imageSrc: dealBinaryStar,
    imageAlt: "Pepperoni pizza with a slice being lifted",
  },
  {
    id: "supernova",
    title: "Supernova Party Box",
    price: "$42.00",
    description:
      "Feeds a whole crew. 3 pizzas, 2 sides, and 4 drinks. Total fuel saturation.",
    features: ["3 Family Pizzas", "Garlic Stardust Knots", "Ultimate Value"],
    cta: "Fuel the Crew",
    featured: true,
    badge: "Most Popular",
    imageSrc: heroPizza,
    imageAlt: "Classic pepperoni pizza fresh from the oven",
  },
  {
    id: "solo-explorer",
    title: "Solo Explorer",
    price: "$12.99",
    description:
      "Medium specialty pizza for the lone voyager. Perfect for light exploration.",
    features: [
      "1 Medium Specialty",
      "Rapid Deployment",
      "Single Voyager Size",
    ],
    cta: "Claim Offer",
    imageSrc: dealSoloExplorer,
    imageAlt: "Single pizza on a wooden board",
  },
];
