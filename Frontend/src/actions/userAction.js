import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  REGISTER_USER_FAIL,
} from "../constants/userConstant";

import axios from "axios";

//login

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config={headers:{"Content-Type":"application/json"}}

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/login`,
      { email, password },
      config
    );
    dispatch({type:LOGIN_SUCCESS,payload:data.user})
  } catch (error) {
    console.log(error)
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

//Clearing Errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
}

//7:54:40
//Register
export const  register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config={headers:{"Content-Type":"multipart/form-data"}}

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/register`,
      userData,
      config
    );
    dispatch({type:REGISTER_USER_SUCCESS,payload:data.user})
  } catch (error) {
    console.log(error)
    dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
  }
};


//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/api/v1/me` 
    );
    dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
  }
  catch (error) {
    console.log(error,"error")
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

//8:11:01