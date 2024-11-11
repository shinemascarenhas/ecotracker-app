import React, { useState, useEffect } from 'react';
import ActionList from './ActionList';
import ImpactSummary from './ImpactSummary';
import './App.css'; 

const App = () => {
  const [actions, setActions] = useState([]);

  // Load saved actions from localStorage on initial render
  useEffect(() => {
    const savedActions = JSON.parse(localStorage.getItem('actions'));
    if (savedActions) {
      setActions(savedActions);
    }
  }, []);

  // Save actions to localStorage on each change
  useEffect(() => {
    localStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  // Add new action to the list
  const addAction = (action) => {
    setActions((prevActions) => {
      const existingAction = prevActions.find((a) => a.name === action.name);
      if (existingAction) {
        return prevActions.map((a) =>
          a.name === action.name
            ? { ...a, count: a.count + 1 }
            : a
        );
      } else {
        return [...prevActions, { ...action, count: 1 }];
      }
    });
  };

  // Remove an action from the list
  const removeAction = (name) => {
    setActions(actions.filter((action) => action.name !== name));
  };

  // Clear all actions
  const clearActions = () => {
    setActions([]);
  };

  return (
    <div>
      <h1>Eco-Friendly Tracker</h1>
      <ActionList addAction={addAction} />
      <ImpactSummary actions={actions} clearActions={clearActions} removeAction={removeAction} />
    </div>
  );
};

export default App;
