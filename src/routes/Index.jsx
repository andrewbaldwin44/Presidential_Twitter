import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import FourOhFour from '../components/FourOhFour';

function Routes({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/*' exact component={FourOhFour} />
      </Switch>
    </Router>
  );
}

export default Routes;
