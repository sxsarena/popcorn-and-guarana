import React from 'react';
import classnames from 'classnames';

import Filter from '../filter';
import Card from '../card';

import styles from './catalog.module.scss';

const Catalog: React.FC = () => {
  const types = [
    { id: 4, name: "3D", alias: "3D", display: true },
    { id: 4096, name: "D-Box", alias: "D-BOX", display: true },
    { id: 1, name: "Dublado", alias: "DUB", display: true }
  ];

  return (
    <div>
      <Filter types={types} />
      <div className={styles.tabs}>
        <ul className={styles['tabs-list']}>
          <li className={styles['tabs-item']}>
            <button className={classnames(styles['tabs-button'], styles['tabs-button--active'])}>Em Cartaz</button>
          </li>
          <li className={styles['tabs-item']}>
            <button className={styles['tabs-button']}>Em Breve</button>
          </li>
        </ul>

        <ul className={styles.moviesList}>
          <li className={styles['moviesList-item']}><Card /></li>
          <li className={styles['moviesList-item']}><Card /></li>
          <li className={styles['moviesList-item']}><Card /></li>
          <li className={styles['moviesList-item']}><Card /></li>
          <li className={styles['moviesList-item']}><Card /></li>
        </ul>
      </div>
    </div>
  )
}

export default Catalog;
