import React,{Component} from 'react'
import {List,Grid} from 'antd-mobile';
import PropTypes from 'prop-types';


export default class HeaderSelector extends Component{

  static propTypes = {
    setHeader: PropTypes.func.isRequired,
  };


  constructor(props){
    super(props);
    this.headlist = [];
    for (let i = 0; i < 20; i++) {
      const text = `头像${i+1}`;
      this.headlist.push({text,icon:require(`../../assets/head-images/${text}.png`)});
    }
    this.state = {
      icon: null,
      text:''
    }
  }

  //点击头像，更新头像状态，并传到父组件更新状态.
  //<Grid>的事件响应函数返回一个元素对象
  handleClick = ({text,icon})=>{
    this.setState({text,icon});
    this.props.setHeader(text);
  };


  render(){
    const gridHeader = !this.state.icon?'请选择头像: ': <div>已选择头像： <img src={this.state.icon} alt={this.state.text}/></div>;

    return (
      <List renderHeader = {() =>gridHeader}>
        <Grid data={this.headlist} columnNum={5} onClick={this.handleClick} />
      </List>
    );

  }

}