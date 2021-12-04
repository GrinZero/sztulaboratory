import { Image, Popover } from 'antd';

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
}) => {
  const click = () => {
    console.error('d');
  };
  return (
    <Popover content={src ? <Image src={src} width={width} key={id} /> : <></>}>
      <span
        className={`cursor-pointer hover:text-green-300 transition-colors`}
        onClick={click}
        {...restProps}>
        {text}
      </span>
    </Popover>
  );
};
export default TableNameCell;
