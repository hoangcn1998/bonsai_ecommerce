import { SET_DISPLAY, GET_PRODUCTS_SC, GET_PRODUCTS_ER } from '../actions-constants/products-constant';

const stateDefault = { data: [], errorMessage: null, display: "block" };

const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case SET_DISPLAY:

      return { ...state, display: action.payload };
      
    case GET_PRODUCTS_SC:

      return { ...state, data: action.payload, errorMessage: null }

    case GET_PRODUCTS_ER:

      action.payload = "There are currently no products !";

      return { ...state, data: [], errorMessage: action.payload };

    default:
      return state;
  }
};

export default ProductsReducer;
