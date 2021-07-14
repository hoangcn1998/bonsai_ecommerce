import React from "react";
import { useState } from "react";
import Rating from "@material-ui/lab/Rating";

const ProductContent = () => {
  const initial = parseInt(localStorage.getItem("countProductDetails") || 0);
  const [countProductDetails, setCountProductDetails] = useState(initial);

  function handlerClickMinus() {
    const newCountProductDetails = countProductDetails - 1;
    if (countProductDetails === 0) {
      return countProductDetails;
    } else {
      setCountProductDetails(newCountProductDetails);
      localStorage.setItem("countProductDetails", newCountProductDetails);
    }
  }

  function handlerClickPlus() {
    const newCountProductDetails = countProductDetails + 1;
    localStorage.setItem("countProductDetails", newCountProductDetails);
    setCountProductDetails(newCountProductDetails);
  }

  return (
    <div className="productDetails__content">
      <h1 className="productDetails__title">Succulent Plant</h1>
      <div className="productDetails__meta">
        <div className="productDetails__price">
          <div className="productDetails__price--cost">$80.000</div>
          <div className="productDetails__price--sale">$60.000</div>
        </div>
        <div className="productDetails__rating">
           <Rating
              name="simple-controlled"
              value={5}
              id="rating"
            />
        </div>
      </div>
      <p className="productDetails__description">
        Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem
        ullamcorper volutpat. Vestibulum lacinia risus. It is a long established
        fact that a reader will be distracted by the readable content.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </p>
      <div className="productDetails__action">
        <div className="productDetails__action--quantity">
          <div
            className="btn-group mr-2"
            role="group"
            aria-label="Second group"
          >
            <button
              type="button"
              className="btn btn-light"
              onClick={handlerClickMinus}
            >
              -
            </button>
            <button disabled type="button" className="btn btn-light">
              {countProductDetails}
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={handlerClickPlus}
            >
              +
            </button>
          </div>
        </div>
        <div className="productDetails__action--addToCart">
          <button>Add to cart</button>
        </div>
        <button className="productDetails__action--love">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      </div>
      <div className="productDetails__attr">
        <p>
          <span>SKU:</span> PD 031
        </p>
        <p>
          <span>Categories:</span> Out Door Plant, Plant On Table, Potted.
        </p>
        <p>
          <span>Tags:</span> Cactus, Flower, Indoor.
        </p>
      </div>
      <div className="productDetails__share">
        Share:
        <a href="facebook.com">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="twitter.com">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="instagram.com">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductContent;
