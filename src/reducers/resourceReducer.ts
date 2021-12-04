import type { Action } from '../actions/action.type';
import type { ResourceTable } from '../components/Resource/Resource.type';
import { resourceTableActiveChange } from './reducer.name';

const resourceTable: ResourceTable = {
  pagination: {
    current: 1,
    pageSize: 10,
    total: 200,
  },
  activeSource: [],
  source: [[], []],
};

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(item => {
  resourceTable.source[0].push({
    id: `${item}`,
    key: `${item}`,
    laboratoryID: item ? `${item}` : null,
    name: `打印机墨水${item}`,
    type: '消耗资源',
    totalNum: 10,
    remainNum: 8.211,
    company: '克',
    resourceDetail: `${item}号打印机`,
    iconPath: 'https://z3.ax1x.com/2021/12/02/otIHdP.png',
  });
});
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(item => {
  resourceTable.source[1].push({
    id: `${item + 10}`,
    key: `${item + 10}`,
    laboratoryID: item ? `${10 + item}` : null,
    name: `打印机墨水${10 + item}`,
    type: '消耗资源',
    totalNum: 10,
    remainNum: 8.0,
    company: '克',
    resourceDetail: `${item}号打印机`,
    iconPath: 'https://z3.ax1x.com/2021/12/02/otIHdP.png',
  });
});
resourceTable.activeSource = resourceTable.source[0];
const initialState = {
  resourceTable,
};

const resourceReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case resourceTableActiveChange:
      state.resourceTable.activeSource = [...action.payload.activeSource];
      state.resourceTable.pagination = {
        ...state.resourceTable.pagination,
        ...action.payload.pagination,
      };
      if (action.payload.changeSource) {
        state.resourceTable.source[state.resourceTable.pagination.current - 1] =
          state.resourceTable.activeSource;
      }
      state.resourceTable = { ...state.resourceTable };
      return { ...state };
    default:
      return state;
  }
};
export default resourceReducer;
