import React from "react";
import "../style.scss";
import ItemCart from "./ItemCart";
import CartTotal from "./CartTotal";

const ContentShoppingCart = () => {
  return (
    <div className="container ">
      <div className="row ContentShoppingCart">
        <div className="col-lg-8 shoppingcart">
          <table className="table shoppingcart__title">
            <thead>
              <tr>
                <th scope="col" className="shoppingcart__title--product">
                  Products
                </th>
                <th scope="col" className="shoppingcart__title--price">
                  Price
                </th>
                <th scope="col" className="shoppingcart__title--quantity">
                  Quantity
                </th>
                <th scope="col" className="shoppingcart__title--unitprice">
                  Unit price
                </th>
              </tr>
            </thead>
            <tbody>
              <ItemCart></ItemCart>
              <ItemCart></ItemCart>
              <ItemCart></ItemCart>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 cartTotal">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default ContentShoppingCart;
