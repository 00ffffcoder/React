// reducers 作用： 根据老的state和action, 产生新的state
//本质 就是一个纯函数

import {INCREMENT,DECREMENT} from './action-types';

export function counter(state=0, action) {

  console.log('reducers中的counter()函数：','state: ',state, '； action: ',action);

  switch(action.type) {
    case INCREMENT:
      return state+action.data;
    case DECREMENT:
      return state-action.data;

    default:
      return state;
  }

}