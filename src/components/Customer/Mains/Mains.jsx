import React from "react";
import HomePage from "./HomePage/HomePage";
import Products from "./Products/Products";
import ShopPage from "./ShopPage/ShopPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const ContentPage = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/HomePage" />
      </Route>
      <Route exact path="/HomePage" component={HomePage}></Route>
      <Route path="/ShopPage" component={ShopPage}></Route>
      <Route path="/Products" component={Products}></Route>
    </>
  );
};

const Mains = () => {
  return (
    <div className="mains">
      {/* <HomePage></HomePage> */}
      {/* <Products></Products> */}
      {/* <ShopPage></ShopPage> */}
      <ContentPage></ContentPage>
    </div>
  );
};

export default Mains;
