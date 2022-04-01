// import axios from 'axios';
import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getMeals = () => (dispatch) => {
  axios({
    method: 'GET',
    url: '/api/saveMeal',
  })
  .then((res) => {
    dispatch({
      type: types.GET_MEALS,
      // payload: res.data
    })
  })
}

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const sendList = () => (dispatch, getState) => {
  const listItems = getState().list.listItems;
  axios({
    method: 'POST',
    url: 'https://api.edamam.com/api/nutrition-details?',
    params: {
      app_id: '1b46bc5c',
      app_key: '2527cbb1471b1d15209707b54f04f42e',
    },
    data: { "ingr": listItems },
    })
  .then(({ data }) => {
    dispatch({
      type: types.SEND_LIST,
      payload: data,
    })
  })
  .catch(console.error);
};

export const saveMeal = (name) => (dispatch, getState) => {
  const mealInfo = getState().list;

  axios({
    method: 'POST',
    headers : { 'Content-Type' : 'application/json' },
    url: '/api/saveMeal',
    data: { name: name, ...mealInfo },
  })
  .then(() => {
    dispatch({
      type: types.SAVE_MEAL,
      payload: name,
    })
  })
};

export const displayInfo = (name) => ({
  type: types.DISPLAY_INFO,
  payload: name,
});