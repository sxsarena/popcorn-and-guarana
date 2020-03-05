import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layouts/app';

const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>404</h1>;

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
