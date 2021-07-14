import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  Link,
  Redirect,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import ItemProducts from "./ItemProducts/ItemProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../redux/actions/productAction";
import ModalProductDetails from '../../../Header/Modal/productDetails/ModalProductDetails'

const ProductShopPage = () => {
  const dispatch = useDispatch();

   const history = useHistory();

  const dataProducts = useSelector((state) => state.products.data);

  const errorDataProducts = useSelector((state) => state.products.errorMessage);



  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const redirectDetail = product => {
    history.push(`/Products/${product.id}`)
  }


  const data = dataProducts.map((product, index) => {
    return <ItemProducts key={index} index={index} product={product} onRedirectDetail={redirectDetail} />;
  });

  let style = {
    textAlign: "center",
    width: "100%",
    fontSize: "2rem",
    color: "rgb(138, 138, 138)",
  };

  return (
    <>
      <div>
        <Grid
          container
          spacing={3}
          alignContent="space-around"
          id="grid-products"
        >
          {data}
          <p style={style}>{errorDataProducts}</p>
        </Grid>
        <ModalProductDetails/>
      </div>
      <div style={{display: 'none'}} className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default ProductShopPage;
