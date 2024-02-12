import {applyMiddleware, createStore, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {AuthReducer} from './AuthReducer';

const reducers = combineReducers({
  auth: AuthReducer,
});

const middlewares = [thunk];
export default createStore(reducers, applyMiddleware(...middlewares));
