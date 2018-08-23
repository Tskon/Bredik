import { combineReducers } from 'redux';

import { user } from 'redux/reducers/user';
import { article } from 'redux/reducers/article';


const rootReducer = combineReducers({
  user,
  article,
});

export default rootReducer;