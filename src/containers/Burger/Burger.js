import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = (props) => {
  let newBurger = true
  const ingredients = Object.keys(props.ingredients).map((item) => {
    return [...Array(props.ingredients[item])].map((_, key) => {
      return <BurgerIngredient key={item + key} type={item} />;
    });
  });
  
  Object.keys(props.ingredients).some((item) => {
    // console.log(item, props.ingredients[item])
    if (props.ingredients[item]> 0){
      newBurger = false;
      return
    }
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {newBurger ? <p className={classes.Info} >Make it juicy!</p> : ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
