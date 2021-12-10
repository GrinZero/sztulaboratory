import { Avatar, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@modern-js/runtime/router';
import type { LaboratoryItem } from '../Laboratory.type';

interface LaboratoryListItemProps {
  source: LaboratoryItem;
  style?: any;
}
const LaboratoryListItem: React.FC<LaboratoryListItemProps> = ({
  source,
  style,
}) => (
  <Link
    to={`/index/laboratory_detail/${source.laboratoryID}`}
    style={style}
    key={source.laboratoryID}
    className={`flexCol rounded-md shadow-sm w-56 bg-white hover:shadow-lg transition-shadow`}>
    <span className={`my-3 text-base text-gray-700`}>
      {source.laboratoryName}
    </span>
    <Avatar src={source.avatarUrl} size={50} />
    <span className={`text-xs text-gray-400 mt-5`}>{source.nickName}</span>
    <Divider style={{ margin: '0.5rem' }} />
    <div className={`flexCol w-full mb-3`}>
      <div className={`flexRow text-xs text-gray-500`}>
        <FontAwesomeIcon icon={faBalanceScale} />
        <span className="ml-1">{`${source.resourceNum} 资源`}</span>
      </div>
    </div>
  </Link>
);
export default LaboratoryListItem;
