import React from "react";
import "./style.scss";

const BannerProducts = () => {
  return (
    <section className="container-fluid product__banner">
      <div className="product__banner--overlay">
        <h2 className="product__banner--title">Shop Products</h2>
        <div className="product__banner--item">
          <li>Home</li>
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
          <li className="item__content"> Shop Products</li>
        </div>
      </div>
    </section>
  );
};

export default BannerProducts;
