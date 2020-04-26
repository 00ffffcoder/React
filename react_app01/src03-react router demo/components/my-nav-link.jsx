import React from 'react';
import {NavLink} from 'react-router-dom';

//包装NavLink组件, 添加activeClassName 属性，选中时可以显示单独样式，在css里指定一下

export default function MyNavLink(props) {
  return <NavLink {...props} activeClassName="activeClass" />
}






