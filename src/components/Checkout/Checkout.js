import React, { Component } from "react";
import Burger from "../../containers/Burger/Burger";
import OrderSummary from "../../containers/BurgerOptions/OrderSummary/OrderSummary";

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 20
  };

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }

    this.setState({
      ingredients: ingredients
    })
  }

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
