import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.cancelled}>
      {/* <span
        className={classes.CloseIcon}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        &#8553;
      </span> */}
    </div>
  ) : null;

export default backdrop;
