import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer
})

export default rootReducer;
