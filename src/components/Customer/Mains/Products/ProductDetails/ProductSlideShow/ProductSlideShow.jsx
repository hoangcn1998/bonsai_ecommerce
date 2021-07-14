import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ProductSlideShow = ({ thumbnailUrl }) => {
  console.log(`thumbnailUrl`, thumbnailUrl)
  const renderImage = thumbnailUrl.map((img, index) => (
    <div key={index} className="each-slide">
      <div>
        <img alt="img" src={img}/>
      </div>
    </div>
  ))
  console.log(renderImage)
    
  return (
    <div className="slide-container">
      <Slide>
        {renderImage}
      </Slide>
    </div>
  );
};

export default ProductSlideShow;
