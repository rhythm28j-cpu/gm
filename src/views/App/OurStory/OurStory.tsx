const MISSION_STATEMENT =
  "Started in 1984 by Jack Meach, this mom and pop pizza shop has become a destination for pie lovers around the world, attracting customers with its delicious pepperoni pizzas and unique flavors. With a commitment to quality and a passion for pizza, Pepperoni Planet has expanded its menu to include a variety of specialty pizzas, appetizers, and desserts. Whether you're a fan of classic pepperoni or looking to try something new, there's something on the menu for everyone.";

export default function OurStory() {
  return (
    <section id="our-story" className="our-story" aria-labelledby="our-story-heading">
      <div className="our-story__inner">
        <h2 id="our-story-heading" className="our-story__title">
          Our Story
        </h2>
        <p className="our-story__text">{MISSION_STATEMENT}</p>
      </div>
    </section>
  );
}
