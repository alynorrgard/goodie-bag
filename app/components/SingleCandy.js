import React from 'react';

const Candy = props => (
  <div key={props.candy.id}>
    <a>
      <img src={props.candy.imageUrl} />
      <h3>{props.candy.name}</h3>
      <h4>{props.candy.description}</h4>
      <p>Quantity: {props.candy.quantity}</p>
    </a>
  </div>
);

export default Candy;
