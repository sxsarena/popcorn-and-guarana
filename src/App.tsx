import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';

const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>404</h1>;

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
