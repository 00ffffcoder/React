import React,{Component} from 'react';
import {Route} from 'react-router-dom';

import MyNavLink from '../components/my-nav-link'
import MessageDetail from "./message-detail";

export default class Messages extends Component{

  state = {
    msgs : []
  };


  componentDidMount(){
    // 模拟发送ajax请求
    setTimeout(()=>{
      const data = [
        {id:1, title: 'message001'},
        {id:3, title: 'message003'},
        {id:5, title: 'message005'},
      ];

      this.setState({msgs:data});

    },1000);

  }

  render(){
    return (
      <div>
        <ul className='news_ul'>
          {
            this.state.msgs.map((m,index)=>{
              return (
                <li key={index}>
                  <MyNavLink className='no_line' to={`/home/messages/message_detail/${m.id}`} >{m.title}</MyNavLink>
                </li>
              )
            })
          }
        </ul>

        <Route path='/home/messages/message_detail/:id' component={MessageDetail}/>

      </div>
    );

  }

}