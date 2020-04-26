import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import MyNavLink from '../components/my-nav-link';
import About from '../views/about';
import Home from '../views/home';

export default class App extends Component{
  /*
  * 编写路由步骤：
  * 1. 编写路由组件；
  * 2. 在父路由组件中指定：
  *     路由链接：<NavLink>(或自定义的MyNavLink)
  *     路由：<Route>
  *
  * */

  render(){
    return (
      <div>
        <div className="header">❀20200426-React router demo by Xushanqing❀</div>
        <div className="left_con">
          <div className="nav_con">
            <MyNavLink className='title' to='/about'>About</MyNavLink>
            <MyNavLink className='title' to='/home'>Home</MyNavLink>
          </div>
        </div>

        <div className="right_con">
          <Switch>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
            <Redirect to='/about' />
          </Switch>
        </div>

      </div>
    );

  }

}