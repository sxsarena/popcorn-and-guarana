import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layouts/app';
import Home from './screens/home';
import NotFound from './screens/not-found';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
