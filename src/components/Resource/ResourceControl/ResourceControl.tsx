import React from 'react';
import ResourceTable from './ResourceTable/ResourceTable';
import styles from './ResourceControl.module.scss';
import ResourceMask from './ResourceMask/ResourceMask';

const ResourceControl = () => (
  <div className={`w-full flexCol relative`}>
    <ResourceMask />
    <div className={`w-full flexCol mt-8`}>
      <div className={`${styles.table}`}>
        <ResourceTable />
      </div>
    </div>
  </div>
);
export default ResourceControl;
