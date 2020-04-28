import React,{Component} from 'react'
import  {Toast,Button} from 'antd-mobile';


export default class App extends Component{

  handleClick = ()=>{
    Toast.success("已收到￥100.00元！");
  };

  render(){
    return (
      <div>
        <Button type='primary' onClick={this.handleClick}>go for it</Button>
      </div>
    );

  }

}