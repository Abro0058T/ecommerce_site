import axios from "axios"

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERRORS,
  } from "../constants/productConstants";

  export const  getProduct=()=> async(dispatch)=>{
try {
dispatch({
    type:ALL_PRODUCT_REQUEST
})

const {data}=await axios.get("http://localhost:4000/api/v1/products");
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

//Clearing errors 
  export const cleaerErrors=()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
  }


  //5:43:09