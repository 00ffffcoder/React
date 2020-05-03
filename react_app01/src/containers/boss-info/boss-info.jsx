import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import {Redirect} from 'react-router-dom';


import HeaderSelector from '../../components/head-selector/head-selector';
import {updateUser}  from '../../redux/actions';


class BossInfo extends Component{

  state={
    header: '', // 头像名称
    post: '', // 职位
    info: '', // 个人或职位简介
    company: '', // 公司名称
    salary: '' ,// 月薪
    _id:this.props.user._id
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

  //点击保存,数据保存到数据库
  bossSave = ()=>{
    console.log('保存成功',this.state);
    this.props.updateUser(this.state);
  };


  render(){
    const {header,type} = this.props.user;
    console.log('个人信息完善界面的this.props.user: ',this.props.user);

    //如果完善信息成功，直接跳转到localhost:3000/BOSS界面
    if (header){
      const path = type==='JobHunter'? '/jobhunter':'/boss';
      console.log('如果有header, this.props.user: ',this.props.user);
      return <Redirect to={path} />
    }

    return (
      <div>
        <NavBar mode='dark'>
          BOSS-个人信息完善
        </NavBar>

        <HeaderSelector setHeader={this.setHeader} />

        <InputItem placeholder='您所在公司是...' onChange={val => this.handleChange('company',val)}>公司名称</InputItem>
        <InputItem placeholder='您的岗位需求...' onChange={val => this.handleChange('post',val)}>招聘职位</InputItem>
        <InputItem placeholder='岗位薪资...' onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
        <TextareaItem title='职位要求' rows={3} placeholder='具体招聘岗位要求...' onChange={val => this.handleChange('info',val)}>...</TextareaItem>
        <Button type='primary' onClick={this.bossSave}>保 存</Button>

      </div>
    );

  }

}

export default connect(
  state => ({user:state.user}),
  {updateUser}
)(BossInfo)





















