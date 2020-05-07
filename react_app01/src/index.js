import React from 'react';
import ReactDOM from 'react-dom';


//引入react-redux 顶层容器 Provider
import {Provider} from 'react-redux';
import store from  './redux/store';

import {HashRouter,Route,Switch} from 'react-router-dom'
import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Main from "./containers/main/main";

import './components/index.css'

// import './test/socketio_test'

//Main 组件没指定path,是默认组件
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
  ,document.getElementById("root")
);

