/*
使用 axios 封装的 ajax 请求函数; 函数返回的是 promise 对象
*/

import axios from 'axios';


export default function ajax(url='',data={},type='GET') {

  if (type==='GET'){
    // 要用axios.get(url), 需要拼接请求url的参数字符串
    //比如data={username:aaaa, password:123}
    // paramStr = username=aaaa&password=123
    let paramStr = '';
    Object.keys(data).forEach( key =>{
      paramStr += key + '=' + data[key] + '&';
    });
    if (paramStr){
      //去掉最后的‘&’
      paramStr = paramStr.substring(0,paramStr.length-1);
    }
    //使用axios发送get请求
    return axios.get(url+'?'+paramStr);

  }else {
    //发送POST请求

    return axios.post(url,data);

  }


}


















