import React from 'react'

const messagesInfo = [
  {id:1, title:'Messages001',content:'xxxxx'},
  {id:3, title:'Messages003',content:'yyyyy'},
  {id:5, title:'Messages005',content:'zzzzz'},
];

export default function MessageDetail(props) {
  const id = props.match.params.id;
  const everyInfo = messagesInfo.find(item => item.id===id*1)

  return (
    <ul className='message_ul'>
      <li>ID: {everyInfo.id}</li>
      <li>TITLE: {everyInfo.title}</li>
      <li>CONTENT: {everyInfo.content}</li>
    </ul>
  );




}