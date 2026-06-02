"use client";

import { useState, type ReactNode } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CustomizeModal, { type CustomizeSelections } from "./CustomizeModal";
import {
  CRUST_OPTIONS,
  SAUCE_OPTIONS,
  TOPPING_OPTIONS,
  type CrustId,
  type SauceId,
  type ToppingId,
} from "./pizzaOptions";
import "./PizzaBuilder.css";

type BuilderStepCardProps = {
  step: number;
  title: string;
  className?: string;
  children: ReactNode;
};

function BuilderStepCard({
  step,
  title,
  className = "",
  children,
}: BuilderStepCardProps) {
  const classes = ["pizza-builder__card", className].filter(Boolean).join(" ");

  return (
    <Card className={classes}>
      <div className="pizza-builder__card-head">
        <Badge variant="accent" className="pizza-builder__step">
          {step}
        </Badge>
        <h3 className="pizza-builder__card-title">{title}</h3>
      </div>
      {children}
    </Card>
  );
}

type CrustCardProps = {
  value: CrustId;
  onChange: (id: CrustId) => void;
};

function CrustCard({ value, onChange }: CrustCardProps) {
  return (
    <BuilderStepCard step={1} title="Core Crust">
      <fieldset className="pizza-builder__crust-group">
        <legend className="pizza-builder__sr-only">Choose a crust</legend>
        {CRUST_OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`pizza-builder__crust-option${
              value === option.id ? " pizza-builder__crust-option--selected" : ""
            }`}
          >
            <input
              type="radio"
              name="crust"
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="pizza-builder__crust-input"
            />
            <span className="pizza-builder__crust-label">{option.label}</span>
          </label>
        ))}
      </fieldset>
    </BuilderStepCard>
  );
}

type SauceCardProps = {
  value: SauceId;
  onChange: (id: SauceId) => void;
};

function SauceCard({ value, onChange }: SauceCardProps) {
  return (
    <BuilderStepCard step={2} title="Plasma Sauce">
      <div className="pizza-builder__sauce-grid" role="group" aria-label="Choose a sauce">
        {SAUCE_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`pizza-builder__sauce-option${
              value === option.id ? " pizza-builder__sauce-option--selected" : ""
            }`}
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            <span className="pizza-builder__sauce-icon" aria-hidden="true">
              {option.icon}
            </span>
            <span className="pizza-builder__sauce-label">{option.label}</span>
          </button>
        ))}
      </div>
    </BuilderStepCard>
  );
}

type ToppingsCardProps = {
  selected: ToppingId[];
  onToggle: (id: ToppingId) => void;
  onAddMore: () => void;
};

function ToppingsCard({ selected, onToggle, onAddMore }: ToppingsCardProps) {
  return (
    <BuilderStepCard
      step={3}
      title="Asteroid Toppings"
      className="pizza-builder__card--toppings"
    >
      <div className="pizza-builder__toppings" role="group" aria-label="Choose toppings">
        {TOPPING_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`pizza-builder__topping${
              selected.includes(option.id) ? " pizza-builder__topping--selected" : ""
            }`}
            aria-pressed={selected.includes(option.id)}
            onClick={() => onToggle(option.id)}
          >
            {option.label}
          </button>
        ))}
        <button
          type="button"
          className="pizza-builder__topping pizza-builder__topping--add"
          onClick={onAddMore}
          aria-haspopup="dialog"
        >
          + Add More
        </button>
      </div>
      <Button variant="primary" size="md" className="pizza-builder__finalize">
        Finalize Trajectory
      </Button>
    </BuilderStepCard>
  );
}

export default function PizzaBuilder() {
  const [crust, setCrust] = useState<CrustId>("thin-crust");
  const [sauce, setSauce] = useState<SauceId>("spicy");
  const [toppings, setToppings] = useState<ToppingId[]>(["pepperoni"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSelections, setModalSelections] = useState<CustomizeSelections>({
    crust: "thin-crust",
    sauce: "spicy",
    toppings: ["pepperoni"],
  });

  const toggleTopping = (id: ToppingId) => {
    setToppings((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const openCustomizeModal = () => {
    setModalSelections({ crust, sauce, toppings });
    setIsModalOpen(true);
  };

  const closeCustomizeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (selections: CustomizeSelections) => {
    setCrust(selections.crust);
    setSauce(selections.sauce);
    setToppings(selections.toppings);
    setIsModalOpen(false);
  };

  return (
    <section className="pizza-builder" aria-labelledby="pizza-builder-heading">
      <header className="pizza-builder__header">
        <h2 id="pizza-builder-heading" className="pizza-builder__title">
          Craft Your Comet
        </h2>
        <p className="pizza-builder__subtitle">
          Engineered exactly how you orbit.
        </p>
        <hr className="pizza-builder__divider" />
      </header>

      <div className="pizza-builder__grid">
        <CrustCard value={crust} onChange={setCrust} />
        <SauceCard value={sauce} onChange={setSauce} />
        <ToppingsCard
          selected={toppings}
          onToggle={toggleTopping}
          onAddMore={openCustomizeModal}
        />
      </div>

      <CustomizeModal
        isOpen={isModalOpen}
        selections={modalSelections}
        onClose={closeCustomizeModal}
        onChange={setModalSelections}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
}
