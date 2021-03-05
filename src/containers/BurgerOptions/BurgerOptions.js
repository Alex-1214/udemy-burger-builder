import React from "react";
import BurgerOption from "../BurgerOptions/Options/BurgerOption";
import PurchaseButton from "./Purchase/Purchase";
import classes from "./BurgerOptions.module.css";
import Spinner from "../../Layout/UI/Spinner/Spinner";

const options = [
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const burgerOptions = (props) => {
  let ingredientsOptions = null;
  if (props.ingredients) {
    ingredientsOptions = options.map((item) => {
      return (
        <BurgerOption
          key={item.label}
          label={item.label}
          type={item.type}
          disabled={props.disabled[item.type]}
          added={() => props.added(item.type)}
          removed={() => props.removed(item.type)}
        />
      );
    });
  }

  return (
    <div className={classes.BuilderOptions}>
      {props.ingredients ? (
        <React.Fragment>
          <p className={classes.TotalPrice}>
            Total price: <strong>{props.price.toFixed(2)}</strong>
          </p>
          {ingredientsOptions}
          <PurchaseButton ordered={props.purchased} />
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default burgerOptions;
