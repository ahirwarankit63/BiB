import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERROR
} from "../Constants/productConstants";

export const getProduct = () => async (dispatch) => {

    //here we are requesting the products from backend and then applying the try catch method 
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});
        //here below we are fetching the data from our database server
        //axios helping to fetch the product from backend
        const {data} = await axios.get("/api/v1/products")
        //here dispatching the products
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload : data,
        });

    } catch (error) {
        dispatch
        ({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
         })
        }

};

//clearing the errors
export const clearErrors = () => async (dispatch) => {
    dispatch ({
        type : CLEAR_ERROR,

    })
}