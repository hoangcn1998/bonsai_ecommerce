import React from "react";
import "./style.scss";
import ProductSlideShow from "./ProductSlideShow/ProductSlideShow";
import ProductContent from "./ProductContent/ProductContent";
import ProductContentTabs from "./ProductContentTabs/ProductContentTabs";

const ProductDetails = () => {
  return (
    <section className="productDetails__container container">
      <div className="row">
        <div className="col-lg-6">
          <ProductSlideShow></ProductSlideShow>
        </div>
        <div className="col-lg-6">
          <ProductContent></ProductContent>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ProductContentTabs></ProductContentTabs>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
