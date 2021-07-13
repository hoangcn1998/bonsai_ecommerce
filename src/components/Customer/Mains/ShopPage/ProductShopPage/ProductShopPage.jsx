import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ItemProducts from "./ItemProducts/ItemProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../redux/actions/productAction";

const ProductShopPage = () => {
  const dispatch = useDispatch();

  const dataProducts = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const data = dataProducts.map((product, index) => {
    return <ItemProducts key={index} index={index} {...product}></ItemProducts>;
  });

  return (
    <div>
      <Grid
        container
        spacing={3}
        alignContent="space-around"
        id="grid-products"
      >
        {data}
      </Grid>
    </div>
  );
};

export default ProductShopPage;
