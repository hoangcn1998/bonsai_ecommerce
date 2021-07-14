import {  GET_PRODUCTS_SC, GET_PRODUCTS_ER } from '../actions-constants/products-constant';

const stateDefault = {data: [], errorMessage: null, isLoading: false};

const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {

    //  case GET_PRODUCTS_START:
   
    //   return { ...state, isLoading: true };


    case GET_PRODUCTS_SC:
   
      return { ...state, data: action.payload, errorMessage: null}

    case GET_PRODUCTS_ER:

      action.payload = "There are currently no products !";

      return { ...state, data: [], errorMessage: action.payload };

    default:
      return state;
  }
};

export default ProductsReducer;
