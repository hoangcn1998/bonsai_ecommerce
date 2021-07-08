import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <>
      <div className="total__price">
        <h1>Total Price</h1>
        <h1>123$</h1>
      </div>
      <div className="promocode">
        <input
          type="text"
          className="form-control"
          placeholder="Promo code"
        ></input>
        <button type="button" className="btn btn-light">
          Apply
        </button>
      </div>
      <Link to="/Checkout">
        <button type="button" className="btn btn-success">
          Checkout
        </button>
      </Link>
    </>
  );
};

export default CartTotal;
