import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

import * as CitiesActions from '../../store/cities/actions';
import * as MoviesActions from '../../store/movies/actions';

import ChangeCityComponent from './change-city-component';

interface StateFromProps {
  states: object[],
  cities: object[],
  currentCityID: string
}

interface DispatchFromProps {
  loadRequest(): void,
  changeCity(): void
}

const mapStateToProps = ({ cities }: ApplicationState) => ({
  states: cities.states,
  cities: cities.cities,
  currentCityID: cities.currentID
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...CitiesActions, ...MoviesActions}, dispatch);

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(ChangeCityComponent);
