import React from "react";
import Logo from "../Logo/Logo";
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToogle clicked={props.clicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
