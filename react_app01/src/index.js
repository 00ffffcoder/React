import React from 'react';
import ReactDOM from 'react-dom';

//引入react-redux 顶层容器 Provider
import {Provider} from 'react-redux';
import store from  './redux/store';


import App from './containers/app';
import './index.css';


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));

