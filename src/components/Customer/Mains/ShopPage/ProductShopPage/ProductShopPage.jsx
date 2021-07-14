import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { Grid } from "@material-ui/core";
import ItemProducts from "./ItemProducts/ItemProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../redux/actions/productAction";
import ModalProductDetails from '../../../Header/Modal/productDetails/ModalProductDetails'

const ProductShopPage = () => {
  const dispatch = useDispatch();

  const dataProducts = useSelector((state) => state.products.data);

  const errorDataProducts = useSelector((state) => state.products.errorMessage);
  console.log(errorDataProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const data = dataProducts.map((product, index) => {
    return <ItemProducts key={index} index={index} {...product}></ItemProducts>;
  });

  let style = {
    textAlign: "center",
    width: "100%",
    fontSize: "2rem",
    color: "rgb(138, 138, 138)",
  };

  return (
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
  );
};

export default ProductShopPage;
