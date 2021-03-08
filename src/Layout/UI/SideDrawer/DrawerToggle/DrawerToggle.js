import React from "react";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => {
  return (
    <React.Fragment>
      <div className={classes.DrawerToggle}>
        Menu
      </div>

      <div className={classes.HamburgerMenu} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default drawerToggle;
