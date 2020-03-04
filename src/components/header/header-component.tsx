import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

interface HeaderProps {
  currentCity?: string
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <h2>Header</h2>
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
    </header>
  )
}

export default Header
