import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Tooltip, Form, InputNumber, Input } from 'antd';
import { ColumnType } from 'antd/lib/table';
import TableNameCell from '../TableNameCell/TableNameCell';
import TableOperationCell from '../TableOperationCell/TableOperationCell';
import type { Resource } from '../../Resource.type';
import style from './ResourceTable.module.scss';
import { changeTable, setActiveSource } from '@/actions/resourceActions';
import store_ from '@/store/store';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  inputEle: React.ReactNode | string;
  record: Resource;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => (
  <td {...restProps}>
    {editing ? (
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Please Input ${title}!`,
          },
        ]}>
        {inputType === 'number' ? <InputNumber /> : <Input />}
      </Form.Item>
    ) : (
      <div style={{ padding: '4px 11px', border: 'solid 1px transparent' }}>
        {children}
      </div>
    )}
  </td>
);

const ResourceTable = () => {
  const activeSource = useSelector(
    (store: any) => store.resourceReducer.resourceTable.activeSource,
  );
  const pagination = useSelector(
    (store: any) => store.resourceReducer.resourceTable.pagination,
  );
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [editingKey, setEditingKey] = useState('');
  const cancel = useCallback(() => {
    setEditingKey('');
  }, []);
  const isEditing = useCallback(
    (record: Resource) => record.key === editingKey,
    [editingKey],
  );
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Resource;
      const newData = [...activeSource];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
      } else {
        newData.push(row);
      }
      dispatch(setActiveSource(newData));
      setEditingKey('');
      return true;
    } catch (errInfo) {
      console.error('Validate Failed:', errInfo);
      return false;
    }
  };
  const edit = (record: Partial<Resource> & { key: React.Key }) => {
    form.setFieldsValue({
      name: '',
      type: '',
      totalNum: 0,
      remainNum: 0,
      ...record,
    });
    setEditingKey(record.key);
  };
  const columns = (function () {
    const nameColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      width: 240,
      editable: true,
      render: (text: string, source: Resource) => (
        <TableNameCell
          src={source.iconPath}
          width={90}
          id={source.id}
          text={text}
        />
      ),
    };
    const resourceDetailColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '备注',
      width: 450,
      editable: true,
      dataIndex: 'resourceDetail',
      key: 'resourceDetail',
      render: (resourceDetail: string) => (
        <Tooltip title={resourceDetail}>{resourceDetail}</Tooltip>
      ),
    };
    const typeColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '类型',
      editable: true,
      width: 160,
      dataIndex: 'type',
      key: 'type',
      filters: store_.getState().baseReducer.resourceForm.type.map(item => ({
        text: item,
        value: item,
      })),
      onFilter: (value: any, record: Resource) =>
        record.type.startsWith(`${value}`),
    };
    const totalNumColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '总数量',
      editable: true,
      width: 180,
      dataIndex: 'totalNum',
      key: 'totalNum',
      sorter: (a: Resource, b: Resource) => a.totalNum - b.totalNum,
      sortDirections: ['descend', 'ascend'],
    };
    const remainNumColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '剩余数量',
      width: 180,
      editable: true,
      dataIndex: 'remainNum',
      key: 'remainNum',
      sorter: (a: Resource, b: Resource) => a.remainNum - b.remainNum,
      sortDirections: ['descend', 'ascend'],
    };
    const operationColumn: ColumnType<Resource> & { editable: boolean } = {
      title: '编辑',
      dataIndex: 'operation',
      editable: false,
      render: (_: any, record: Resource) => {
        const editable = isEditing(record);
        return (
          <TableOperationCell
            editable={editable}
            saveFunc={() => save(record.key)}
            cancelFunc={cancel}
            editFunc={() => edit(record)}
            disabledEditing={editingKey !== ''}
          />
        );
      },
    };
    return [
      nameColumn,
      resourceDetailColumn,
      typeColumn,
      totalNumColumn,
      remainNumColumn,
      operationColumn,
    ];
  })().map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Resource) => ({
        record,
        inputType:
          col.dataIndex === 'totalNum' || col.dataIndex === 'remainNum'
            ? 'number'
            : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    } as ColumnType<Resource> & { editable: boolean };
  });
  const dispatch = useDispatch();
  const handleTableChange = useCallback(async (pagination_: any) => {
    await dispatch(changeTable(pagination_));
    setLoading(false);
  }, []);
  return (
    <Form form={form} component={false}>
      <Table
        dataSource={activeSource}
        pagination={{ ...pagination, onChange: cancel }}
        rowKey={record => record.id}
        columns={columns}
        rowClassName={style['editable-row']}
        loading={loading}
        onChange={handleTableChange}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
      />
    </Form>
  );
};
export default ResourceTable;
