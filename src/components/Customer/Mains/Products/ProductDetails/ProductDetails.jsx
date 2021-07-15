import React, { useEffect } from "react";
import "./style.scss";
import ProductSlideShow from "./ProductSlideShow/ProductSlideShow";
import ProductContent from "./ProductContent/ProductContent";
import ProductContentTabs from "./ProductContentTabs/ProductContentTabs";
import { connect } from "react-redux";
import {
  useParams
} from "react-router-dom";

const ProductDetails = ({products}) => {

  const { id } = useParams();

  const product = products.find(x => x.id === id);
  const {thumbnailUrl} = product || {};

  return (
    <section className="productDetails__container container">
      <div className="row">
        <div className="col-lg-6">
          {product && <ProductSlideShow thumbnailUrl={thumbnailUrl} />}
        </div>
        <div className="col-lg-6">
         { product && <ProductContent product={product} />}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ProductContentTabs/>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  const {
    products: { data },
  } = state;
  return { products: data };
}

export default connect(mapStateToProps)(ProductDetails);

