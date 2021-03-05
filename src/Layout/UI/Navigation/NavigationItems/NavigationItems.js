import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.module.css';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/new" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">My orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
