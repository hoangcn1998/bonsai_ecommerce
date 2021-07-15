import React from 'react';
import './style.scss';
import ProductSlideShow from '../../../Mains/Products/ProductDetails/ProductSlideShow/ProductSlideShow'
import ProductContent from '../../../Mains/Products/ProductDetails/ProductContent/ProductContent';
import { connect } from "react-redux";

const ModalProductDetails = ({ product }) => {

    const {thumbnailUrl } = product || {};
    // console.log(product)
    // const data = product.map(data => <ProductContent product={data} />)

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <section className="productDetails__container container">
                    <div className="row">
                        <div className="col-lg-6">
                         {product && <ProductSlideShow thumbnailUrl={thumbnailUrl}/>}
                        </div>
                        <div className="col-lg-6">
                          {product && <ProductContent product={product}/>}
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ModalProductDetails;
