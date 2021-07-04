import React from "react";
import BannerProducts from "./BannerProducts/BannerProducts";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const Products = () => {
  return (
    <>
      <BannerProducts></BannerProducts>
      <ProductDetails></ProductDetails>
      <RelatedProducts></RelatedProducts>
    </>
  );
};

export default Products;
