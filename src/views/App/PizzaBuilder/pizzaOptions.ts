export const CRUST_OPTIONS = [
  { id: "deep-dish", label: "Deep Dish" },
  { id: "thin-crust", label: "Thin Crust" },
  { id: "star-ring", label: "Cheesy Stuffed Crust" },
] as const;

export const EXTRA_CRUST_OPTIONS = [
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "stuffed", label: "Stuffed Crust" },
  { id: "cauliflower", label: "Cauliflower Crust" },
] as const;

export const SAUCE_OPTIONS = [
  { id: "red", label: "Traditional Red", icon: "〰" },
  { id: "spicy", label: "Spicy Red", icon: "✦" },
  { id: "white", label: "White Sauce", icon: "☁" },
  { id: "pesto", label: "Pesto", icon: "❧" },
] as const;

export const EXTRA_SAUCE_OPTIONS = [
  { id: "bbq", label: "BBQ", icon: "◉" },
  { id: "garlic", label: "Garlic", icon: "◎" },
  { id: "buffalo", label: "Buffalo", icon: "✹" },
  { id: "truffle", label: "Truffle", icon: "✧" },
] as const;

export const TOPPING_OPTIONS = [
  { id: "pepperoni", label: "Pepperoni" },
  { id: "cheese", label: "Extra Cheese" },
  { id: "olives", label: "Black Olives" },
  { id: "jalapenos", label: "Jalapeños" },
  { id: "artichokes", label: "Artichokes" },
] as const;

export const EXTRA_TOPPING_OPTIONS = [
  { id: "mushrooms", label: "Mushrooms" },
  { id: "pineapple", label: "Pineapple" },
  { id: "bacon", label: "Bacon" },
  { id: "onions", label: "Onions" },
  { id: "peppers", label: "Bell Peppers" },
  { id: "broccoli", label: "Roasted Broccoli" },
  { id: "basil", label: "Fresh Basil" },
  { id: "tomatoes", label: "Tomatoes" },
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
