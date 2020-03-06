import React, { Component } from 'react';
import classnames from 'classnames';

import { IMovie } from '../../store/movies/types';

import Filter from '../filter';
import Card from '../card';

import styles from './catalog.module.css';

interface IProps {
  currentCityID: string,
  movies: IMovie[],
  filters: [],
  term: string,
  loadRequest(cityId: string): void
}

interface IState {
  movies: IMovie[],
  filteredMovies: IMovie[],
  selectedFilters: string[]
}

class Catalog extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { loadRequest, currentCityID } = props;

    this.state = {
      movies: props.movies,
      filteredMovies: props.movies,
      selectedFilters: []
    }

    loadRequest(currentCityID);
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({
        movies: this.props.movies,
        filteredMovies: this.props.movies
      });
    }

    if (prevProps.term !== this.props.term) {
      this.setState({ filteredMovies: this.props.movies.filter(movie => movie.title?.toLowerCase().includes(this.props.term.toLowerCase()))});
    }
  }

  handleFilters = (filter: string) => {
    const { selectedFilters, movies } = this.state;
    let newFilter: string[] = [];

    if (selectedFilters.includes(filter)) {
      newFilter = [...selectedFilters.filter(item => item !== filter)];
    } else {
      newFilter = [...selectedFilters, filter];
    }

    this.setState({
      selectedFilters: newFilter,
      filteredMovies: newFilter.length === 0 ? movies : movies?.filter(item => this.checkCommonElement(newFilter, item.filters) && item.title?.toLowerCase().includes(this.props.term.toLowerCase()))
    })
  }

  checkCommonElement = (selectedFilters: string[], movieFilters: string[]) => {
    for(let i = 0; i < selectedFilters.length; i++) {
      for(let j = 0; j < movieFilters.length; j++) {
        if(selectedFilters[i] === movieFilters[j]) {
          return true;
        }
      }
    }
    return false;
  }

  render() {
    const { filters } = this.props;
    const { filteredMovies } = this.state;

    return (
      <div>
        <Filter filters={filters} onChange={this.handleFilters} />
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
            {filteredMovies?.map(movie => (
              <li className={styles['moviesList-item']} key={movie.title}><Card movie={movie} /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Catalog;
