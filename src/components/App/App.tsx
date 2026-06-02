import Hero from "./Hero";
import Navbar from "./Navbar";
import OurStory from "./OurStory";
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
      <OurStory />
      <Footer />
    </div>
  );
}
