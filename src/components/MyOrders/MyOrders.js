import React, { Component } from "react";
import axios from "../../axios-burger";
import Card from "../../Layout/UI/Card/Card";

import classes from "./MyOrders.module.css";

class MyOrders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        let orders = [];
        Object.keys(response.data).map((key) => {
          orders.push({ ...response.data[key], id: key });
        });
        this.setState({
          orders: orders,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let orders = this.state.orders.map((order) => <Card ordered={order.ordered} ingredients={order.ingredients} id={order.id} />);
    return (
      <div className={classes.MyOrders}>
        <h2>Your Burgers</h2>
        <h4>This week</h4>
        <div className={classes.Cards}>
        {orders}
        </div>
        
      </div>
    );
  }
}

export default MyOrders;
