import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

import saga from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(
  reducer,
  composedEnhancer
);

sagaMiddleware.run(saga);

export default store;
