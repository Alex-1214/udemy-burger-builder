import React from "react";

import classes from "./OrderSummary.module.css";

const orderSummary = (props) => (
  <div>
    <h2>Smack'dat</h2>
    <h4>Your burger is made with </h4>

    <div className={classes.Ingredients}>
      <ul>
        {Object.keys(props.ingredients).map((item) => {
          return (<li key={item}>
            <label>
            {item}
              </label>
              <div className={classes.IngAmount}>{props.ingredients[item]} pc.</div>
            </li>)
        })}
      </ul>
    </div>
    <h4 className={classes.Price}>Total price</h4>
    <h2 className={classes.Price}>{props.totalPrice.toFixed(2)}</h2>
    <div className={classes.ModalButton}>
      <button
        className={[classes.OrderButton, classes.ModalButton].join(" ")}
        onClick={props.orderBurgerHandler}
      >
        Order
      </button>
      <button
        className={[classes.CancelButton, classes.ModalButton].join(" ")}
        onClick={props.cancelPurchaseHandler}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default orderSummary;
