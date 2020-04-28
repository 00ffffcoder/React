import React from 'react';
import {connect} from 'react-redux';

import {increment,decrement,incrementAsync} from '../redux/actions';
//导入UI组件 Counter(就是原来的App组件，换类名而已)
import Counter from '../components/counter';

//connect() :  向外暴露连接App组件的包装组件，从而生成一个容器组件，

export default connect(
  state => ({score:state}),
  {increment,decrement,incrementAsync}
)(Counter)

// connect 参数： 第一个返回的是对象，本例中就是最后得分 ： {score} ;
// 第二个也是对象， 即action对象，内含type 和 data 属性 ，本例中 type 来区分是加还是减，data 里面就是增加量或减少量
// 因此，connect 作用 相当于是 把上面所有属性打包 全部给 Counter组件，在Counter中，直接用this.props来调用。

