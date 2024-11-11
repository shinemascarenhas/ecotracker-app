
import React from 'react';

const ecoActions = [
  { name: 'Recycle Plastic', co2Reduction: 0.1 },
  { name: 'Bike Instead of Drive', co2Reduction: 0.4 },
  { name: 'Use Public Transport', co2Reduction: 0.2 },
];

const ActionList = ({ addAction }) => {
  return (
    <div>
      <h2>Available Actions</h2>
      <ul>
        {ecoActions.map((action) => (
          <li key={action.name}>
            {action.name} - {action.co2Reduction}kg CO₂
            <button onClick={() => addAction(action)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList;
