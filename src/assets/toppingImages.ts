import type { StaticImageData } from "next/image";
import type { ToppingId } from "@/views/App/PizzaBuilder/pizzaOptions";
import artichokes from "@/assets/artichokes.avif";
import baconMeteor from "@/assets/bacon-meteor.avif";
import blackHoleOlives from "@/assets/black-hole-olives.avif";
import cosmicMushrooms from "@/assets/cosmic-mushrooms.avif";
import freshSpaceBasil from "@/assets/fresh-space-basil.avif";
import giantPepperoni from "@/assets/giant-pepperoni.avif";
import moonDustCheese from "@/assets/moon-dust-cheese.avif";
import nebulaOnions from "@/assets/nebula-onions.avif";
import orbitalPineapple from "@/assets/orbital-pineapple.avif";
import roastedBroccoli from "@/assets/roasted-broccoli.avif";
import solarJalapenos from "@/assets/solar-jalapenos.avif";
import starBellPeppers from "@/assets/star-bell-peppers.avif";
import tomatoes from "@/assets/tomatoes.avif";

export const TOPPING_IMAGES: Partial<Record<ToppingId, StaticImageData>> = {
  pepperoni: giantPepperoni,
  cheese: moonDustCheese,
  olives: blackHoleOlives,
  jalapenos: solarJalapenos,
  artichokes,
  mushrooms: cosmicMushrooms,
  pineapple: orbitalPineapple,
  bacon: baconMeteor,
  onions: nebulaOnions,
  peppers: starBellPeppers,
  broccoli: roastedBroccoli,
  basil: freshSpaceBasil,
  tomatoes,
};
