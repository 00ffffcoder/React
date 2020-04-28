//生成一个store 对象，用来把state，action与reducer联系在一起
import {applyMiddleware,createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

//redux本身不支持异步处理，引入redux-thunk异步中间件。配合redux中的applyMiddleware以及谷歌插件使用
import thunk from 'redux-thunk';

import {comments} from './reducers';

const store = createStore(comments,composeWithDevTools(applyMiddleware(thunk)));
//此时，内部会第一次调用reducer内counter 函数，得到初始state。同时应用上异步中间件。

export default store;