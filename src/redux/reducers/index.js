import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  auth: authReducer,
  cart: cartReducer
})

export default rootReducer;
