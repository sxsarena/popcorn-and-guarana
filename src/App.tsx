import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>404</h1>;

const NavBar = () => (
  <ul>
    <li>
      <NavLink activeClassName="active"  to="/">Home</NavLink>
    </li>
    <li>
      <NavLink
        to={{
          pathname: '/filmes',
          search: '?city=rio-de-janeiro',
          state: { fromNavBar: true }
        }}
      >
        Nome do filme
      </NavLink>
    </li>
  </ul>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
