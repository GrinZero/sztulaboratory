import { sleep } from '@/extension/public';
import type { ResourceDetail } from '@/components/Resource/Resource.type';

const getResourceDetail = async (id: string) => {
  await sleep(500);
  return {
    id,
    laboratoryName: '1号实验室',
    name: '打印机墨水',
    type: '消耗资源',
    totalNum: 10,
    remainNum: 8.2,
    company: '个',
    resourceDetail: '这是打印机墨水',
    key: id,
  } as ResourceDetail;
};

export { getResourceDetail };
