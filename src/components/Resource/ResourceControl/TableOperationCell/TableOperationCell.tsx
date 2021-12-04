import { Popconfirm, Button } from 'antd';
import { useState } from 'react';

interface TableOperationCellProps {
  editable: boolean;
  disabledEditing: boolean;
  saveFunc: () => Promise<boolean>;
  cancelFunc: () => any;
  editFunc: () => any;
}
const TableOperationCell: React.FC<TableOperationCellProps> = ({
  editable,
  saveFunc,
  cancelFunc,
  editFunc,
  disabledEditing,
}) => {
  const [loading, setLoading] = useState(false);
  const save = async () => {
    setLoading(true);
    await saveFunc();
    setLoading(false);
  };
  return editable ? (
    <span>
      <Button
        type="primary"
        onClick={save}
        style={{ marginRight: 16 }}
        loading={loading}>
        保存
      </Button>
      <Popconfirm title="确认取消?" onConfirm={cancelFunc}>
        <a>取消</a>
      </Popconfirm>
    </span>
  ) : (
    <Button disabled={disabledEditing} onClick={editFunc} type="primary">
      编辑
    </Button>
  );
};
export default TableOperationCell;
