import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer =
  (state = { product: [] }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          product: [],
        };
        break;
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          productsCount: action.payload.productsCount,
        };
        break;
      case ALL_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        break;
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
        break;

      default:
        return state;
    }
  };
