import dynamic from "next/dynamic";
import Hero from "./Hero";
import Navbar from "./Navbar";
import OurStory from "./OurStory";
import StellarSavings from "./StellarSavings";
import Footer from "./Footer";

const PizzaBuilder = dynamic(() => import("./PizzaBuilder"), {
  loading: () => (
    <section
      id="menu"
      className="pizza-builder"
      aria-busy="true"
      aria-labelledby="pizza-builder-heading"
    >
      <header className="pizza-builder__header">
        <h2 id="pizza-builder-heading" className="pizza-builder__title">
          Build Your Pizza
        </h2>
        <p className="pizza-builder__subtitle">
          Fresh, customizable, and made just for you.
        </p>
      </header>
    </section>
  ),
});

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PizzaBuilder />
      <StellarSavings />
      <OurStory />
      <Footer />
    </div>
  );
}
