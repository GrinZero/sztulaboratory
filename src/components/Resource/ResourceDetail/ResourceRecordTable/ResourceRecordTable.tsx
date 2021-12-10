import React, { useState, useEffect } from 'react';
import { Table, Tooltip } from 'antd';
import type { TablePaginationConfig } from 'antd';
import { getResourceRecord } from '@/apis/resourceRecord';

interface ResourceRecordTableProps {
  resourceID: string;
}
const columns: Array<any> = [
  {
    title: '记录ID',
    dataIndex: 'id',
    key: 'id',
    width: 90,
  },
  {
    title: '使用人',
    dataIndex: 'userName',
    key: 'id',
    width: 180,
  },
  {
    title: '详情',
    dataIndex: 'event',
    key: 'id',
    ellipsis: true,
    render: (event: string) => <Tooltip title={event}>{event}</Tooltip>,
  },
  {
    title: '事件数量',
    dataIndex: 'num',
    key: 'id',
    width: 125,
  },
  {
    title: '剩余数量',
    dataIndex: 'remain',
    key: 'id',
    width: 125,
  },
  {
    title: '创建时间',
    width: 240,
    dataIndex: 'createTime',
    key: 'id',
    render: (createTime: string | number) => (
      <span>{new Date(createTime).format('yyyy-MM-dd hh:mm:ss')}</span>
    ),
  },
];
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
    event: '正常打印机损耗',
    id: '13',
    userName: '王加博',
    useID: '1',
    createTime: '2021-10-18 12:12:12',
    num: '3.12',
  },
  {
    event: '正常打印机损耗',
    id: '4',
    userName: '王加博',
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
    event: '正常打印机损耗',
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
const ResourceRecordTable: React.FC<ResourceRecordTableProps> = ({
  resourceID,
}) => {
  const [source, setSource] = useState(monidata);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 200,
  } as TablePaginationConfig);
  const [loading, setLoading] = useState(false);
  const handleTableChange = async (e: TablePaginationConfig) => {
    setLoading(true);
    const record = await getResourceRecord(e);
    setLoading(false);
    setPagination(e);
    setSource(record);
  };
  useEffect(() => {
    handleTableChange(pagination);
  }, []);
  return (
    <Table
      dataSource={source}
      pagination={pagination}
      loading={loading}
      columns={columns}
      onChange={handleTableChange}
    />
  );
};
export default ResourceRecordTable;
