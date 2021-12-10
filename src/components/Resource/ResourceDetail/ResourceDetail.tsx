import { useParams } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';
import type { ResourceDetail as ResourceDetail_ } from '../Resource.type';
import ResourceRecordTable from './ResourceRecordTable/ResourceRecordTable';
import Detail from './Detail/Detail';
import { getResourceDetail } from '@/apis/resource';

interface ResoureDetailParams {
  id: string;
}

const ResourceDetail = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({} as ResourceDetail_);
  const url: ResoureDetailParams = useParams();
  useEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-then
    getResourceDetail(url.id).then(res => {
      setLoading(false);
      setDetail(res);
    });
  }, [url.id]);
  if (loading) {
    return <div></div>;
  }
  return (
    <div className={`w-full flexCol mt-10`}>
      <div className={`w-95%`}>
        <Detail source={detail} />
      </div>
      <div className={`w-95% mt-8`}>
        <ResourceRecordTable resourceID={url.id} />
      </div>
    </div>
  );
};
export default ResourceDetail;
