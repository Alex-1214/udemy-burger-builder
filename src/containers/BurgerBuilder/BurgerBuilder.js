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
      showModal: false,
      purchased: false,
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

  purchaseModalHandler = () => {
    this.setState({
      showModal: true,
    });
  };

  cancelPurchaseHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  purchaseBurgerHandler = () => {
    this.setState({
      showModal: true,
    });
  };

  orderBurgerHandler = () => {
    this.setState({
      purchased: true,
      showModal: false,
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
      disabled = { ...disabled, [key]: this.state.ingredients[key] <= 0 };
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerOptions
          showModal={this.state.showModal}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          disabled={disabled}
          added={this.addedIngredientHandler}
          removed={this.removedIngredientHandler}
          purchased={this.purchaseBurgerHandler}
          cancelled={this.cancelPurchaseHandler}
          ordered={this.orderBurgerHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
