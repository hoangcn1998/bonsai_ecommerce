// import React from "react";
import { GET_PRODUCTS, GET_PRODUCTS_SC, GET_PRODUCTS_ER } from "../actions-constants/products-constant";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSc = (data) => {
  return {
    type: GET_PRODUCTS_SC,
    payload: data
  };
};
