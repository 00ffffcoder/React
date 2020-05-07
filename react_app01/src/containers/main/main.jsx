// 主界面 路由组件

import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';

import BossInfo from '../boss-info/boss-info';
import JobHunterInfo from '../jobhunter-info/jobhunter-info';
import Boss from '../boss/boss';
import JobHunter from '../jobhunter/jobhunter';
import Message from '../message/message';
import Personal from '../personal/personal';
import NotFound from '../../components/not-found/not-found';
import NavFooter from '../../components/nav-footer/nav-footer';
import Chat from '../chat/chat';


import getRedirectPath from '../../utils/tool';


class Main extends Component{

  navList = [
    {
      path: '/boss', // 路由路径
      component: Boss,
      title: 'JobHunter列表',
      icon: 'JobHunter',
      text: 'JobHunter',
    },
    {
      path: '/jobhunter', // 路由路径
      component: JobHunter,
      title: 'Boss列表',
      icon: 'Boss',
      text: 'Boss',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ];





  render(){
    // 得到当前请求的 path
    const pathname = this.props.location.pathname;

    const {user} = this.props;

    // 检查用户是否登录，若没有，转到登录界面
    if (!user._id){
      return <Redirect to={'/login'} />
    }else {
      // 请求根路径时, 自动 跳转到对应的用户主界面
      if (pathname === '/') {
        const path = getRedirectPath(user.type, user.header);
        return <Redirect to={path}/>
      }

      if (user.type === 'BOSS') {
        this.navList[1].hide = true
      } else {
        this.navList[0].hide = true
      }
    }



    //得到当前的 nav。find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
    const currentNav = this.navList.find(nav => nav.path === pathname);


    return (
      <div>
        {currentNav ? <NavBar className='stick-top'>{currentNav.title}</NavBar> : null}
        <Switch>
          <Route path='/bossinfo' component={BossInfo} />
          <Route path='/jobhunterinfo' component={JobHunterInfo} />

          <Route path='/boss' component={Boss}/>
          <Route path='/jobhunter' component={JobHunter}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>

          <Route path='/chat/:userid' component={Chat}/>
          <Route component={NotFound}/>
        </Switch>

        {currentNav ? <NavFooter navList={this.navList}/> : null}
      </div>
    );

  }

}

export default connect(
  state => ({user:state.user}),
)(Main)