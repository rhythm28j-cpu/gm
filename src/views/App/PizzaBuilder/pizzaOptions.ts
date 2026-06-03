export const CRUST_OPTIONS = [
  { id: "deep-dish", label: "Meteorite Deep Dish" },
  { id: "thin-crust", label: "Zero-G Thin Crust" },
  { id: "star-ring", label: "Cheesy Star-Ring" },
] as const;

export const EXTRA_CRUST_OPTIONS = [
  { id: "gluten-free", label: "Gluten-Free Galaxy" },
  { id: "stuffed", label: "Stuffed Supernova" },
  { id: "cauliflower", label: "Cauliflower Comet" },
] as const;

export const SAUCE_OPTIONS = [
  { id: "red", label: "Traditional Red", icon: "〰" },
  { id: "spicy", label: "Firebrick Spicy", icon: "✦" },
  { id: "white", label: "White Nebula", icon: "☁" },
  { id: "pesto", label: "Pesto Comet", icon: "❧" },
] as const;

export const EXTRA_SAUCE_OPTIONS = [
  { id: "bbq", label: "BBQ Black Hole", icon: "◉" },
  { id: "garlic", label: "Garlic Gravity", icon: "◎" },
  { id: "buffalo", label: "Buffalo Blast", icon: "✹" },
  { id: "truffle", label: "Truffle Transit", icon: "✧" },
] as const;

export const TOPPING_OPTIONS = [
  { id: "pepperoni", label: "Giant Pepperoni" },
  { id: "cheese", label: "Moon-Dust Cheese" },
  { id: "olives", label: "Black Hole Olives" },
  { id: "jalapenos", label: "Solar Jalapeños" },
  { id: "artichokes", label: "Galactic Artichokes" },
] as const;

export const EXTRA_TOPPING_OPTIONS = [
  { id: "mushrooms", label: "Cosmic Mushrooms" },
  { id: "pineapple", label: "Orbital Pineapple" },
  { id: "bacon", label: "Bacon Meteor" },
  { id: "onions", label: "Nebula Onions" },
  { id: "peppers", label: "Star Bell Peppers" },
  { id: "broccoli", label: "Roasted Broccoli" },
  { id: "basil", label: "Fresh Space Basil" },
  { id: "tomatoes", label: "Red Dwarf Tomatoes" },
] as const;

export type CrustId =
  | (typeof CRUST_OPTIONS)[number]["id"]
  | (typeof EXTRA_CRUST_OPTIONS)[number]["id"];

export type SauceId =
  | (typeof SAUCE_OPTIONS)[number]["id"]
  | (typeof EXTRA_SAUCE_OPTIONS)[number]["id"];

export type ToppingId =
  | (typeof TOPPING_OPTIONS)[number]["id"]
  | (typeof EXTRA_TOPPING_OPTIONS)[number]["id"];

export type CustomizeSelections = {
  crust: CrustId;
  sauce: SauceId;
  toppings: ToppingId[];
};

export const ALL_CRUST_OPTIONS = [...CRUST_OPTIONS, ...EXTRA_CRUST_OPTIONS];
export const ALL_SAUCE_OPTIONS = [...SAUCE_OPTIONS, ...EXTRA_SAUCE_OPTIONS];
export const ALL_TOPPING_OPTIONS = [...TOPPING_OPTIONS, ...EXTRA_TOPPING_OPTIONS];
