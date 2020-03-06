import React, { Component } from 'react';
import classnames from 'classnames';

import { IMovie } from '../../store/movies/types';

import Filter from '../filter';
import Card from '../card';

import styles from './catalog.module.css';

interface IProps {
  movies: IMovie[],
  filters: [],
  loadRequest(cityId: string): void
}

class Catalog extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    const { loadRequest } = props;

    loadRequest('1');
  }

  render() {
    const { movies, filters } = this.props;

    return (
      <div>
        <Filter filters={filters} />
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
            {movies?.map(movie => (
              <li className={styles['moviesList-item']} key={movie.title}><Card movie={movie} /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Catalog;
