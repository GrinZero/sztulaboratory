import type { Action } from '../actions/action.type';
import type { ResourceFormItem } from '../components/Resource/Resource.type';

const resourceForm: ResourceFormItem = {
  company: ['个', '份', '克', '千克', '张'],
  type: ['消耗资源', '借出资源', '分配资源'],
};

const initialState = {
  resourceForm,
};

const baseReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default baseReducer;
