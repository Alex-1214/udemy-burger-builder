import React from "react";
import BurgerOption from "../BurgerOptions/Options/BurgerOption";
import PurchaseButton from './Purchase/Purchase'
import Modal from '../../../Layout/UI/Modal/Modal'

import classes from "./BurgerOptions.module.css";
import modalclasses from '../../../Layout/UI/Modal/Modal.module.css'

const options = [
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const burgerOptions = (props) => {
  const ingredientsOptions = options.map((item) => {
    return (
      <BurgerOption
        key={item.label}
        label={item.label}
        type={item.type}
        disabled={props.disabled[item.type]}
        added={() => props.added(item.type)}
        removed={() => props.removed(item.type)}
      />
    );
  });

  return (
    <div className={classes.BuilderOptions}>
      <Modal show={props.showModal} cancelled={props.cancelled}>
        <div className={modalclasses.ModalLabel}>This is a burger detail</div>
        <ul>
          {Object.keys(props.ingredients).map(item =>{
            return <li key={item}>{item}</li>
          })}
        </ul>

        <p className={modalclasses.ModalLabel}>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
        <div className={modalclasses.ModalButton}>
        <button className={[modalclasses.CancelButton, modalclasses.ModalButton].join(' ')} onClick={props.cancelled}>Cancel</button>
        <button className={[modalclasses.OrderButton,modalclasses.ModalButton].join(' ')} onClick={props.ordered}>Order</button>
        </div>
        
      </Modal>
      <p className={classes.TotalPrice}>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {ingredientsOptions}
      <PurchaseButton ordered={props.purchased}/>
    </div>
  );
};

export default burgerOptions;
