import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
          <Route path="/new" component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout}/>
          <Redirect from="" to="/new" />
          </Switch>

        </Layout>
    );
  }
}

export default App;
