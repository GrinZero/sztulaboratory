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

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (format: string) {
  const o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      `${this.getFullYear()}`.substr(4 - RegExp.$1.length),
    );
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      );
    }
  }
  return format;
};
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
