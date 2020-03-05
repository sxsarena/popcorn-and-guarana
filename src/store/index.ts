import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MoviesState } from './movies/types';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export interface ApplicationState {
  movies: MoviesState
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store: Store<ApplicationState> = createStore(rootReducer,enhancer);

sagaMiddleware.run(rootSaga);

export default store;
