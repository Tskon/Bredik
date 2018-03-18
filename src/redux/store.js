import {createStore, combineReducers} from 'redux';
import {appState} from './redusers/app-state-reduser';

const redusers = combineReducers({appState: appState});
const store = createStore(redusers);

export default store;