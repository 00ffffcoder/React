//UI组件： 只负责 UI 的呈现，不带有任何业务逻辑;  通过props接收数据(一般数据和函数)

import React,{Component} from 'react'
import PropTypes from 'prop-types';

export default class Counter extends Component{

  static propTypes ={
    score:PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  };


  increment = () =>{
    //选择框选到的是个字符串数字，转为真数字
    const number= this.select.value * 1;
    this.props.increment(number);
  };

  decrement = () =>{
    const number= this.select.value * 1;
    this.props.decrement(number);
  };

  incrementIfOdd = () =>{
    const number= this.select.value * 1;
    if (this.props.score % 2 ===1){
      this.props.increment(number);
    }
  };

  incrementAsync = ()=>{
    const number= this.select.value * 1;
    this.props.incrementAsync(number);
  };


  render(){

    return (
      <div>
        <h2>Score:  {this.props.score}</h2>
        <h3>Choose a increment：</h3>
        <select ref={select => this.select=select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br/>
        <h3>Choose a method：</h3>
        <button onClick={this.increment}> + </button>
        <br/><br/>
        <button onClick={this.decrement}> - </button>
        <br/><br/>
        <button onClick={this.incrementIfOdd}> Increment if the score is odd </button>
        <br/><br/>
        <button onClick={this.incrementAsync}> Async Increment </button>

      </div>
    );

  }

}














