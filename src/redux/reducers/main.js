import { combineReducers } from 'redux';

import { user } from 'redux/reducers/user';


const rootReducer = combineReducers({
  user,
});

export default rootReducer;