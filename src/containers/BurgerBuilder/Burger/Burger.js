import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = (props) => {
  const ingredients = Object.keys(props.ingredients).map((item) => {
    return [...Array(props.ingredients[item])].map((_, key) => {
      return <BurgerIngredient key={item + key} type={item} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
