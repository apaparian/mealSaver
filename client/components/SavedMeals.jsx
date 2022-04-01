import { features } from 'process';
import React, { Component } from 'react';
import Details from './Details.jsx';

const SavedMeals = (props) => {
  
  const showDetails = () => {
    if (props.details === props.name) {
      return (
        <Details
          calories={props.calories}
          carbohydrates={props.carbohydrates}
          fat={props.fat}
          protein={props.protein}
        />
      );
    } else  {
      return(<div></div>);
    }
  }

  return (
    <div className='column'>
      <div className='meal'>
        <h5>{props.name}</h5>
        <button onClick={() => { props.displayInfo(props.name) } }>details</button>
      </div>
      <div className='display'>
        {/* {showDetails()} */}
      </div>
    </div>
  );
}
export default SavedMeals;