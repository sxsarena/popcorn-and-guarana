import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

import HeaderComponent from './header-component';

interface StateFromProps {
  currentCity: string
}

interface DispatchFromProps {
}

const mapStateToProps = ({ cities }: ApplicationState) => ({
  currentCity: cities.cities.filter(city => city.id === cities.currentID)[0].name
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
