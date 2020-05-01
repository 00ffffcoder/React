// redux 最核心的store 对象模块

import {createStore,applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

//引入redux-thunk异步中间件。
import thunk from 'redux-thunk';

import reducers from './reducers';

//向外暴露store 对象
export default createStore(reducers,applyMiddleware(thunk));



