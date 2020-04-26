import React,{Component} from 'react'
import PropTypes from 'prop-types';


export default class CommentItem extends Component{

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired,
  };

  handleDelete = () =>{
    const {comment,deleteComment,index} =this.props;
    if(window.confirm(`确定要删除${comment.username}的评论吗？`)){
      deleteComment(index);
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