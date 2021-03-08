import React from "react";

import classes from "./BurgerOption.module.css";

const burgerOption = (props) => {
  return (
    <div className={classes.Option}>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.OptionButtons}>
        <button
          className={[classes.LessButton, classes.OptionButton].join(" ")}
          onClick={props.removed}
          disabled={props.disabled}
        >
          <span className={classes.ButtonLabel}>Less</span>
          <span className={classes.ButtonIcon}>&#x2212;</span>
        </button>
        <button
          type
          className={[classes.MoreButton, classes.OptionButton].join(" ")}
          onClick={props.added}
        >
          <span className={classes.ButtonLabel}>More</span>
          <span className={classes.ButtonIcon}>&#65291;</span>
        </button>
      </div>
    </div>
  );
};

export default burgerOption;
