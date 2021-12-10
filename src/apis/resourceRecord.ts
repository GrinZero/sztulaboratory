import type { TablePaginationConfig } from 'antd';
import { axiosBase } from '.';
import { sleep } from '@/extension/public';

const monidata = [
  {
    id: '1',
    event: '正常打印机损耗',
    userName: '王加博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '1',
  },
  {
    id: '2',
    event: '正常打印机损耗',
    userName: '王加博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '2',
  },
  {
    event: '正机损耗',
    id: '13',
    userName: '王加博sdf',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '3.12',
  },
  {
    event: '正常打印机损耗',
    id: '4',
    userName: '博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '0.14',
  },
  {
    event: '正常打印机损耗',
    id: '5',
    userName: '王加博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '415',
  },
  {
    event: '正耗',
    id: '54',
    userName: '王加博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '415',
  },
].map(item => {
  item.key = item.id;
  item.remain = '1';
  return item;
});
const getResourceRecord = async (pagination: TablePaginationConfig) => {
  await sleep(500);
  return monidata;
};
export { getResourceRecord };
