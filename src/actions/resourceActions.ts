import store from '@/store/store';

const changeTable = (pagination: any) => async (dispatch: any) => {
  try {
    const { source } = store.getState().resourceReducer.resourceTable;
    const { current } = pagination;
    if (!source[current - 1]) {
      await new Promise(resolve => {
        source[current - 1] = [
          {
            id: `8454`,
            key: '8454',
            laboratoryID: null,
            name: `打印机墨水999`,
            type: '消耗资源',
            totalNum: 10,
            remainNum: 8.0,
            company: '克',
            resourceDetail: `999号打印机`,
            iconPath: 'https://z3.ax1x.com/2021/12/02/otIHdP.png',
          },
        ];
        resolve(1);
      });
    }
    dispatch({
      type: 'resourceTableActiveChange',
      payload: {
        activeSource: source[current - 1],
        pagination,
      },
    });
    return 1;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
const setActiveSource = (newData: any) => (dispatch: any) => {
  dispatch({
    type: 'resourceTableActiveChange',
    payload: {
      activeSource: newData,
      pagination: {},
      changeSource: true,
    },
  });
};
export { changeTable, setActiveSource };
