import { Image, Popover } from 'antd';
import { Link } from '@modern-js/runtime/router';

interface TableNameCellProps {
  src: string | undefined;
  width: number;
  text: string;
  id: string;
}
const TableNameCell: React.FC<TableNameCellProps> = ({
  src,
  id,
  text,
  width,
  ...restProps
}) => (
  <Popover content={src ? <Image src={src} width={width} key={id} /> : <></>}>
    <Link
      className={`cursor-pointer hover:text-green-300 transition-colors`}
      to={`/index/resource_detail/${id}`}
      {...restProps}>
      {text}
    </Link>
  </Popover>
);
export default TableNameCell;
