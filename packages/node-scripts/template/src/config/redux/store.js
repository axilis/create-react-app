import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducer';
import history from '../router/history';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);
