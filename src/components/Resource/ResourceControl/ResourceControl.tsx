import React, { useState } from 'react';
import ResourceForm from './ResourceForm/ResourceForm';
import ResourceTable from './ResourceTable/ResourceTable';
import styles from './ResourceControl.module.scss';

const ResourceControl = () => {
  const [showSituation, setShowSituation] = useState(false);
  return (
    <div className={`w-full flexCol relative`}>
      {showSituation ? (
        <div onClick={() => setShowSituation(true)}></div>
      ) : (
        <></>
      )}
      <div className={`w-full flexCol mt-5`}>
        <ResourceForm />
      </div>
      <div className={`w-full flexCol mt-5`}>
        <div className={`${styles.table}`}>
          <ResourceTable />
        </div>
      </div>
    </div>
  );
};
export default ResourceControl;
