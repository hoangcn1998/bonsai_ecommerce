import React from "react";
import BannerProducts from "./BannerProducts/BannerProducts";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Instagram from "./Instagram/Instagram";

const Products = () => {
  return (
    <>
      <BannerProducts></BannerProducts>
      <ProductDetails></ProductDetails>
      <RelatedProducts></RelatedProducts>
      <Instagram></Instagram>
    </>
  );
};

export default Products;
