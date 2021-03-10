import React from "react";
import moment from "moment";
import Logo from "../../UI/Logo/Logo";

import classes from "./Card.module.css";

const card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.BurgerLogo}>
        <Logo />
      </div>
      <div className={classes.Ingredients}>
        <ul>
          {Object.keys(props.ingredients).map((item) => {
            return (
              <li key={item}>
                <label>{item}</label>
                <div className={classes.IngAmount}>
                  {props.ingredients[item]} pc.
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <p>{moment(props.ordered).format("MMMM Do YYYY, h:mm:ss")}</p>
      <div className={classes.Rating}>here is rating</div>
    </div>
  );
};

export default card;
