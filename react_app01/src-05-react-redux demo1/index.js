import React from 'react';
import ReactDOM from 'react-dom';
// react-redux仅有2个API，Provider和connect。
// Provider提供的是一个顶层容器的作用，实现store的上下文传递。
import {Provider} from 'react-redux';

import store from  './redux/store'
// react-redux 的connect函数包装原来的Counter组件，生成新的组件取名 App
import App from "./containers/app";




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

