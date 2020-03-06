import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IMovie } from '../../store/movies/types';
import { ICities } from '../../store/cities/types';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/movies/actions';

import CatalogComponent from './catalog-component';

interface StateFromProps {
  cities: ICities,
  movies: IMovie[],
  filters: [],
  term: string
}

interface DispatchFromProps {
  loadRequest(): void
}

const mapStateToProps = ({ movies, cities }: ApplicationState) => ({
  term: movies.term,
  movies: movies.data.movies,
  filters: movies.data.filters,
  currentCityID: cities.currentID
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(CatalogComponent);
