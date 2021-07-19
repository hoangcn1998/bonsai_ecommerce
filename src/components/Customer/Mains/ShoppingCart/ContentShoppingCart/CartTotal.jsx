import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const CartTotal = ({ totalPrice, auth }) => {
  const history = useHistory();
  const [error, setError] = useState('');

  const handleCheckout = e => {
    const { accessToken } = auth || {};
    if (!accessToken) {
      setError("Please login to checkout!")
    } else {
      history.push('/Checkout')
    }
  }

  return (
    <>
      <div className="total__price">
        <h1>Total Price</h1>
        <h1>${totalPrice}</h1>
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
      <Link onClick={handleCheckout}>
        <button type="button" className="btn btn-success">
          Checkout
        </button>
      </Link>
      {error}
    </>
  );
};

function mapStateToProps(state) {
  const {
    auth: { data },
  } = state;
  return { auth: data };
}


export default connect(mapStateToProps)(CartTotal);