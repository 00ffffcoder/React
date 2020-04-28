// Action Creator, 即创建Action的工厂函数，返回的是action 对象，包含两个属性：
//  1）type: 标识属性, 值为字符串, 唯一, 必要属性
//  2）data: 数据属性, 值类型任意, 可选属性


// 这个js 文件 包含 所有的 Action Creator

import {INCREMENT,DECREMENT} from './action-types';


//同步action 返回的是 对象
export const increment = (number) => ({type:INCREMENT, data: number});

export const decrement = (number) => ({type:DECREMENT, data: number});


//异步action 返回的是 一个函数.
// 时间到了1秒，就执行函数，由redux-thunk中间件处理，分发一个action，即increment(number)
export const incrementAsync = (number) => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(increment(number));
    },1000)
  }
};



