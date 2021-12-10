import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'https://myt2000s.nl4ever.cn:50330/index1/',
  timeout: 1000,
  headers: { token: 'foobar' },
});
export { axiosBase };
