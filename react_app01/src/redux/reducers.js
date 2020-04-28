// reducers 作用： 根据老的state和action, 产生新的state
//本质 就是一个纯函数

import {ADD_COMMENTS,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types';


const initComments =[];
export function comments(state=initComments, action) {

  console.log('reducers中的comments()函数：','state: ',state, '； action: ',action);

  switch(action.type) {
    case ADD_COMMENTS:
      return [action.data,...state];
    case DELETE_COMMENT:
      // filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      // 实现 删除指定index的评论的功能
      return state.filter((comment,index)=> index!==action.data);
    case RECEIVE_COMMENTS:
      return action.data;
    default:
      return state;
  }

}