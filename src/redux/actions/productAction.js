// import React from "react";
import { GET_PRODUCTS, GET_PRODUCTS_START, GET_PRODUCTS_SC, GET_PRODUCTS_ER } from "../actions-constants/products-constant";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsStart = (data) => {
  return {
    type: GET_PRODUCTS_START,
    payload: data
  };
};

export const getProductsSc = (data) => {
  return {
    type: GET_PRODUCTS_SC,
    payload: data
  };
};

export const getProductsEr = (data) => {

  return {
    type: GET_PRODUCTS_ER,
    payload: data
  };
};
