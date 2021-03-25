import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovementsProvider } from '../contexts/MovementContext';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <MovementsProvider>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </MovementsProvider>
  );
};

export default Routes;
