import React from "react";

const ItemCart = () => {
  return (
    <tr className="shoppingcart__item">
      <th scope="row" className="shoppingcart__item--product">
        <button>x</button>
        <img
          alt="img"
          src="http://landing.engotheme.com/html/hamadryad/demo/images/products/product-2.jpg"
        />
        <span>Polyscias Fabian</span>
      </th>
      <td className="shoppingcart__item--price">123$</td>
      <td>
        <div
          className="btn-group mr-2 shoppingcart__item--quantity"
          role="group"
        >
          <button className="btn btn-light">-</button>
          <button disabled className="btn btn-light">
            0
          </button>
          <button className="btn btn-light">+</button>
        </div>
      </td>
      <td className="shoppingcart__item--total">123$</td>
    </tr>
  );
};

export default ItemCart;
