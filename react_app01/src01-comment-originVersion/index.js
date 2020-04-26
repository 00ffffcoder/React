//index.js 文件 为 入口js

//引入第三方模块，直接写模块名就可以
import React from 'react';
import ReactDOM from 'react-dom';

//引入自定义模块，要加相对路径
import App from './components/app';
import './index.css';

ReactDOM.render(<App />,document.getElementById("root"));

