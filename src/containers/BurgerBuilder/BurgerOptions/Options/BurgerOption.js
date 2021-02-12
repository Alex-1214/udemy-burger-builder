import React from "react";

import classes from "./BurgerOption.module.css";

const burgerOption = (props) => {
  return (
    <div className={classes.Option}>
      <label className={classes.Label}>{props.label}</label>
        <button
          className={[classes.OptionButtons, classes.LessButton].join(" ")}
          onClick={props.removed}
          disabled={props.disabled}
        >
          Less
        </button>
        <button className={[classes.OptionButtons, classes.MoreButton].join(" ")} onClick={props.added}>
          More
        </button>
    </div>
  );
};

export default burgerOption;
