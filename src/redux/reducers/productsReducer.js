import {  GET_PRODUCTS_SC, GET_PRODUCTS_ER } from '../actions-constants/products-constant';

const stateDefault = {products: [],};

const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case GET_PRODUCTS_SC:
   
      state.products = action.payload

      return { ...state};

    case GET_PRODUCTS_ER:
    

      return { ...state };

    default:
      return state;
  }
};

export default ProductsReducer;
