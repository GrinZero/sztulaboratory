import { Switch, Route, Redirect } from '@modern-js/runtime/router';
import React from 'react';
import Laboratory from '../Laboratory/Laboratory';
import ResourceControl from './ResourceControl/ResourceControl';
import ResourceDetail from './ResourceDetail/ResourceDetail';
import ResourceAdd from './ResourceControl/ResourceAdd/ResourceAdd';

const Resource = () => (
  <div className="page-container">
    <Switch>
      <Route exact={true} path="/index">
        <Redirect from="/index" to="/index/resource_control" />
      </Route>
      <Route path="/index/resource_control" component={ResourceControl} />
      <Route path="/index/resource_detail/:id" component={ResourceDetail} />
      <Route path="/index/resource/add" component={ResourceAdd} />
      <Laboratory />
    </Switch>
  </div>
);
export default Resource;
