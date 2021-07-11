import React from "react";
import {
  Redirect, Route
} from "react-router-dom";
import Checkout from "../Customer/Mains/Checkout/Checkout";
import HomePage from "../Customer/Mains/HomePage/HomePage";
import Products from "../Customer/Mains/Products/Products";
import ShopPage from "../Customer/Mains/ShopPage/ShopPage";
import ShoppingCart from "../Customer/Mains/ShoppingCart/ShoppingCart";

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
