import React from "react";
import ItemProduct from "./ItemProduct";
import "./style.scss";

function Products() {
  return (
    <div className="products">
      <div className="products__header">
        <div className="products__header--line" />
        <h2 className="products__header--desc">Perfect for growing plants</h2>
        <div className="products__header--line" />
      </div>
      <h2 className="products__title">Popular Products</h2>
      <ItemProduct />
    </div>
  )
}

export default Products;
