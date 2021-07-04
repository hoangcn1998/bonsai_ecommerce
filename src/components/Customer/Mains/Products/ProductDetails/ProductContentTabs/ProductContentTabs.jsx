import React from "react";
import DescriptionProducts from "./pages/DescriptionProducts";
import ReviewProducts from "./pages/ReviewProducts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ContentPageProducts = () => {
  return (
    <>
      <Route
        exact
        path="/productDetails/Description"
        component={DescriptionProducts}
      ></Route>
      <Route path="/productDetails/Reviews" component={ReviewProducts}></Route>
    </>
  );
};

const ProductContentTabs = () => {
  return (
    <div className="productDetails__content--tabs">
      <div className="producDetails__tabs">
        <ul>
          <Link to="/productDetails/Description">
            <li>Description</li>
          </Link>
          <Link to="/productDetails/Reviews">
            <li>Reviews(2)</li>
          </Link>
        </ul>
      </div>
      <div className="productDetails__tabs--content">
        <ContentPageProducts></ContentPageProducts>
      </div>
    </div>
  );
};

export default ProductContentTabs;
