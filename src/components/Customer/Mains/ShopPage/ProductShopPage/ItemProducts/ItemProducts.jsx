import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import product1 from "../../../../../../assests/images/product-1.jpeg";
import "./style.scss";
import { Link } from "react-router-dom";

function ItemProducts(props) {
  const [value, setValue] = React.useState(2);
  console.log(props);

  const { index, name, price, rating, bigPicture, sale } = props;
  let salePrice = parseFloat(price) * sale;

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
      <div className="products__main--overlay">
        <ul className="products__main--overlay--action">
          <li>
            <Link to="/Products">
              <i className="fa fa-eye" />
            </Link>
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
          <p>-25%</p>
        </div>
        <img src={bigPicture} alt={bigPicture} />
        <p>{name}</p>
        <div className="products__main--main--group">
          <p>{price}</p>
          <p>{salePrice}</p>
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
