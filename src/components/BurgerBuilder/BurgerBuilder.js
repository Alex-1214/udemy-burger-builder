import axios from "../../axios-burger";
import React, { Component } from "react";
import Burger from "../../containers/Burger/Burger";
import BurgerOptions from "../../containers/BurgerOptions/BurgerOptions";
import Modal from "../../Layout/UI/Modal/Modal";
import OrderSummary from "../../containers/BurgerOptions/OrderSummary/OrderSummary";
import Button from "../../Layout/UI/Button/Button";

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
    axios
      .get("/ingredients.json")
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
    let param = Object.keys(this.state.ingredients).map((key) => {
      return [
        ...[
          encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.state.ingredients[key]),
        ],
      ];
    });

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + param.join("&"),
    });
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
          >
            <Button type={"positive"} clicked={this.orderBurgerHandler}>
              Checkout
            </Button>
            <Button type={"negative"} clicked={this.cancelPurchaseHandler}>
              Cancel
            </Button>
          </OrderSummary>
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
