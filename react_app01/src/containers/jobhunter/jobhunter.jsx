/*
JobHunter的主路由组件
*/

import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getUserList} from '../../redux/actions'
import UserList from '../../components/user-list/user-list'


class JobHunter extends Component{
  componentDidMount() {
    this.props.getUserList('BOSS')
  }

  render(){
    return (<UserList userList={this.props.userList}></UserList>)

  }

}

export default connect(
  state =>({userList: state.userList}),
  {getUserList}
)(JobHunter)