import React from 'react';

const Action = ({ name, count, totalCO2, removeAction }) => (
  <div>
    <span>{name} - {totalCO2.toFixed(2)}kg CO₂ (x{count})</span>
    <button onClick={removeAction}>Delete</button>
  </div>
);

export default Action;
