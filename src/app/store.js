import {createStore, combineReducers, applyMiddleware} from 'redux';

//redusers
import {appState} from './redusers/app-state-reduser';

const redusers = combineReducers({
  appState: appState
});

//middlewares
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(promise(), logger);

//create store
const store = createStore(redusers, middleware);

export default store;