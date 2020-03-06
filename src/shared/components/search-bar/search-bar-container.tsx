import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as MoviesActions from '../../store/movies/actions';

import SearchComponent from './search-bar-component';

interface DispatchFromProps {
  searchMovie(term: string): void
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch);

export default connect<void, DispatchFromProps, void>(
  null,
  mapDispatchToProps
)(SearchComponent);
