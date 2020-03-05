import React, { useState } from 'react';
import classnames from 'classnames';

import ChangeCity from '../change-city';

import styles from './main-menu.module.css';

interface Props {
  currentCity?: string
}

const MainMenu: React.FC<Props> = (Props) => {
  const [showChooseACity, setShowChooseACity] = useState(false);

  const handleShowChooseACity = () => {
    setShowChooseACity(!showChooseACity);
  }

  return (
    <nav className={styles.mainMenu}>
      <ul className={styles['mainMenu-list']}>
        <li className={styles['mainMenu-item']}>
          <button className={classnames(styles['mainMenu-link'], {
            [styles['mainMenu-link--active']]: showChooseACity
          })} onClick={handleShowChooseACity}>
            <svg className={styles['mainMenu-icon']} width="24" height="24">
              <use xlinkHref="#icon-city"></use>
            </svg>
            <span className={styles['mainMenu-text']}>São Paulo</span>
          </button>
          {showChooseACity && <ChangeCity />}
        </li>
        <li className={styles['mainMenu-item']}>
          <button className={styles['mainMenu-link']}>
            <svg className={styles['mainMenu-icon']} width="24" height="24">
              <use xlinkHref="#icon-profile"></use>
            </svg>
            <span className={styles['mainMenu-text']}>Olá, Visitante</span>
          </button>
        </li>
        <li className={styles['mainMenu-item']}>
          <a className={styles['mainMenu-link']} href="https://atendimento.ingresso.com/hc/pt-br" target="_blank" rel="noopener noreferrer">
            <svg className={styles['mainMenu-icon']} width="24" height="24">
              <use xlinkHref="#icon-faq"></use>
            </svg>
            <span className={styles['mainMenu-text']}>Atendimento</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu;
