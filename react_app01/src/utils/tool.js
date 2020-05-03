//  通用的工具函数

/*
*
* 用户主界面 路由
JobHunter --> /jobhunter
BOSS --> /boss

用户信息完善界面 路由
JobHunter --> /jobhunterinfo
BOSS --> /bossinfo
*
* 根据这四种情况：
*   判断用户类型？ --> user.type
*   判断是否已经完善信息？ --> user.header 是否有值
*
* */

export default function getRedirectPath(type,header) {
  let path='';

  if (type==="JobHunter"){
    path = '/jobhunter';
  }else {
    path = '/boss';
  }
  if (!header){
    path += 'info';
  }

  return path;

}



/*

export default function getRedirectPath(type) {
  let path='';

  if (type==="JobHunter"){
    path = '/jobhunterinfo';
  }else {
    path = '/bossinfo';
  }

  return path;

}
*/









