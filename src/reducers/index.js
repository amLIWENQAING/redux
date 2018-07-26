import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import requestPosts from './list';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  list:requestPosts
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;