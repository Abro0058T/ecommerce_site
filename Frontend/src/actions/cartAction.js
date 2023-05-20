
import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../constants/cartConstants";

import axios from "axios";


//ADD TO CART

export const  addItemsToCart=(id,quantity)=>async(dispatch,getState)=>{
 
    console.log(id)
    console.log(quantity)
        const {data}=await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type:ADD_TO_CART,
            payload:{
                product:data.product_id,
                name:data.product.name,
                price:data.product.price,
                image:data.product.images[0].url,
                stock:data.product.Stock,
                id,
                quantity,
            }
        });
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
};

//REMOVE FROM CART 

export const  removeItemsFromCart=(id)=> async (dispatch,getState)=>{
    dispatch({
        type:REMOVE_CART_ITEM,
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
