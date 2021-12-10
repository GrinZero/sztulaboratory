import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ResourceForm from '../ResourceForm/ResourceForm';
import styles from './ResourceMask.module.scss';

const ResourceMask = () => {
  const [show, setShow] = useState(false);
  let showMask = <div></div>;
  if (show) {
    showMask = (
      <div className={`mt-5`}>
        <ResourceForm />
      </div>
    );
  }
  return (
    <div className={`flexCenter text-white ${styles.mask} bg-gray-700`}>
      {showMask}
      <div
        className={`flexCol text-white overflow-hidden w-full h-6 ${styles.maskBottom}`}>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={`h-6 w-24 bg-gray-700 hover:shadow-2xl cursor-pointer flexCenter ${
            styles['fa-angle']
          } ${show ? styles['fa-angle-active'] : ''}`}>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`text-white ${show ? 'opacity-0' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};
export default ResourceMask;
