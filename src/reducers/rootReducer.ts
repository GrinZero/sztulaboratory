import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  baseReducer,
  resourceReducer,
});

export default rootReducer;
