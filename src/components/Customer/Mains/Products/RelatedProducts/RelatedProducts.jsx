import React from "react";
import "../../HomePage/product/style.scss";
import ItemProduct from "../../HomePage/product/ItemProduct";

const RelatedProducts = () => {
  let style = {
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "bold",
    color: "#241305",
  };

  return (
    <div className="relatedProducts">
      <p style={style} className="relatedProducts__title">
        Related Products
      </p>
      <ItemProduct></ItemProduct>
    </div>
  );
};

export default RelatedProducts;
