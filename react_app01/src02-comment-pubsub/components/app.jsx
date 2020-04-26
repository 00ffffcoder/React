import React,{Component} from 'react';
import PubSub from 'pubsub-js';


import CommentAdd from './comment-add';
import CommentList from './comment-list';


// export default用于导出常量、函数、文件、模块
// 在其他文件中引用时采取如下方式:  import classname form path
// App 为父级组件
export default class App extends Component{
  // 给组件对象指定默认属性。简化版，不用像constructor那样写了。
  state = {
    //comments是多个评论li，是一个数组。每个评论li就是comment，类型是一个对象。
    comments:[
      {username:"xxx",content:"从来如此，便对么？"},
      {username:"yyy",content:"人必生活著，爱才有所附丽。"},
      {username:"zzz",content:"万家墨面没蒿莱，敢有歌吟动地哀。心事浩茫连广宇，于无声处听惊雷。"}
    ],
  };

  componentDidMount(){
    //订阅消息（deleteComment），执行删除函数
    PubSub.subscribe("deleteCo", (msg,index) => {
      this.deleteComment(index);
    })
  }

  //功能一：添加评论的函数方法
  updateComments = (one_comment) => {
    //获取
    const {comments} = this.state;
    //处理，新增项目放在数组开头
    comments.unshift(one_comment);
    //更新
    this.setState({comments});
  };

  //功能二：删除评论的函数方法
  deleteComment = (index) => {
    const {comments} = this.state;
    //根据索引，运用数组的splice方法就可以删除指定成员
    comments.splice(index,1);
    this.setState(comments);
  };


  render(){
    const {comments} = this.state;
    return (
      <div>
        <div className="header">❀徐山青的小花园❀</div>
        <CommentAdd updateComments={this.updateComments}/>
        <CommentList comments={comments} />
      </div>
    );

  }

}
