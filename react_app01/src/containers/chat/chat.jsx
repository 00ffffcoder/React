/*
对话聊天的路由组件
*/
import React, {Component} from 'react';
import {NavBar, List, InputItem, Grid,Icon} from 'antd-mobile';
import {connect} from 'react-redux';

import {sendMsg} from '../../redux/actions';


const Item = List.Item;


class Chat extends Component{
  state = {
    content:'', //输入的聊天内容
    showEmoji: false, // 是否显示表情列表
  };

  componentWillMount(){
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '❤', '😂', '🙃', '😉', '😊', '😀', '😃', '😄', '😁', '😆', '😅', '❤', '😂', '🙃', '😉', '😊','😀', '😃', '😄', '😁', '😆', '😅', '❤', '😂', '🙃', '😉', '😊', '😀', '😃', '😄', '😁', '😆', '😅', '❤', '😂', '🙃', '😉', '😊', ];
    this.emojis = emojis.map(emoji => ({text: emoji}))
    // console.log(this.emojis)
  }

  // 初始显示聊天列表，一进来就显示到聊天记录最底部
  componentDidMount() {
    window.scrollTo(0, document.body.scrollHeight)
  }
  // 更新显示聊天列表，发送消息后，界面显示到最底部
  componentDidUpdate () {
    window.scrollTo(0, document.body.scrollHeight)
  }

  //切换表情列表的显示
  toggleShow = () => {
    const showEmoji = !this.state.showEmoji;
    this.setState({showEmoji});
    if(showEmoji) {
      // 异步手动派发 resize 事件,解决表情列表显示的 bug
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 0)
    }
  };

  handleSend = () => {
    //自己id
    const from = this.props.user._id;
    //聊天对方id
    const to = this.props.match.params.userid;
    const content = this.state.content.trim();

    if (content){
      //发送异步action 请求
      this.props.sendMsg({from, to, content});
      this.setState({content: '',showEmoji: false});
    }

  };




  render(){
    const {user} = this.props;
    const {users,chatMsgs} = this.props.chat;  //chatMsgs 包含所有人的聊天信息，格式为id1_id2, 一定要过滤，选出我跟当前对方的聊天信息

    const myId = user._id; //我的id
    const targetId = this.props.match.params.userid; //聊天对方的id

    if(!users[targetId]) {  //如果users没有数据，页面为空
     console.log('users没有数据，页面为空');
      return null
    }

    const chatId = [targetId, myId].sort().join('_');  //拼接成id1_id2格式
    const msgs = chatMsgs.filter(msg => msg.chat_id===chatId); //从chatMsgs 中过滤

    const targetHeaderIcon = users[targetId] ? require(`../../assets/head-images/${users[targetId].header}.png`) : null;

    return (
      <div id='chat-page'>
        <NavBar
          icon={<Icon type='left'/>}
          className='stick-top'
          onLeftClick={() => this.props.history.goBack()}>
          {users[targetId].username}
        </NavBar>
        <List style={{marginTop: 50, marginBottom:50}}>
          {
            msgs.map(msg => {
              if (targetId===msg.from){//对方发给我的
                return (
                  <Item key={msg._id} thumb={targetHeaderIcon}>
                    {msg.content}
                  </Item>
                );
              }else {//我发给对方的
                return (
                  <Item className='chat-me' extra='我'>
                    {msg.content}
                  </Item>
                )
              }
          })
          }


        </List>
        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            value = {this.state.content}
            onChange={val => this.setState({content: val})}
            onFocus={() => this.setState({showEmoji: false})}
            extra={
              <span>
                <span onClick={this.toggleShow} style={{marginRight: 10}}>😃</span>
                <span onClick={this.handleSend}>发送</span>
              </span>
            }
          />

          {
            this.state.showEmoji ? (
              <Grid
                data={this.emojis}
                columnNum={8}
                carouselMaxRow={4}
                isCarousel={true}
                onClick={(item) => {
                  this.setState({content: this.state.content + item.text})
                }}
              />
            ) : null
          }
        </div>

      </div>
    );

  }

}


export default connect(
  state => ({user:state.user, chat: state.chat}),
  {sendMsg}
)(Chat);