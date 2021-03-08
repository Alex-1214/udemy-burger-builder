import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} cancelled={props.cancelled} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className={classes.CancelCircle} onClick={props.cancelled}></div>
        <div className={classes.CancelSymbol} onClick={props.cancelled} >
          &#10008;
        </div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
