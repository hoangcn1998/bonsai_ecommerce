import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ItemProducts from "./ItemProducts/ItemProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../redux/actions/productAction";

const ProductShopPage = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const dataProducts = useSelector((state) => state.products.data);

  const errorDataProducts = useSelector((state) => state.products.errorMessage);

  const display = useSelector((state) => state.products.display);

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
      </div>
      <div style={{ display: display }} className="spinner-border text-success" role="status">
      </div>
    </>
  );
};

export default ProductShopPage;
