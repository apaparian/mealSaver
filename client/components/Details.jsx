import React, { Component } from 'react';

const Details = (props) => (
  <div>
    <div className='details'>
      <p className='label'>Calories:  </p>
      <p className='value'>{props.calories}</p>
    </div>
    <div className='details'>
      <p className='label'>Carbohydrates:  </p>
      <p className='value'>{props.carbohydrates}</p>
    </div>
    <div className='details'>
      <p className='label'>Fat:  </p>
      <p className='value'>{props.fat}</p>
    </div>
    <div className='details'>
      <p className='label'>Protein:  </p>
      <p className='value'>{props.protein}</p>
    </div>
  </div>
);

export default Details;