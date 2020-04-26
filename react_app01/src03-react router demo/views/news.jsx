import React,{Component} from 'react'

export default class News extends Component{
  state = {
    newsArr:['news001','news002','news003','news004']
  };

  render(){
    return (
      <div>
        <ul className='news_ul'>
          {
            this.state.newsArr.map( (news,index) => <li key={index}>{news}</li>  )
          }
        </ul>
      </div>
    );

  }

}