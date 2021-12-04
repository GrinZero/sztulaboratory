// eslint-disable-next-line node/no-unsupported-features/es-syntax
import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'https://myt2000s.nl4ever.cn:50330/index1/',
  timeout: 1000,
  headers: { token: 'foobar' },
});

const initLaboratoryListControl = () => {
  let pageSize = 0;
  const limit = 10;
  return {
    async next(func) {
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
