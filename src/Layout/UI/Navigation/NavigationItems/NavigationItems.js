import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem clicked={props.cancelled} exact link="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem clicked={props.cancelled} link="/my-orders">My Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
