/*
Message的主路由组件
*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {List, Badge} from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;
class Message extends Component{
  render(){
    const {user,chat} = this.props;
    // 得到当前用户的 id
    const meId = user._id;
    // 得到所用用户的集合对象 users 和所有聊天的数组
    const {users, chatMsgs} = chat;


    return (
      <List style={{marginTop: 50, marginBottom:50}}>
        <Item
          extra={<Badge text={3}/>}
          thumb={require(`../../assets/head-images/头像1.png`)}
          arrow='horizontal'
        >
          你好
          <Brief>nr1</Brief>
        </Item>
        <Item
          extra={<Badge text={0}/>}
          thumb={require(`../../assets/head-images/头像2.png`)}
          arrow='horizontal'
        >
          你好 2
          <Brief>nr2</Brief>
        </Item>
      </List>
    )
  }

}


export default connect(
  state => ({user: state.user, chat: state.chat})
)(Message);