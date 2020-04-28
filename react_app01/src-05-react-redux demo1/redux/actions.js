// Action Creator, 即创建Action的工厂函数，返回的是action 对象，包含两个属性：
//  1）type: 标识属性, 值为字符串, 唯一, 必要属性
//  2）data: 数据属性, 值类型任意, 可选属性


// 这个js 文件 包含 所有的 Action Creator

import {INCREMENT,DECREMENT} from './action-types';


//箭头函数返回的就是action 对象
export const increment = (number) => ({type:INCREMENT, data: number});

export const decrement = (number) => ({type:DECREMENT, data: number});





