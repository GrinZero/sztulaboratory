import { Switch, Route, Redirect } from '@modern-js/runtime/router';
import React from 'react';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { Nav } from './components/Nav/Nav';
import Resource from './components/Resource/Resource';
import './App.css';
import './AntDesgin.less';
import store from './store/store';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './source-public.scss';
import TabBar from './components/TabBar/TabBar';

const App = () => (
  <Provider store={store}>
    <ConfigProvider>
      <Route path="/" component={Nav} />
      <Route path="/" component={TabBar} />
      <Route exact={true} path="/">
        <Redirect from="/" to="/index" />
      </Route>
      <Route path="/index" component={Resource} />
      <Switch>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </ConfigProvider>
  </Provider>
);

export default App;
