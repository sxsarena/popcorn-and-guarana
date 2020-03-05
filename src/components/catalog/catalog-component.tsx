import React, { Component } from 'react';
import classnames from 'classnames';

import { IMovie } from '../../store/movies/types';

import Filter from '../filter';
import Card from '../card';

import styles from './catalog.module.scss';

interface Props {
  movies: IMovie[],
  loadRequest(): void
}

class Catalog extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <Filter types={[]} />
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
            {movies.map(movie => (
              <li className={styles['moviesList-item']}><Card /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Catalog;
