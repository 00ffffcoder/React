/*
Personal的主路由组件
*/

import React,{Component} from 'react';
import {Result, List, WhiteSpace, Button,Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';


import {resetUser} from '../../redux/actions'

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component{
  handleLogout = ()=>{
    Modal.alert('退出', '确认退出登录吗?', [
      {text: '取消'},
      {
        text: '确认',
        onPress: () => {
          // 清除 cookie 中的 userid
          // Cookies.remove('userid');
          // 重置 redux 中的 user 状态
          this.props.resetUser()
        }
      }
    ])

  };

  render(){
    const{username,header, post, info, salary, company}=this.props.user;

    return (
      <div style={{marginTop:45}}>
        <Result
          img={<img src={require(`../../assets/head-images/${header}.png`)}
                    style={{width: 50}}
                    alt="headerImage"/>}
          title={username}
          message={company}
        />
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine={true}>
            {salary ? <Brief>公司名称: {company}</Brief> : null}
            <Brief>职位: {post}</Brief>
            <Brief>个人简介: {info}</Brief>
            <Brief>岗位薪资: {salary}</Brief>
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.handleLogout}>退出登录</Button>
        </List>
      </div>
    )
  }

}


export default connect(
  state =>({user:state.user}),
  {resetUser}
)(Personal)