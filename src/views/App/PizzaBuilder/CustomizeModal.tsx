"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { TOPPING_IMAGES } from "@/assets/toppingImages";
import {
  calculatePizzaPrice,
  formatAddonPrice,
  formatPizzaPrice,
  TOPPING_PRICES,
} from "./pizzaPricing";
import {
  ALL_CRUST_OPTIONS,
  ALL_SAUCE_OPTIONS,
  ALL_TOPPING_OPTIONS,
  type CrustId,
  type CustomizeSelections,
  type SauceId,
  type ToppingId,
} from "./pizzaOptions";
import "./CustomizeModal.css";

type CustomizeModalProps = {
  isOpen: boolean;
  selections: CustomizeSelections;
  onClose: () => void;
  onChange: (selections: CustomizeSelections) => void;
  onAddToCart: (selections: CustomizeSelections) => void;
};

export default function CustomizeModal({
  isOpen,
  selections,
  onClose,
  onChange,
  onAddToCart,
}: CustomizeModalProps) {
  const toggleTopping = (id: ToppingId) => {
    const nextToppings = selections.toppings.includes(id)
      ? selections.toppings.filter((item) => item !== id)
      : [...selections.toppings, id];

    onChange({ ...selections, toppings: nextToppings });
  };

  const totalPrice = calculatePizzaPrice(selections);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Customize Your Pizza">
      <div className="customize-modal">
        <section className="customize-modal__section" aria-labelledby="modal-crust-heading">
          <h3 id="modal-crust-heading" className="customize-modal__heading">
            Choose Your Crust
          </h3>
          <fieldset className="customize-modal__crust-group">
            <legend className="customize-modal__sr-only">Choose a crust</legend>
            {ALL_CRUST_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`customize-modal__crust-option${
                  selections.crust === option.id
                    ? " customize-modal__crust-option--selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="modal-crust"
                  value={option.id}
                  checked={selections.crust === option.id}
                  onChange={() =>
                    onChange({ ...selections, crust: option.id })
                  }
                  className="customize-modal__crust-input"
                />
                <span className="customize-modal__crust-label">{option.label}</span>
              </label>
            ))}
          </fieldset>
        </section>

        <section className="customize-modal__section" aria-labelledby="modal-sauce-heading">
          <h3 id="modal-sauce-heading" className="customize-modal__heading">
            Choose Your Sauce
          </h3>
          <div
            className="customize-modal__sauce-grid"
            role="group"
            aria-label="Choose a sauce"
          >
            {ALL_SAUCE_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`customize-modal__sauce-option${
                  selections.sauce === option.id
                    ? " customize-modal__sauce-option--selected"
                    : ""
                }`}
                aria-pressed={selections.sauce === option.id}
                onClick={() => onChange({ ...selections, sauce: option.id })}
              >
                <span className="customize-modal__sauce-icon" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="customize-modal__sauce-label">{option.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section
          className="customize-modal__section"
          aria-labelledby="modal-toppings-heading"
        >
          <h3 id="modal-toppings-heading" className="customize-modal__heading">
            Choose Toppings
          </h3>
          <div
            className="customize-modal__toppings"
            role="group"
            aria-label="Choose toppings"
          >
            {ALL_TOPPING_OPTIONS.map((option) => {
              const image = TOPPING_IMAGES[option.id];
              const isSelected = selections.toppings.includes(option.id);

              return (
                <div
                  key={option.id}
                  className={`customize-modal__topping-row${
                    isSelected ? " customize-modal__topping-row--selected" : ""
                  }`}
                >
                  <div className="customize-modal__topping-thumb" aria-hidden="true">
                    {image ? (
                      <Image
                        className="customize-modal__topping-image"
                        src={image}
                        alt=""
                        width={800}
                        height={533}
                        sizes="56px"
                      />
                    ) : (
                      <span className="customize-modal__topping-thumb-fallback">
                        {option.label.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="customize-modal__topping-info">
                    <span className="customize-modal__topping-name">
                      {option.label}
                    </span>
                    <span className="customize-modal__topping-price">
                      {formatAddonPrice(TOPPING_PRICES[option.id])}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="customize-modal__topping-add"
                    aria-pressed={isSelected}
                    aria-label={
                      isSelected ? `Remove ${option.label}` : `Add ${option.label}`
                    }
                    onClick={() => toggleTopping(option.id)}
                  >
                    {isSelected ? "✓" : "+"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <div className="customize-modal__footer">
          <p
            className="customize-modal__price"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="customize-modal__price-label">Total</span>
            <span className="customize-modal__price-value">
              {formatPizzaPrice(totalPrice)}
            </span>
          </p>
          <Button
            variant="primary"
            size="md"
            className="customize-modal__add-to-cart"
            onClick={() => onAddToCart(selections)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Modal>
  );
}
