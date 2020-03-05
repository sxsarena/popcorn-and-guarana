import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './root-reducer';

type StoreParams = {
  initialState?: { [key: string]: any };
  middleware?: any[];
};

export const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
  const devtools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const composeEnhancers = devtools || compose;

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./root-reducer', () =>
        store.replaceReducer(require('./root-reducer').default)
      );
    }
  }

  return store;
};

export default configureStore;
