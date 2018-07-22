import { createStore, applyMiddleware } from 'redux';
import rootReducer  from 'redux/reducers/main';

const store = createStore(rootReducer);

export default store;
