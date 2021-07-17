// import React from "react";
import { GET_PRODUCTS, SET_DISPLAY, GET_PRODUCTS_SC, GET_PRODUCTS_ER, DELETE_PRODUCTS, DELETE_PRODUCTS_SC } from "../actions-constants/products-constant";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const setDisplay = (data) => {
  return {
    type: SET_DISPLAY,
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

export const deleteProducts = (data) => {
  console.log(data)
  return {
    type: DELETE_PRODUCTS,
    payload: data
  };
};

