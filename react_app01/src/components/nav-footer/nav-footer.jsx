/*
底部导航的 UI 组件
*/

import React from 'react';
import PropTypes from 'prop-types';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';


const Item = TabBar.Item;

class NavFooter extends React.Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  };
  render() {

    //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    const navList = this.props.navList.filter(nav => !nav.hide);
    // 回调函数返回值为 true,当前元素就会留下, 否则不留

    // 当前请求的路径
    const {pathname} = this.props.location;
    return (
      <TabBar>
        {
          navList.map((nav) => (
            <Item key={nav.path}
                  title={nav.text}
                  icon={{uri: require(`./imgs/${nav.icon}.png`)}}
                  selectedIcon={{uri: require(`./imgs/${nav.icon}-selected.png`)}}
                  selected={pathname===nav.path}
                  onPress={() => {
                    this.props.history.replace(nav.path)
                  }}
            />
          ))
        }
      </TabBar>
    )
  }
}


export default withRouter(NavFooter);
// withRouter()让非路由组件可以访问到路由组件的API (此处用到了location, history)