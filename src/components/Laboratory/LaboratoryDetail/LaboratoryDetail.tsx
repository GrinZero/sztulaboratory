import { useParams } from '@modern-js/runtime/router';

interface LaboratoryDetailParams {
  id: string;
}

const LaboratoryDetail = () => {
  const url: LaboratoryDetailParams = useParams();
  return <div>{url.id}</div>;
};
export default LaboratoryDetail;
