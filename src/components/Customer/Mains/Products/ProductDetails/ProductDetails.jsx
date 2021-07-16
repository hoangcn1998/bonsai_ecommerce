import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./style.scss";
import ProductSlideShow from "./ProductSlideShow/ProductSlideShow";
import ProductContent from "./ProductContent/ProductContent";
import ProductContentTabs from "./ProductContentTabs/ProductContentTabs";
// import { connect } from "react-redux";
import {
  useParams
} from "react-router-dom";
import urlApi from '../../../../../urlApi'

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null)


  useEffect(() => {
    axios.get(`${urlApi}Products/${id}`)
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const { thumbnailUrl } = product || {};

  return (
    <section className="productDetails__container container">
      <div className="row">
        <div className="col-lg-6">
          {product && <ProductSlideShow thumbnailUrl={thumbnailUrl} />}
        </div>
        <div className="col-lg-6">
          {product && <ProductContent product={product} />}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ProductContentTabs />
        </div>
      </div>
    </section>
  );
};


export default ProductDetails;
// function mapStateToProps(state) {
//   const {
//     products: { data },
//   } = state;
//   return { products: data };
// }

// export default connect(mapStateToProps)(ProductDetails);
