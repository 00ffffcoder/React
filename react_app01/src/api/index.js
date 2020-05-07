/*
包含 n 个接口请求函数的模块
每个函数返回的都是 promise 对象
*/

import ajax from './ajax';

//各接口，参数都是对象

//1. 注册接口
export const reqRegister = (user) => ajax('http://localhost:4000/register',user,'POST');
//2. 登录接口
export const reqLogin = ({username,password}) => ajax('http://localhost:4000/login',{username,password},'POST');
//3. 更新用户接口
export const reqUpdateUser = (user) => ajax('http://localhost:4000/update',user,'POST');

//4. 请求获取指定类型的用户列表,get请求
export const reqUserList = (type) => ajax('http://localhost:4000/userlist', {type});

//5. 请求获取当前用户的所有聊天记录
export const reqChatMsgList = () => ajax('http://localhost:4000/msglist');
//6. 标识查看了指定用户发送的聊天信息
export const reqReadChatMsg = (from) => ajax('http://localhost:4000/readmsg', {from}, 'POST');











