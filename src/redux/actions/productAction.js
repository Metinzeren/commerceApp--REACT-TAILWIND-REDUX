import axios from "axios";
import { ActionTypes } from "./actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_PRODUCTS, payload: true });
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
      dispatch({ type: ActionTypes.LOADING_PRODUCTS, payload: false });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ActionTypes.LOADING_PRODUCTS, payload: false });
    });
};
export const setBasket = (basketData) => (dispatch) => {
  dispatch({ type: ActionTypes.ADD_BASKET, payload: basketData });
};

export const deleteBasket = (productId) => (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_BASKET, payload: productId });
};
export const updateBasketProduct = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_BASKETPRODUCT, payload: data });
};
