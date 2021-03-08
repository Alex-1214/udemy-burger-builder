import React from "react";

import classes from './OrderSummary.module.css'

const orderSummary = (props) => (
  <div>
    <div className={classes.Title}>Smack'dat</div>
    <ul>
      {Object.keys(props.ingredients).map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>

    <p className={classes.ModalLabel}>
      Total price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    <div className={classes.ModalButton}>

      <button
        className={[classes.OrderButton, classes.ModalButton].join(
          " "
        )}
        onClick={props.orderBurgerHandler}
      >
        Order
      </button>
      <button
        className={[classes.CancelButton, classes.ModalButton].join(
          " "
        )}
        onClick={props.cancelPurchaseHandler}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default orderSummary;
