import React from "react";

import modalclasses from '../../../Layout/UI/Modal/Modal.module.css'

const orderSummary = (props) => (
  <div>
    <div className={modalclasses.ModalLabel}>This is a burger detail</div>
    <ul>
      {Object.keys(props.ingredients).map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>

    <p className={modalclasses.ModalLabel}>
      Total price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    <div className={modalclasses.ModalButton}>
      <button
        className={[modalclasses.CancelButton, modalclasses.ModalButton].join(
          " "
        )}
        onClick={props.cancelPurchaseHandler}
      >
        Cancel
      </button>
      <button
        className={[modalclasses.OrderButton, modalclasses.ModalButton].join(
          " "
        )}
        onClick={props.orderBurgerHandler}
      >
        Order
      </button>
    </div>
  </div>
);

export default orderSummary;
