import React from 'react';
import Action from './Action';

const ImpactSummary = ({ actions, clearActions, removeAction }) => {
  const totalCO2 = actions.reduce((sum, action) => sum + action.co2Reduction * action.count, 0);
  const equivalentTrees = (totalCO2 / 10).toFixed(1);

  let impactColor = 'red';
  if (totalCO2 > 1) {
    impactColor = 'green';
  } else if (totalCO2 > 0.5) {
    impactColor = 'orange';
  }

  return (
    <div>
      <h2>Impact Summary</h2>
      <p>Total CO₂ Reduction: {totalCO2.toFixed(2)}kg</p>
      <p style={{ color: impactColor }}>
        {`You've saved the equivalent of ${equivalentTrees} trees planted!`}
      </p>
      <button onClick={clearActions}>Clear All Actions</button>
      {actions.length > 0 ? (
        actions.map((action) => (
          <Action
            key={action.name}
            name={action.name}
            count={action.count}
            totalCO2={action.co2Reduction * action.count}
            removeAction={() => removeAction(action.name)}
          />
        ))
      ) : (
        <p>No actions tracked yet.</p>
      )}
    </div>
  );
};

export default ImpactSummary;
