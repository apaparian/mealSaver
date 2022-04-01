import * as types from '../constants/actionTypes';

const initialState = {
  listItems: [],
  calories: null,
  carbohydrates: null,
  fat: null,
  protein: null,
  savedMeals: [],
  details: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEALS:
      console.log(action.payload)
      return {
        ...state
      }
    case types.ADD_ITEM:
      return {
        ...state,
        listItems: state.listItems.concat(action.payload)
      };
    case types.SEND_LIST:
      return {
          ...state,
          calories: Math.round(action.payload.calories),
          carbohydrates: Math.round(action.payload.totaasclNutrients.CHOCDF.quantity),
          fat: Math.round(action.payload.totalNutrients.FAT.quantity),
          protein: Math.round(action.payload.totalNutrients.PROCNT.quantity),
      };
    case types.SAVE_MEAL:
      return {
        ...initialState,
        savedMeals: state.savedMeals.concat({ name: action.payload, ...state }),
      }
    case types.DISPLAY_INFO:
      let name = null;
      let calories = null, carbohydrates = null, fat = null, protein = null;

      if (state.details === null){
        name = action.payload;
        for (let i = 0; i < state.savedMeals.length; i += 1) {
          if (state.savedMeals[i].name === name) {
            calories = state.savedMeals[i].calories;
            carbohydrates  = state.savedMeals[i].carbohydrates;
            fat = state.savedMeals[i].fat;
            protein = state.savedMeals[i].protein;
          }
        }
      }
      return {
        ...state,
        calories: calories,
        carbohydrates: carbohydrates,
        fat: fat,
        protein: protein,
        details: name,
      }
    default:
      return state;
  }
}

export default listReducer;