import {createStore, combineReducers, applyMiddleware} from 'redux';

//redusers
import {appState} from './redusers/app-state-reduser';

const redusers = combineReducers({
  appState: appState
});

//middlewares
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise());

//create store
const store = createStore(redusers, middleware);

export default store;