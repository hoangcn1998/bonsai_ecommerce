import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart, decreaseProductToCart, deleteProductInCart } from '../../../../../redux/actions/cartAction'

const ItemCart = ({ product }) => {

  console.log(product)
  const dispatch = useDispatch()

  const { name, price, sale, quantity, bigPicture } = product;

  const salePrice = price - (price * sale);

  const totalProduct = quantity * salePrice;

  const increaseQuantity = (product) => {
    return {
      ...product,
      quantity: 1
    }
  }

  const handlerAddToCart = (product) => {
    const increaseProduct = increaseQuantity(product)
    dispatch(addProductToCart(increaseProduct))
  }

  const handlerDecreaseProductToCart = (product) => {
    const increaseProduct = increaseQuantity(product)
    dispatch(decreaseProductToCart(increaseProduct))
  }

  const handlerDeleteProductInCart = (product) => {
    dispatch(deleteProductInCart(product))
  }

  return (
    <tr className="shoppingcart__item">
      <th scope="row" className="shoppingcart__item--product">
        <button onClick={() => handlerDeleteProductInCart(product)}>x</button>
        <img
          alt={bigPicture}
          src={bigPicture}
        />
        <span>{name}</span>
      </th>
      <td className="shoppingcart__item--price">${salePrice}</td>
      <td>
        <div
          className="btn-group mr-2 shoppingcart__item--quantity"
          role="group"
        >
          <button className="btn btn-light" onClick={() => handlerDecreaseProductToCart(product)} >-</button>
          <button disabled className="btn btn-light">
            {quantity}
          </button>
          <button className="btn btn-light" onClick={() => handlerAddToCart(product)}>+</button>
        </div>
      </td>
      <td className="shoppingcart__item--total">${totalProduct}</td>
    </tr >
  );
};


export default ItemCart;
