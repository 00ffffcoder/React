import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile";

import HeaderSelector from "../../components/head-selector/head-selector";


class JobHunterInfo extends Component{


  state={
    header: '', // 头像名称
    post: '', // 职位
    info: '', // 个人或职位简介
    salary: '' // 月薪
  };

  //获取头像text
  setHeader = (header)=>{
    this.setState({header});
  };

  //获取用户输入的数据，进行数据更新
  handleChange = (name,val) =>{
    this.setState({
      [name]:val,
      //属性名不是name , 而是name变量的值
    });
  };

  //点击保存
  jobHunterSave =()=>{
    console.log('保存成功',this.state)
  };

  render(){
    return (
      <div>
        <NavBar mode='dark'>
          JobHunter-个人信息完善
        </NavBar>

        <HeaderSelector setHeader={this.setHeader} />

        <InputItem placeholder='您要应聘的岗位...' onChange={val => this.handleChange('post',val)}>应聘职位</InputItem>
        <InputItem placeholder='您的期望薪资...' onChange={val => this.handleChange('salary',val)}>期望薪资</InputItem>
        <TextareaItem title='个人简介' rows={3} placeholder='您的个人简介...' onChange={val => this.handleChange('info',val)}>...</TextareaItem>
        <Button type='primary' onClick={this.jobHunterSave}>保 存</Button>

      </div>
    );

  }

}

export default connect(
  state => ({}),
  {}
)(JobHunterInfo)