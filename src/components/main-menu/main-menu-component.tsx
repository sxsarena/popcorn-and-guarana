import React from 'react';

import styles from './main-menu.module.scss';

interface Props {
  currentCity?: string
}

const MainMenu: React.FC<Props> = (Props) => {
  return (
    <nav className={styles.mainMenu}>
      <ul className={styles['mainMenu-list']}>
        <li className={styles['mainMenu-item']}>
          <a href="#" className={styles['mainMenu-link']}>
            <svg className={styles['mainMenu-icon']} width="24" height="24">
              <use xlinkHref="#icon-city"></use>
            </svg>
            <span className={styles['mainMenu-text']}>São Paulo</span>
          </a>
        </li>
        <li className={styles['mainMenu-item']}>
          <a href="#" className={styles['mainMenu-link']}>
            <svg className={styles['mainMenu-icon']} width="24" height="24">
              <use xlinkHref="#icon-profile"></use>
            </svg>
            <span className={styles['mainMenu-text']}>Olá, Visitante</span>
          </a>
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

export default MainMenu
