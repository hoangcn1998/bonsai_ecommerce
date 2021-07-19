// import React from "react";
import { ADD_ORDER, ADD_ORDER_SC, ADD_ORDER_ER } from "../actions-constants/order-constant";

export const addOrder = (data) => {
  console.log(data)
  return {
    type: ADD_ORDER,
    payload: data
  };
};


export const addOrderSc = (data) => {
  return {
    type: ADD_ORDER_SC,
    payload: data
  };
};

export const addOrderEr = (data) => {
  return {
    type: ADD_ORDER_ER,
    payload: data
  };
};


