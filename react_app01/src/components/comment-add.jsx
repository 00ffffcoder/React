import React,{Component} from 'react'
import PropTypes from 'prop-types';



export default class CommentAdd extends Component{

  //给组件类指定属性及限制类型
  static propTypes = {
    updateComments:PropTypes.func.isRequired,
  };

  state = {
    nameInput:'',
    textInput:''
  };

  //使用箭头函数，不用再去bind(this)了
  handleClick = () =>{
    //(1) 先读取文本框中输入的数据，
    const comment = this.state;

    //（2） 检查合法性，如果是空字符串：
    if (!comment.nameInput || !comment.textInput){
      window.alert("用户名和评论内容都不能为空哦！");
      return null;
    }

    if (window.confirm("确定要发表评论[ " + comment.textInput + " ]吗？")){
      //(3) 调用APP中的updateComments()方法，传入新输入的comment对象，里面包括name和text。
      this.props.updateComments({username:comment.nameInput,content:comment.textInput});
    }

    //（4）清除输入，文本框恢复空白

    // console.log(comment);
    this.setState({
      nameInput:'',
      textInput:''
    });
    // console.log(this.nameInput,this.textInput);
  };

  handleNameChange = (event) => {
    const nameInput = event.target.value;
    this.setState({nameInput});
  };

  handleTextChange = (event) => {
    const textInput = event.target.value;
    this.setState({textInput});
  };

  //阻止表单默认行为
  handleFormSubmit = (event) =>{
    event.preventDefault()
  };

  render(){
    const {nameInput,textInput} = this.state;
    // for 在 JSX 中应该被写作 htmlFor
    return (
      <div  className="left_con">
        <form className="form_con" onChange={this.handleFormSubmit}>
          <label htmlFor="nameInput">用户名</label>
          <br/>
          <input id="nameInput"  type="text" placeholder="#用户名"
          value={nameInput} onChange={this.handleNameChange}/>
          <br/>
          <br/>
          <label htmlFor="textInput">评论内容</label>
          <br/>
          <textarea id="textInput"  cols="30" rows="10" placeholder="#输入评论..."
                    value={textInput} onChange={this.handleTextChange}></textarea>
          <br/>
          <input id="subBtn" onClick={this.handleClick} type="button" value="发 表"/>
        </form>
      </div>
    );

  }

}