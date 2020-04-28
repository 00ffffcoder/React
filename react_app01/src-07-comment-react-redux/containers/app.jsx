import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {updateComments,deleteComment,getComments} from '../redux/actions';

import CommentAdd from '../components/comment-add';
import CommentList from '../components/comment-list';


class App extends Component{
  static propTypes ={
    comments:PropTypes.array.isRequired,
    updateComments: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
  };


  componentDidMount(){
    //异步获取所有评论
    this.props.getComments();
  }

  render(){
    const {comments,updateComments,deleteComment} = this.props;
    return (
      <div>
        <div className="header">❀徐山青的小花园❀</div>
        <CommentAdd updateComments={updateComments}/>
        <CommentList comments={comments} deleteComment={deleteComment}/>
      </div>
    );

  }

}

//connect() :  向外暴露连接App组件的包装组件，从而生成一个容器组件，
export default connect(
  //此处state就是一个comments数组
  state => ({comments:state}),
  {updateComments,deleteComment,getComments}
)(App)
