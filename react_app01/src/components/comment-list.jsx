import React,{Component} from 'react';
import PropTypes from 'prop-types';

import CommentItem from './comment-item';

export default class CommentList extends Component{

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment:PropTypes.func.isRequired,
  };

  render(){
    const {comments,deleteComment}= this.props;
    //如果评论删完了，会显示h2 标签提示。
    const display = comments.length===0 ? 'block':'none';

    //在CommentItem中添加了deleteComment和index属性，因此和App组件对接上了。可以完成删除功能。
    return (
      <div className="right_con">
        <div className="ul_title">评论查看：</div>
        <h2 style={{display}}>没有评论，请在左边添加评论哦！</h2>
        <ul id="ul_con">
          {
            comments.map((c,index) => <CommentItem comment = {c} key={index} index={index} deleteComment={deleteComment}/> )
          }
        </ul>
      </div>
    );

  }

}