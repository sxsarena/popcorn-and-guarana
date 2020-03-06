import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IMovie } from '../../store/movies/types';
import { ICity } from '../../store/cities/types';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/movies/actions';

import CatalogComponent from './catalog-component';

interface StateFromProps {
  cities: ICity,
  movies: IMovie[],
  filters: []
}

interface DispatchFromProps {
  loadRequest(): void
}

const mapStateToProps = ({ movies, cities }: ApplicationState) => ({
  movies: movies.data.movies,
  filters: movies.data.filters,
  currentCityID: cities.currentID
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(CatalogComponent);
