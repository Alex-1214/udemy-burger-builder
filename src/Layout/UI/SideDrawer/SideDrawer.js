import React, { Component } from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import BackDrop from "../Backdrop/Backdrop";

import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <BackDrop show={props.open} cancelled={props.cancelled} />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
