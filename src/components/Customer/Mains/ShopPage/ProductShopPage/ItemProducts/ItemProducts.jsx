import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ItemProducts({ product, onRedirectDetail }) {
  const [value, setValue] = React.useState(4);

  const { name, price, bigPicture, sale } = product;

  let salePrice = price - price * sale;

  let percentSale = sale * 100;

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
      <div className="products__main--overlay" onClick={() => onRedirectDetail(product)}>
        <ul className="products__main--overlay--action">
          <li>
            <i className="fa fa-eye" data-toggle="modal" data-target="#exampleModalCenter" />
          </li>
          <li>
            <i className="fa fa-heart-o" />
          </li>
          <li>
            <i className="fa fa-shopping-basket" />
          </li>
        </ul>
      </div>
      <div className="products__main--main">
        <div className="price-discount">
          <p>-{percentSale}%</p>
        </div>
        <img src={bigPicture} alt={bigPicture} />
        <p>{name}</p>
        <div className="products__main--main--group">
          <p>{price}$</p>
          <p>{salePrice}$</p>
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
    </Grid>
  );
}

export default ItemProducts;
