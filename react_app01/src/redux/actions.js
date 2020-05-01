// 包含 所有的 Action Creator, 即创建Action的工厂函数，返回的是action 对象，包含两个属性：
//  1）type: 标识属性, 值为字符串, 唯一, 必要属性
//  2）data: 数据属性, 值类型任意, 可选属性

//引入发送ajax请求的接口,这几个都是Promis对象
import {reqRegister,reqLogin,} from '../api/index';

import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

//同步action ： 返回成功响应
const authSuccess = (user) => ({type:AUTH_SUCCESS, data:user});

//同步action ： 返回错误信息
const errorMsg = (msg) => ({type:ERROR_MSG, data:msg});



//请求注册的异步action
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
      //成功，分发 成功的同步action
      dispatch(authSuccess(result.data));
    }else {
      //失败，分发 失败的同步action
      dispatch(errorMsg(result.msg));
    }

  };

};


// 请求登录的异步action
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












