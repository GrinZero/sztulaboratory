import { Route } from '@modern-js/runtime/router';
import React from 'react';
import LaboratoryControl from './LaboratoryControl/LaboratoryControl';

const Laboratory = () => (
  <>
    <Route path="/index/laboratory_control" component={LaboratoryControl} />
    <Route path="/index/laboratory_detail/:id" />
  </>
);
export default Laboratory;
