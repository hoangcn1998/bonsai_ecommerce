import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "http://landing.engotheme.com/html/hamadryad/demo/images/product-detail/product-4.png",
  "http://landing.engotheme.com/html/hamadryad/demo/images/product-detail/product-3.png",
  "http://landing.engotheme.com/html/hamadryad/demo/images/product-detail/product-2.png",
];

const ProductSlideShow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div>
            <img alt="img" src={slideImages[0]}></img>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img alt="img" src={slideImages[1]}></img>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img alt="img" src={slideImages[2]}></img>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ProductSlideShow;
