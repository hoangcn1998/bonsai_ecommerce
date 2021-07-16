import React from "react";
import "../style.scss";
import ItemCart from "./ItemCart";
import CartTotal from "./CartTotal";
import { connect } from "react-redux";

const ContentShoppingCart = ({ cart }) => {

  console.log(cart)

  const calcualteTotalPrice = (cart) => {
    const total = cart.reduce((sum, currentProduct) => {
      const { price, sale, quantity } = currentProduct || {};
      return sum + (price - price * sale) * quantity;
    }, 0);
    console.log(`total --->`, total)
    return total;
  }

  const data = cart.map((product, index) => <ItemCart product={product} index={index} key={index} />)

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
              {data}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 cartTotal">
          <CartTotal totalPrice={calcualteTotalPrice(cart)} />
        </div>
      </div>
    </div>
  );
};

// export default ContentShoppingCart;

function mapStateToProps(state) {
  const {
    cart: { data },
  } = state;
  return { cart: data };
}

export default connect(mapStateToProps)(ContentShoppingCart);
