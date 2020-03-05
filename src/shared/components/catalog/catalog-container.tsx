import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IMovie } from '../../store/movies/types';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/movies/actions';

import CatalogComponent from './catalog-component';

interface StateFromProps {
  movies: IMovie[]
}

interface DispatchFromProps {
  loadRequest(): void
}

const mapStateToProps = ({ movies }: ApplicationState) => ({
  movies: movies.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(CatalogComponent);
