// 包含 所有的 Action Creator, 即创建Action的工厂函数，返回的是action 对象，包含两个属性：
//  1）type: 标识属性, 值为字符串, 唯一, 必要属性
//  2）data: 数据属性, 值类型任意, 可选属性

//引入发送ajax请求的接口,这几个都是Promis对象
import {reqRegister,reqLogin,reqUpdateUser,reqUserList,reqChatMsgList,
  reqReadChatMsg} from '../api/index';

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG,
  MSG_READ,
} from './action-types';

import io from 'socket.io-client';

//同步action ： 返回成功响应
const authSuccess = (user) => ({type:AUTH_SUCCESS, data:user});

//同步action ： 返回错误信息
const errorMsg = (msg) => ({type:ERROR_MSG, data:msg});

//同步action ： 完善信息后，接收用户
const receiveUser = (user) => ({type:RECEIVE_USER, data:user});

//同步action ： 重置用户
export const resetUser = (msg) => ({type:RESET_USER, data:msg});

//同步action ： 接收指定类型用户列表
const receiveUserList = (userList) => ({type:RECEIVE_USER_LIST, data:userList});

//同步action ： 接收消息列表的同步 action
const receiveMsgList = ({users, chatMsgs, userid}) => ({type: RECEIVE_MSG_LIST, data:
    {users, chatMsgs, userid}});

//同步action ： 接收消息的同步 action
const receiveMsg = (chatMsg, isToMe) => ({type: RECEIVE_MSG, data: {chatMsg, isToMe}});

//同步action ： 读取了消息的同步 action
const msgRead = ({from, to, count}) => ({type: MSG_READ, data: {from, to, count}});


/*
针对下面第5个action:
初始化客户端 socketio
1). 连接服务器
2). 绑定用于接收服务器返回 chatMsg 的监听
*/
function initIO(dispatch,userid){
  /*
  * 单例对象：
  * （1）创建对象之前，判断对象是否存在，不存在才去创建；
  * （2）创建对象之后，保存对象。
  * */
  if (!io.socket){
    // 连接服务器, 得到代表连接的 socket 对象，保存为io的属性
    io.socket = io('ws://localhost:4000');
    // 绑定'receiveMessage'的监听, 来接收服务器发送的消息
    io.socket.on('receiveMsg', function (chatMsg) {
      console.log('浏览器端接收到消息:', chatMsg)
    });

    //只有当chatMsg是与当前用户相关的消息，才会去分发同步action 保存消息
    io.socket.on('receiveMsg', (chatMsg) => {
      if(chatMsg.from===userid || chatMsg.to===userid) {
        dispatch(receiveMsg(chatMsg, chatMsg.to === userid))
      }
    })
  }
}


//1. 请求注册的异步action
export const register = (user) => {

  // console.log("register user:",user);
  const {username,password,password2,type} = user;


  if (!username || !password || !password2  ){
    return errorMsg("用户名或密码不能为空！");
  }else if (password !== password2){
    return errorMsg("请确认密码输入一致！");
  }else if (!type ){
    return errorMsg("请选择用户类型！");
  }


  /*
  return dispatch => {
    //发送注册的ajax请求，异步获取数据
    const promise = reqRegister(user);
    promise.then(response =>{
      const result = response.data;
      //此时返回的就是服务端发送回来的： {code:0或1, data:{id:user._id, username, type}}
    });
  };
  */

  // 用async await更简洁：
  return async dispatch => {
    const response = await reqRegister({username,password,type});
    const result = response.data;
    //{code:0或1, data:{id:user._id, username, type}或者msg:...}
    console.log("后台返回response.data:",result);
    //然后来判断返回的数据是 成功的还是 失败的
    if (result.code===0){
      getMsgList(dispatch);  //写聊天模块才添加
      //成功，分发 成功的同步action
      dispatch(authSuccess(result.data));
    }else {
      //失败，分发 失败的同步action
      dispatch(errorMsg(result.msg));
    }

  };

};


//2. 请求登录的异步action
export const login = ({username,password}) => {
  if (!username || !password){
    return errorMsg("用户名或密码不能为空！");
  }

  return async dispatch => {
    const response = await reqLogin({username,password});
    const result = response.data;
    console.log("response.data",result);


    if (result.code===0){
      //成功，分发 成功的同步action
      dispatch(authSuccess(result.data));
    }else {
      //失败，分发 失败的同步action
      dispatch(errorMsg(result.msg));
    }
  };
};


//3. 完善信息界面，点击保存，请求更新用户信息的异步action
export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user);
    const result = response.data;
    console.log("response.data",result);

    if (result.code===0){
      getMsgList(dispatch);  //写聊天模块才添加
      //成功，分发 成功的同步action
      dispatch(receiveUser(result.data));
    }else {
      //失败，分发 失败的同步action
      dispatch(resetUser(result.msg));
    }
  };
};


//4. 登录进入主页面，看到老板/求职者列表，因此请求接收指定类型的用户列表
export const getUserList = (type)=>{
  return async dispatch => {
    const response = await reqUserList(type);
    const result = response.data;
    // console.log("response.data",result);

    if (result.code===0){
      //成功，分发 成功的同步action
      dispatch(receiveUserList(result.data));
    }
  };
};


//5. 发送聊天消息的异步 action
export const sendMsg = ({from, to, content}) => {
  return  dispatch => {
    console.log('sendMsg：', {from, to, content});
    initIO();
    io.socket.emit('sendMsg', {from, to, content});
  }
};


/*
6. 获取当前用户相关的所有聊天消息列表
(在注册/登陆/获取用户信息成功后调用)
*/

async function getMsgList(dispatch, userid) {
  initIO(dispatch,userid);
  const response = await reqChatMsgList();
  const result = response.data;
  if(result.code===0) {
    //成功，分发 成功的同步action
    const {chatMsgs, users} = result.data;
    dispatch(receiveMsgList({chatMsgs, users, userid}))
  }
}
