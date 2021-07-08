import React from "react";
import BannerProducts from "../Products/BannerProducts/BannerProducts";
import ContentShoppingCart from "./ContentShoppingCart/ContentShoppingCart";
import Instagram from "../Products/Instagram/Instagram";

const ShoppingCart = () => {
  return (
    <div>
      <BannerProducts></BannerProducts>
      <ContentShoppingCart></ContentShoppingCart>
      <Instagram></Instagram>
    </div>
  );
};

export default ShoppingCart;
