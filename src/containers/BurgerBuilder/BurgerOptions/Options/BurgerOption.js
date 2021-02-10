import React from "react";

import classes from "./BurgerOption.module.css";

const burgerOption = (props) => {
  return (
    <div className={classes.Option}>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.OptionButtons}>
        <button
          className={
            props.disabled ? classes.LessButtonDisable : classes.LessButton
          }
          onClick={props.removed}
          disabled={props.disabled}
        >
          Less
        </button>
        <button className={classes.MoreButton} onClick={props.added}>
          More
        </button>
      </div>
    </div>
  );
};

export default burgerOption;
