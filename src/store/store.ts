import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

declare const window: Window & {
  WebViewJavascriptBridge: any;
  WVJBCallbacks: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};
// 添加支持浏览器redux插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
