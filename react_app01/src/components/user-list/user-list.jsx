/*
显示指定用户列表的 UI 组件
*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import { withRouter} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim'; //动画效果

const Header = Card.Header;
const Body = Card.Body;

class UserList extends Component{
  static propTypes = {
    userList: PropTypes.array.isRequired
  };

  render() {
    return (
      <WingBlank style={{marginTop:50,marginBottom:50}}>
        <QueueAnim type='scale'>
          {this.props.userList.map(user =>(
            <div key={user._id}>
              <WhiteSpace/>
              <Card onClick={()=>this.props.history.push(`/chat/${user._id}`)}>
                <Header
                  thumb={user.header? require(`../../assets/head-images/${user.header}.png`):null}
                  extra={user.username}
                />
                <Body>
                {user.company?<div>公司: {user.company}</div> : null}
                <div>职位: {user.post}</div>
                <div>月薪: {user.salary}</div>
                <div>描述: {user.info}</div>
                </Body>
              </Card>
            </div>
          ))}
        </QueueAnim>
      </WingBlank>
    )

  }


}


export default withRouter(UserList);

