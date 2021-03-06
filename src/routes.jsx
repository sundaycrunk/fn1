// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Error404 from './components/Error/404';
import Phrases from './components/Phrases';
// so the / path is set to just run the phrases component.
// there's a simple switch.

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Phrases} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
