import { useEffect, useState } from 'react';
import { Pagination, Spin } from 'antd';
import LaboratoryListItem from '../LaboratoryListItem/LaboratoryListItem';
import type { LaboratoryItem } from '../Laboratory.type';

const MoNiData = [
  {
    laboratoryID: '1',
    laboratoryName: '实验室中控',
    nickName: '王道伟',
    resourceNum: 10,
    avatarUrl: 'https://ali-cdn.educoder.net/images/avatars/User/b',
  },
  {
    laboratoryID: '2',
    laboratoryName: '实验室2',
    nickName: '王道伟',
    resourceNum: 10,
    avatarUrl: 'https://ali-cdn.educoder.net/images/avatars/User/b',
  },
] as Array<LaboratoryItem>;
for (let index = 0; index < 10; index++) {
  MoNiData.push({
    ...MoNiData[0],
    laboratoryID: `${10 + index}`,
  });
}
const LaboratoryList = () => {
  const [source, setSource] = useState(MoNiData);
  const [loading, setLoading] = useState(true);
  const total = 20;
  const pageSize = 12;
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const onChange = (e: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrent(e);
      setSource([
        {
          laboratoryID: '1',
          laboratoryName: '实验室中控',
          nickName: '王道伟',
          resourceNum: 10,
          avatarUrl: 'https://ali-cdn.educoder.net/images/avatars/User/b',
        },
        {
          laboratoryID: '2',
          laboratoryName: '实验室2',
          nickName: '王道伟',
          resourceNum: 10,
          avatarUrl: 'https://ali-cdn.educoder.net/images/avatars/User/b',
        },
      ]);
    }, 500);
  };
  return (
    <>
      <div className={`w-full flex flex-row flex-wrap relative`}>
        <div
          className={`absolute w-full h-full transition-opacity hidden ${
            loading
              ? 'bg-gray-50 bg-opacity-60 flexCenter z-10 pointer-events-none'
              : ''
          }`}>
          <Spin spinning={loading} tip="Loading..." />
        </div>
        {source.map(item => (
          <LaboratoryListItem
            source={item}
            key={item.laboratoryID}
            style={{ margin: '0 1rem 1rem 0' }}
          />
        ))}
      </div>
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
        defaultPageSize={pageSize}
      />
    </>
  );
};
export default LaboratoryList;
