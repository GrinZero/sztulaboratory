import { useParams } from '@modern-js/runtime/router';
import { Button, Descriptions, Popconfirm, Skeleton } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useEffect, useState } from 'react';
import type { LaboratoryDetail as LaboratoryDetail_ } from '../Laboratory.type';
import { getLaboratoryDetail } from '@/apis/laboratory';

interface DetailProps {
  source: LaboratoryDetail_ | undefined;
}
const Detail: React.FC<DetailProps> = ({ source }) => {
  if (!source) {
    return <Skeleton active={true} />;
  }
  return (
    <div className="w-full">
      <Descriptions title={source.laboratoryName} bordered={true} column={2}>
        <Descriptions.Item label="图片">
          <Avatar src={source.avatarUrl} size={64} />
        </Descriptions.Item>
        <Descriptions.Item label="管理员">
          <span>{source.nickName}</span>
        </Descriptions.Item>
        <Descriptions.Item label="协管员">
          <span>{source.otherPeople.join('；')}</span>
        </Descriptions.Item>
        <Descriptions.Item label="资量">
          <span>{source.resourceNum}</span>
        </Descriptions.Item>
        <Descriptions.Item label="详情">
          <span>{source.laboratoryDetail}</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

interface LaboratoryDetailParams {
  id: string;
}
const LaboratoryDetail = () => {
  const url: LaboratoryDetailParams = useParams();
  const [source, setSource] = useState(
    undefined as unknown as LaboratoryDetail_,
  );
  useEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-then
    getLaboratoryDetail(url.id).then(res => {
      setSource(res);
    });
  }, []);
  return (
    <div className="w-full flexCol">
      <div className="w-95% mt-5">
        <Detail source={source} />
      </div>
      <div className="w-95% mt-5">
        <div className={`font-bold text-base text-black text-opacity-80`}>
          操作
        </div>
        <div className="flexRow">
          <Popconfirm
            title="确定删除该实验室？"
            okText="否"
            cancelText="是"
            onCancel={() => {}}>
            <Button danger={true} type="primary" style={{ marginTop: '8px' }}>
              删除
            </Button>
          </Popconfirm>
        </div>
      </div>
      <div className="w-95% mt-5">
        <div className={`font-bold text-base text-black text-opacity-80`}>
          数据报表
        </div>
      </div>
    </div>
  );
};
export default LaboratoryDetail;
