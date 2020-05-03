// 用户注册路由组件

import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button,} from 'antd-mobile';


//用于包装生成容器组件
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import Logo from "../../components/logo/logo";

//请求注册的异步action
import {register} from '../../redux/actions';




const ListItem = List.Item;


class Register extends Component{

  state = {
    username:'',    //用户名
    password:'',    //密码
    password2:'',    //确认密码
    type:'',    // 用户类型：JobHunter / BOSS
  };

  //获取输入的数据，进行数据更新
  handleChangeRegister = (name,val) =>{
    this.setState({
      [name]:val,
      //属性名不是name , 而是name变量的值
    });
  };

  //跳转到Login 路由
  //history.replace(): 用一个新的历史记录替换当前的记录
  toLogin = ()=>{
    this.props.history.replace('./login');
  };

  //点击注册
  registerUser = ()=>{
    //点击注册按钮，开始发送异步注册请求
    // console.log('this.state: ',this.state);

    this.props.register(this.state);
    // console.log('this.props.user:',this.props.user);
  };



  render(){
    const {msg,type,_id} = this.props.user;

    //如果注册成功，返回的redirectTo 就有值，直接跳转到localhost:3000/ 界面，即main界面
    // if (redirectTo){
    //   return <Redirect to={redirectTo} />
    // }
    if (_id){
      const path = type==='JobHunter'? '/jobhunterinfo':'/bossinfo';
      return <Redirect to={path} />
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
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChangeRegister('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入密码' type='password' onChange={val => this.handleChangeRegister('password',val)}>密&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请确认密码' type='password' onChange={val => this.handleChangeRegister('password2',val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型：</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='JobHunter'} onChange={() => this.handleChangeRegister('type','JobHunter')} >JobHunter</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='BOSS'} onChange={() => this.handleChangeRegister('type','BOSS')} >BOSS</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.registerUser}>注册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    );

  }

}

//connect() :  向外暴露连接Register组件的包装组件，从而生成一个容器组件，
export default connect(
  state => ({user:state.user}),
  {register}
)(Register)
// 此时 Register 组件有两个属性，一个 state  ， 一个 register 请求注册的方法