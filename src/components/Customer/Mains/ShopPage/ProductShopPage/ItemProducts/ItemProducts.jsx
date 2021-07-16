import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import ModalProductDetails from '../../../../Header/Modal/productDetails/ModalProductDetails';
import { useDispatch } from "react-redux";
import { addProductToCart } from '../../../../../../redux/actions/cartAction'

function ItemProducts({ product, onRedirectDetail }) {

  const dispatch = useDispatch();

  const [value, setValue] = React.useState(4);
  const [selectProduct, setSelectProduct] = useState(null);

  const { name, price, bigPicture, sale } = product;

  let salePrice = price - price * sale;

  let percentSale = sale * 100;

  const setSelectItem = (product) => {
    setSelectProduct(product)
  }

  const handleResetItem = () => {
    setSelectProduct(null)
  }

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


  return (
    <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
      <div className="products__main--overlay">
        <ul className="products__main--overlay--action">
          <li>
            <i onClick={() => setSelectItem(product)} className="fa fa-eye" data-toggle="modal" data-target="#exampleModalCenter" />
          </li>
          <li>
            <i className="fa fa-heart-o" />
          </li>
          <li>
            <i className="fa fa-shopping-basket" onClick={() => handlerAddToCart(product)} />
          </li>
        </ul>
      </div>
      <div className="products__main--main" onClick={() => onRedirectDetail(product)}>
        <div className="price-discount">
          <p>-{percentSale}%</p>
        </div>
        <img src={bigPicture} alt={bigPicture} />
        <p>{name}</p>
        <div className="products__main--main--group">
          <p>${price}</p>
          <p>${salePrice}</p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            id="rating"
          />
        </div>
      </div>
      {selectProduct && <ModalProductDetails product={selectProduct} onResetSelectItem={handleResetItem} />}
    </Grid>
  );
}

export default ItemProducts;
