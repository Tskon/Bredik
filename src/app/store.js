import {createStore, combineReducers, applyMiddleware} from 'redux';

//redusers
import {getSolutions} from '~/app/redusers/solution-reduser';
import {getUser} from '~/app/redusers/user-reducer'

const redusers = combineReducers({
    getSolutions: getSolutions,
    user: getUser
});

//middlewares
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(promise(), logger);

//create store
const store = createStore(redusers, middleware);

export default store;