import React from "react";
import {
  Redirect, Route, Switch
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin';
import Customer from './components/Customer/Customer';
import Dashboard from "./components/Admin/Main/Dashboard/Dashboard";
import HomePage from "./components/Customer/Mains/HomePage/HomePage"
import ShoppingCart from './components/Customer/Mains/ShoppingCart/ShoppingCart';
import ShopPage from './components/Customer/Mains/ShopPage/ShopPage';
import Products from './components/Customer/Mains/Products/Products';
import Checkout from './components/Customer/Mains/Checkout/Checkout';

function App() {
  let routes = (
    <Switch>
      <Route path="/ShopPage" component={ShopPage}></Route>
      <Route path="/Products/:id" component={Products}></Route>
      <Route path="/Products" exact component={Products}></Route>
      <Route path="/ShoppingCart" component={ShoppingCart}></Route>
      <Route path="/Checkout" component={Checkout}></Route>
      <Route path="/admin" component={Dashboard}></Route>
      <Route exact path="/">
        <Redirect to="/HomePage" />
      </Route>
      <Route exact path="/HomePage" component={HomePage}></Route>
    </Switch>
  );
  return (
    <div className="App">
      {/* <Admin></Admin>
      <Customer></Customer> */}
      {routes}
    </div>
  );
}

export default App;
