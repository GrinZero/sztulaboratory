import { axiosBase } from '.';
import { sleep } from '@/extension/public';
// import type { LaboratoryDetail } from '@/components/Laboratory/Laboratory.type';

const initLaboratoryListControl = () => {
  let pageSize = 0;
  const limit = 10;
  return {
    async next(func: any) {
      pageSize += limit;
      const res = await axiosBase.post('/getLaboratoryList', {
        data: {
          pageSize: pageSize - 10,
        },
      });
      func?.(res);
    },
    clear() {
      pageSize = 0;
    },
  };
};

const getLaboratoryDetail = async (id: string) => {
  await sleep(500);
  return {
    laboratoryDetail: '安心敲代码实验室',
    laboratoryID: id,
    laboratoryName: '实验室中控',
    nickName: '王道伟',
    resourceNum: 10,
    avatarUrl: 'https://ali-cdn.educoder.net/images/avatars/User/b',
    otherPeople: ['源心锁', 'TTDD'],
  };
};

export { initLaboratoryListControl, getLaboratoryDetail };
