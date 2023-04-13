import axios from "axios"

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
  } from "../constants/productConstants";

  export const  getProduct=(keyword="")=> async(dispatch)=>{
try {
dispatch({
    type:ALL_PRODUCT_REQUEST
})

const {data}=await axios.get(`http://localhost:4000/api/v1/products?keyword=${keyword}`);
dispatch({
    type:ALL_PRODUCT_SUCCESS,
    payload:data,
})
} catch (error) {
    dispatch({
       type: ALL_PRODUCT_FAIL,
       payload:error.response.data.message,
    })
}
  }



  //Get proudcts  details
  export const  getProductDetails=(id)=> async(dispatch)=>{
    try {
    dispatch({
        type:PRODUCT_DETAILS_REQUEST
    })
    
    const {data}=await axios.get(`http://localhost:4000/api/v1/product/${id}`);
    dispatch({
        type:PRODUCT_DETAILS_SUCCESS,
        payload:data.product,
    })
    } catch (error) {
        dispatch({
           type: PRODUCT_DETAILS_FAIL,
           payload:error.response.data.message,
        })
    }
      }
    
//Clearing errors 
  export const cleaerErrors=()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
  }


  //5:43:09