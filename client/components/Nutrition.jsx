import React, { Component } from 'react';

const Nutrition = (props) => {
  
  const nameOrSubmit = () => {
    if (props.details === null) {
      return(
        <form className='submit' onSubmit={ (e) => { e.preventDefault(); props.saveMeal(e.target.firstElementChild.value); } }>
          <input type='text' placeholder='Name your meal'/>
          <button id='save-meal' type='submit'>Save Meal</button>
        </form>
      );
    } else {
      return (
        <h2>{props.details}</h2>
      );
    }
  }

  return (
  <div className='nutrition-list'>
    <div className='cal'>
      <h3 className='label'>Calories:  </h3>
      <h4 className='value'>{props.calories}</h4>
    </div>
    <div className='carb'>
      <h3 className='label'>Carbohydrates:  </h3>
      <h4 className='value'>{props.carbohydrates}</h4>
    </div>
    <div className='fat'>
      <h3 className='label'>Fat:  </h3>
      <h4 className='value'>{props.fat}</h4>
    </div>
    <div className='pro'>
      <h3 className='label'>Protein:  </h3>
      <h4 className='value'>{props.protein}</h4>
    </div>
    {nameOrSubmit()}
  </div>
  );
};

export default Nutrition;