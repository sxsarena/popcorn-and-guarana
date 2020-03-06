import React from 'react';
import { NavLink } from 'react-router-dom';

import MainMenu from '../main-menu';
import SearchBar from '../search-bar';

import styles from './header.module.css';

interface Props {
  currentCity?: string
}

const Header: React.FC<Props> = ({ currentCity }: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logotype}>
        <NavLink to="/">
          <svg viewBox="0 0 254 40" className={styles['logotype-svg']}>
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </NavLink>
      </h1>
      <div className={styles['header-nav']}>
        <SearchBar />
        <MainMenu currentCity={currentCity} />
      </div>
    </header>
  )
}

export default Header
