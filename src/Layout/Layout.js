import React, { Component } from "react";
import Toolbar from "./UI/Toolbar/Toolbar";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    openSideDrawer: false,
  };

  toggleSideDrawerHandler = () => {
    console.log("clicked")
    this.setState(prevState => {
      return {openSideDrawer: !prevState.openSideDrawer}
    });
  };

  closeSideDrawerHandler = () => {
    this.setState({
      openSideDrawer: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SideDrawer 
         open={this.state.openSideDrawer}
         cancelled={this.closeSideDrawerHandler}/>
        <Toolbar clicked={this.toggleSideDrawerHandler} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
