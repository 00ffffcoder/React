// 包含多个reducer 函数:根据老的state 和指定的action 返回一个新的state

import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

import getRedirectPath from '../utils/tool';

const initUser = {
  username: '', // 用户名
  type: '', // 类型
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动跳转的路由 path
};

function user(state=initUser,action) {
  switch (action.type) {
    case AUTH_SUCCESS:

      const redirectTo = getRedirectPath(action.data.type);
      return {...action.data,redirectTo};
    case ERROR_MSG:
      return {...state,msg:action.data};
    default:
      return state;
  }


}


// 返回合并的reducer
export default combineReducers({
  user
});
//向外暴露的状结构为：{user:{ ... }}