import { SET_DISPLAY, GET_PRODUCTS_SC, GET_PRODUCTS_ER, DELETE_PRODUCTS_START, DELETE_PRODUCTS_ERROR, DELETE_PRODUCTS_SUCCESS } from '../actions-constants/products-constant';

const stateDefault = { data: [], errorMessage: null, display: "block", isLoading: false };

const ProductsReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case SET_DISPLAY:

      return { ...state, display: action.payload };
      
    case GET_PRODUCTS_SC:

      return { ...state, data: action.payload, errorMessage: null }

    case GET_PRODUCTS_ER:

      action.payload = "There are currently no products !";

      return { ...state, data: [], errorMessage: action.payload };

    case DELETE_PRODUCTS_START:

        return { ...state, isLoading: true };
    
    case DELETE_PRODUCTS_SUCCESS:

      const products = [...state.data];
      const afterDeleteProducts = products.filter(pro => pro.id !== action.payload)

        return { ...state, isLoading: false, data: afterDeleteProducts}

    case DELETE_PRODUCTS_ERROR:

      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default ProductsReducer;
