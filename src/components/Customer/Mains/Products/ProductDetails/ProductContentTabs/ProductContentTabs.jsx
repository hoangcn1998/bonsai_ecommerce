import { useState } from "react";
import DescriptionProducts from "./DescriptionProducts";
import ReviewProducts from "./ReviewProducts";

const ProductContentTabs = () => {
  const [showDescription, setShowDescription] = useState(true);
  return (
    <div className="productDetails__content--tabs">
      <div className="producDetails__tabs">
        <ul>
          <li onClick={() => setShowDescription(true)}>Description</li>
          <li onClick={() => setShowDescription(false)}>Reviews(2)</li>
        </ul>
      </div>
      <div className="productDetails__tabs--content">
        {showDescription && <DescriptionProducts></DescriptionProducts>}
        {!showDescription && <ReviewProducts></ReviewProducts>}
      </div>
    </div>
  );
};

export default ProductContentTabs;
