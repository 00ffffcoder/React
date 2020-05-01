/*
包含 n 个接口请求函数的模块
每个函数返回的都是 promise 对象
*/

import ajax from './ajax';


//注册接口
export const reqRegister = (user) => ajax('http://localhost:4000/register',user,'POST');
//登录接口
export const reqLogin = ({username,password}) => ajax('http://localhost:4000/login',{username,password},'POST');
//更新用户接口
export const reqUpdateUser = (user) => ajax('http://localhost:4000/update',user,'POST');

//参数都是对象














