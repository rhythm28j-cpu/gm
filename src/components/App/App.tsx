import Hero from "./Hero";
import Navbar from "./Navbar";
import PizzaBuilder from "./PizzaBuilder";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PizzaBuilder />
    </div>
  );
}
