import React from 'react';
import Candy from './SingleCandy';

const CandiesList = props => (
  <div id="candies" className="candy rows">
    {props.candies.map(candy => (
      <Candy key={candy.id} candy={candy} />
    ))}
  </div>
);

export default CandiesList;
