import React from "react";
import HomePage from "../Customer/Mains/HomePage/HomePage";
import ShopPage from "../Customer/Mains/ShopPage/ShopPage";
import Products from "../Customer/Mains/Products/Products";
import ShoppingCart from "../Customer/Mains/ShoppingCart/ShoppingCart";
import Checkout from "../Customer/Mains/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const ContentPageCustomer = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/HomePage" />
      </Route>
      <Route exact path="/HomePage" component={HomePage}></Route>
      <Route path="/ShopPage" component={ShopPage}></Route>
      <Route path="/Products" component={Products}></Route>
      <Route path="/ShoppingCart" component={ShoppingCart}></Route>
      <Route path="/Checkout" component={Checkout}></Route>
    </>
  );
};

export default ContentPageCustomer;
