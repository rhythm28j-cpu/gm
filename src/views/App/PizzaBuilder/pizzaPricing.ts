import type { CustomizeSelections } from "./pizzaOptions";

export const BASE_PIZZA_PRICE = 12.99;

export const CRUST_PRICES = {
  "deep-dish": 2.5,
  "thin-crust": 0,
  "star-ring": 1.5,
  "gluten-free": 2,
  "stuffed": 3,
  "cauliflower": 2.5,
} as const;

export const SAUCE_PRICES = {
  red: 0,
  spicy: 0.5,
  white: 1,
  pesto: 1.5,
  bbq: 1,
  garlic: 0.75,
  buffalo: 0.75,
  truffle: 2,
} as const;

export const TOPPING_PRICES = {
  pepperoni: 1.5,
  cheese: 1,
  olives: 1,
  jalapenos: 0.75,
  artichokes: 1.75,
  mushrooms: 1.25,
  pineapple: 1,
  bacon: 2,
  onions: 0.75,
  peppers: 1,
  broccoli: 1.5,
  basil: 0.5,
  tomatoes: 0.75,
} as const;

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function calculatePizzaPrice(selections: CustomizeSelections): number {
  const crustPrice = CRUST_PRICES[selections.crust];
  const saucePrice = SAUCE_PRICES[selections.sauce];
  const toppingsPrice = selections.toppings.reduce(
    (total, id) => total + TOPPING_PRICES[id],
    0,
  );

  return BASE_PIZZA_PRICE + crustPrice + saucePrice + toppingsPrice;
}

export function formatPizzaPrice(price: number): string {
  return priceFormatter.format(price);
}

export function formatAddonPrice(price: number): string {
  return `+${formatPizzaPrice(price)}`;
}
