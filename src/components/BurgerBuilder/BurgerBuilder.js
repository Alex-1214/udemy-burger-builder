import axios from "axios";
import React, { Component } from "react";
import Burger from "../../containers/Burger/Burger";
import BurgerOptions from "../../containers/BurgerOptions/BurgerOptions";
import Modal from "../../Layout/UI/Modal/Modal";
import OrderSummary from "../../containers/BurgerOptions/OrderSummary/OrderSummary";

// import orderSummary from "./BurgerOptions/OrderSummary/OrderSummary";

// const INGREDIENT_PRICE = {
//   meat: 1.8,
//   cheese: 0.75,
//   bacon: 0.8,
//   salad: 0.35,
// };

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
      totalPrice: 4,
      showModal: false,
      purchased: false,
      availableIngrediets: null,
    };
  }

  componentDidMount() {
    this.loadIngredients();
  }

  loadIngredients() {
    console.log("loadIngredients");
    axios
      .get(
        "https://burger-graber-hunger-stopper-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          availableIngrediets: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addedIngredientHandler = (type) => {
    const oldIngredients = { ...this.state.ingredients };
    oldIngredients[type] = oldIngredients[type] + 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + this.state.availableIngrediets[type];

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
    // const data = {
    //   ingredients: this.state.ingredients,
    //   amount: 1,
    //   ordered: new Date(),
    //   customerId: "12345678",
    //   method: "fastest",
    // };

    // axios
    //   .post(
    //     "https://burger-graber-hunger-stopper-default-rtdb.firebaseio.com/orders.json",
    //     data
    //   )
    //   .then((response) => {
    //     this.setState({
    //       purchased: true,
    //       showModal: false,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    this.props.history.push('/checkout');

  };

  removedIngredientHandler = (type) => {
    const oldIngredients = { ...this.state.ingredients };
    oldIngredients[type] = oldIngredients[type] - 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - this.state.availableIngrediets[type];

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
        <Modal
          show={this.state.showModal}
          cancelled={this.cancelPurchaseHandler}
        >
          <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelPurchaseHandler={this.cancelPurchaseHandler}
            orderBurgerHandler={this.orderBurgerHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerOptions
          showModal={this.state.showModal}
          ingredients={this.state.availableIngrediets}
          price={this.state.totalPrice}
          disabled={disabled}
          added={this.addedIngredientHandler}
          removed={this.removedIngredientHandler}
          purchased={this.purchaseBurgerHandler}
          cancelled={this.cancelPurchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
