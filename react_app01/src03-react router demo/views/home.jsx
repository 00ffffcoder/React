import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import MyNavLink from '../components/my-nav-link';
import News from "./news";
import Messages from "./messages";

export default class Home extends Component{
  render(){
    return (
      <div>
        <div className='content_title'>Home........</div>

        <ul className="second_title">
          <li><MyNavLink className='no_line' to='/home/news' >News</MyNavLink></li>
          <li><MyNavLink className='no_line' to='/home/messages' >Messages</MyNavLink></li>
        </ul>


        <Switch>
          <Route path='/home/news' component={News}/>
          <Route path='/home/messages' component={Messages}/>
          <Redirect to='/home/news' />
        </Switch>

      </div>


    );

  }

}