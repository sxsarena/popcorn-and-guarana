import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IMovie } from '../../store/movies/types';
import { ApplicationState } from '../../store';

import * as MoviesActions from '../../store/movies/actions';

import CatalogComponent from './catalog-component';

interface StateProps {
  movies: IMovie[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: ApplicationState) => ({
  movies: state.movies.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
