//引入第三方模块
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//引入自定义模块
import App from './components/app';
import './index.css';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"));

