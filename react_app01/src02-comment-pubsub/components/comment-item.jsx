import React,{Component} from 'react'
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';


export default class CommentItem extends Component{

  static propTypes = {
    comment: PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
  };

  handleDelete = () =>{
    const {comment,index} =this.props;
    //删除评论
    if(window.confirm(`确定要删除${comment.username}的评论吗？`)){
      //触发事件用publish

      PubSub.publish("deleteCo",index);
      console.log("publish删除",index);
    }
  };

  render(){
    const {comment} =this.props;
    return (
      <li>
        <p className="p1_user">{comment.username}：</p>
        <p className="p2_text">{comment.content}</p>
        <button className="del_btn" onClick={this.handleDelete}>删 除</button>
      </li>
    );

  }

}