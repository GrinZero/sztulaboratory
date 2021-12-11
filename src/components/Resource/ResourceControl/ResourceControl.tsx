import React from 'react';
import { Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@modern-js/runtime/router';
import ResourceTable from './ResourceTable/ResourceTable';
import styles from './ResourceControl.module.scss';
import ResourceMask from './ResourceMask/ResourceMask';

const ResourceControl = () => (
  <div className={`w-full flexCol relative`}>
    <ResourceMask />
    <div className={`w-95% flex-row-reverse flex mt-8 items-center`}>
      <Space>
        <div
          className={`flexCenter transform hover:rotate-180 transition-transform cursor-pointer w-10 h-10`}>
          <FontAwesomeIcon icon={faRedoAlt} />
        </div>
        <Link to="/index/resource/add">
          <Button type="primary">新建</Button>
        </Link>
        <Button>导入数据</Button>
        <Button>导出数据</Button>
      </Space>
    </div>
    <div className={`w-full flexCol mt-3`}>
      <div className={`${styles.table}`}>
        <ResourceTable />
      </div>
    </div>
  </div>
);
export default ResourceControl;
