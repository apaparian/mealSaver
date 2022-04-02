import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getMeals } from '../../server/controller';
import * as actions from '../actions/actions';
import Nutrition from './Nutrition.jsx';
import SavedMeals from './SavedMeals.jsx';
import { Button } from '@mui/material';

const mapStateToProps = (state) => ({
  listItems: state.list.listItems,
  calories: state.list.calories,
  carbohydrates: state.list.carbohydrates,
  fat: state.list.fat,
  protein: state.list.protein,
  savedMeals: state.list.savedMeals,
  details: state.list.details,
});

const mapDispatchToProps = (dispatch) => ({
  getMeals: () => {
    dispatch(actions.getMeals());
  },
  addItem: (item) => {
    dispatch(actions.addItem(item));
  },
  sendList: () => {
    dispatch(actions.sendList());
  },
  saveMeal: (name) => {
    dispatch(actions.saveMeal(name));
  },
  displayInfo: (name) => {
    dispatch(actions.displayInfo(name));
  }
});

class List extends Component {

  componentDidMount() {
    // getMeals();
  }

  render() {
    const listDisplay = [];
    const listView = (itemsList) => {
      for (let i = 0; i < itemsList.length; i += 1) {
        listDisplay.push(<p key={ 'list ' + i }>{itemsList[i]}</p>)
      }
    }
    listView(this.props.listItems);

    const mealsDisplay = [];
    const mealsView = (savedMeals) => {
      for (let i = 0; i < savedMeals.length; i += 1) {
        mealsDisplay.push(
          <SavedMeals
            key={ 'meal ' + i }
            name={savedMeals[i].name}
            cal={savedMeals[i].calories}
            carb={savedMeals[i].carbohydrates}
            fat={savedMeals[i].fat}
            pro={savedMeals[i].protein}
            details={this.props.details}
            displayInfo={this.props.displayInfo}
          />
        )
      }
    }
    mealsView(this.props.savedMeals);

    const showNutrition = () => {
      if (this.props.calories !== null) {
        return (
          <Nutrition
          calories={this.props.calories}
          carbohydrates={this.props.carbohydrates}
          fat={this.props.fat}
          protein={this.props.protein}
          saveMeal={this.props.saveMeal}
          details={this.props.details}
          />
        );
      }
      return <div></div>
    };

    return(
      <div>
        <div className ='entries'>
          <button onClick={this.props.sendList}>
          Get Nutrition
         </button>
         <form onSubmit={ (e) => { e.preventDefault(); this.props.addItem(e.target.firstElementChild.value); } }>
            <input type='text'/>
            <button id='add-item' type='submit'>Add Item</button>
          </form>
        </div>
        <div>
          {listDisplay}
          {showNutrition()}
          <div className='saved-meals'>
            {mealsDisplay}
          </div>
        </div>
      </div>
    )
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(List);