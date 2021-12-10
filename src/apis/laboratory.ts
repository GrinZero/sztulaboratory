import { axiosBase } from '.';

const initLaboratoryListControl = () => {
  let pageSize = 0;
  const limit = 10;
  return {
    async next(func: any) {
      pageSize += limit;
      const res = await axiosBase.post('/getLaboratoryList', {
        data: {
          pageSize: pageSize - 10,
        },
      });
      func?.(res);
    },
    clear() {
      pageSize = 0;
    },
  };
};

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export { initLaboratoryListControl };
