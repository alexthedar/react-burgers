import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderid: id,
    orderData: orderData
  };
};

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
    .then( res => {
      dispatch(purchaseBurgerSuccess(res.data, orderData));
    })
    .catch(err => {
      dispatch(purchaseBurgerFailed(err));
    });
  };
};