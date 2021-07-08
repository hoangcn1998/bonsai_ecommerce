import React from "react";
import "./style.scss";
import BannerProducts from "../Products/BannerProducts/BannerProducts";
import Instagram from "../Products/Instagram/Instagram";
import ContentCheckout from "./contentCheckout/ContentCheckout";

const Checkout = () => {
  return (
    <div>
      <BannerProducts></BannerProducts>
      <ContentCheckout></ContentCheckout>
      <Instagram></Instagram>
    </div>
  );
};

export default Checkout;
