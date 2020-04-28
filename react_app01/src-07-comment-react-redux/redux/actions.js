// Action Creator, 即创建Action的工厂函数，返回的是action 对象，包含两个属性：
//  1）type: 标识属性, 值为字符串, 唯一, 必要属性
//  2）data: 数据属性, 值类型任意, 可选属性


// 这个js 文件 包含 所有的 Action Creator

import {ADD_COMMENTS,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types';


//同步action 返回的是 对象
//功能：同步添加评论
export const updateComments = (comment) => ({type:ADD_COMMENTS, data: comment});

//功能：同步删除评论
export const deleteComment = (index) => ({type:DELETE_COMMENT, data: index});

//功能：同步获取评论。不用暴露，因为只给下面的getComments()方法用
const receiveComments = (comments) => ({type:RECEIVE_COMMENTS, data: comments});


//异步action 返回的是 一个函数.
//异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    //模拟发送ajax请求异步获取数据
    setTimeout(()=>{
      const comments =[
        {username:"xxx",content:"从来如此，便对么？"},
        {username:"yyy",content:"人必生活著，爱才有所附丽。"},
        {username:"zzz",content:"万家墨面没蒿莱，敢有歌吟动地哀。心事浩茫连广宇，于无声处听惊雷。"}
      ];

      dispatch(receiveComments(comments));
    },3000)
  }
};



