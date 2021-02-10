import { object } from "prop-types";
import React, { Component } from "react";
import Burger from "../BurgerBuilder/Burger/Burger";
import BurgerOptions from "../BurgerBuilder/BurgerOptions/BurgerOptions";

const INGREDIENT_PRICE = {
  meat: 1.8,
  cheese: 0.75,
  bacon: 0.8,
  salad: 0.35,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        meat: 0,
        bacon: 0,
        cheese: 0,
        salad: 0,
      },
      totalPrice: 0,
    };
  }

  addedIngredientHandler = (type) => {
    const oldIngredients = { ...this.state.ingredients };
    oldIngredients[type] = oldIngredients[type] + 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICE[type];

    this.setState({
      ingredients: oldIngredients,
      totalPrice: newPrice,
    });
  };

  removedIngredientHandler = (type) => {
    const oldIngredients = { ...this.state.ingredients };
    oldIngredients[type] = oldIngredients[type] - 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];

    this.setState({
      ingredients: oldIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    let disabled = null;

    for (const key in this.state.ingredients) {
      console.log(key);
      disabled = { ...disabled, [key]: this.state.ingredients[key] <= 0 };
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerOptions
          price={this.state.totalPrice}
          disabled={disabled}
          added={this.addedIngredientHandler}
          removed={this.removedIngredientHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
