import Hero from "./Hero";
import Navbar from "./Navbar";
import PizzaBuilder from "./PizzaBuilder";
import StellarSavings from "./StellarSavings";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PizzaBuilder />
      <StellarSavings />
      <Footer />
    </div>
  );
}
