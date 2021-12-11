import { Route } from '@modern-js/runtime/router';
import React from 'react';
import LaboratoryControl from './LaboratoryControl/LaboratoryControl';
import LaboratoryDetail from './LaboratoryDetail/LaboratoryDetail';

const Laboratory = () => (
  <>
    <Route path="/index/laboratory_control" component={LaboratoryControl} />
    <Route path="/index/laboratory_detail/:id" component={LaboratoryDetail} />
  </>
);
export default Laboratory;
