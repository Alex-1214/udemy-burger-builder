import React, { Component } from "react";
import Burger from "../../containers/Burger/Burger";
import OrderSummary from "../../containers/BurgerOptions/OrderSummary/OrderSummary";

class Checkout extends Component {
  state = {
    ingredients: { meat: 1, salad: 1, bacon: 1, cheese: 1 },
    totalPrice: 20
  };

  render() {
    return(
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>;
      </div>
    ) 
  }
}

export default Checkout;
