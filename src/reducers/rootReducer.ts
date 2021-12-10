import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import resourceReducer from './resourceReducer';
import laboratoryReducer from './laboratoryReducer';

const rootReducer = combineReducers({
  baseReducer,
  laboratoryReducer,
  resourceReducer,
});

export default rootReducer;
