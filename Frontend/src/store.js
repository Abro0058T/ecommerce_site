import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";

import {profileReducer, userReducer} from"./reducers/userReducer";
import {cartReducer} from "./reducers/cartReducer"

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile:profileReducer,
  cart:cartReducer
});

let initalState = {
  cart:{
    cartItem:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")):[],
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//10:00:30
