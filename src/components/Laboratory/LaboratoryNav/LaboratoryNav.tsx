import { Button } from 'antd';
import { useSelector } from 'react-redux';

const LaboratoryNav = () => {
  const total = useSelector((store: any) => store.laboratoryReducer.total);
  return (
    <div className={`w-full rounded-lg h-10 flexRow`}>
      <span className={`text-gray-500 ml-3 text-sm`}>
        共管理{total}个实验室
      </span>
      <div className={`ml-3 transform scale-90`}>
        <Button type="primary">新建实验室</Button>
      </div>
    </div>
  );
};
export default LaboratoryNav;
