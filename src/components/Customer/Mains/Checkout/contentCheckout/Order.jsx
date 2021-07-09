import React from "react";
import OrderItem from "./OrderItem";

const Order = () => {
  return (
    <div className="OrderDetails">
      <h1>Your Order</h1>
      <div className="OrderDetails__title">
        <p>Products</p>
        <p>Unit total</p>
      </div>
      <OrderItem></OrderItem>
      <OrderItem></OrderItem>
      <div className="deliverycharges">
        <p>Delivery charges</p>
        <p>0$</p>
      </div>
      <div className="totalprice">
        <p>Total Price</p>
        <p>123$</p>
      </div>
    </div>
  );
};

export default Order;
