import type { Action } from '../actions/action.type';

const laboratoryList: Array<any> = [];
const initialState = {
  laboratoryList,
  total: 2,
};

const laboratoryReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default laboratoryReducer;
