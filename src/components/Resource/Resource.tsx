import { Switch, Route, Redirect } from '@modern-js/runtime/router';
import React from 'react';
import ResourceControl from './ResourceControl/ResourceControl';

const Resource = () => (
  <div className="page-container">
    <Switch>
      <Route exact={true} path="/index">
        <Redirect from="/index" to="/index/resource_control" />
      </Route>
      <Route path="/index/resource_control" component={ResourceControl} />
    </Switch>
  </div>
);
export default Resource;
