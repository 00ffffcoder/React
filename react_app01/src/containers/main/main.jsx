// 主界面 路由组件

import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import BossInfo from '../boss-info/boss-info';
import JobHunterInfo from '../jobhunter-info/jobhunter-info';

export default class Main extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route path='/bossinfo' component={BossInfo} />
          <Route path='/jobhunterinfo' component={JobHunterInfo} />
        </Switch>
      </div>
    );

  }

}