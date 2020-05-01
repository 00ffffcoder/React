// 用户登录路由组件
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Logo from "../../components/logo/logo";

import {login} from "../../redux/actions";


class Login extends Component{

  state = {
    username:'',
    password:'',
  };

  handleChangeLogin = (name,val) => {
    this.setState({
      [name]:val
    })
  };

  //点击登录
  login = ()=>{
    this.props.login(this.state);

  };

  //点击注册，跳转到注册路由
  toRegister = ()=>{
    this.props.history.replace('./register');
  };


  render(){
    const {msg,redirectTo} = this.props.user;

    console.log('msg,redirectTo:',msg,redirectTo);
    //如果注册成功，返回的redirectTo 就有值，直接跳转到个人信息完善界面
    if (redirectTo){
      return <Redirect to={redirectTo} />
    }

    return (
      <div>
        <NavBar mode='dark'>
          SunnyJob
        </NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <p className='msg'>{msg}</p> : null}
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChangeLogin('username',val)} >用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入密码' type='password' onChange={val => this.handleChangeLogin('password',val)} >密&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登录</Button>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    );

  }

}




export default connect(
  state => ({user:state.user}),
  {login}
)(Login)
// 此时 Login 组件有两个属性，一个 state  ， 一个 login 请求注册的方法