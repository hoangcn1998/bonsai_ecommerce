import { Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import product1 from "../../../../../../assests/images/product-1.jpeg";
import { Link } from "react-router-dom";

function ItemProduct(props) {
  const [value, setValue] = React.useState(2);

  return (
    <Grid container spacing={3} alignContent="space-around" id="grid-products">
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="price-discount">
          <p>-25%</p>
        </div>
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="price-discount">
          <p>-25%</p>
        </div>
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
      <Grid item lg={3} md={4} sm={6} xs={12} className="products__main">
        <div className="products__main--overlay">
          <ul className="products__main--overlay--action">
            <li>
              <i className="fa fa-eye" />
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
          <img src={product1} alt={product1} />
          <p>Polyscias Fabian</p>
          <div className="products__main--main--group">
            <p>$80.000</p>
            <p>$60.000</p>
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
    </Grid>
  );
}

export default ItemProduct;
