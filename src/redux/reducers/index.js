import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  auth: authReducer
})

export default rootReducer;
