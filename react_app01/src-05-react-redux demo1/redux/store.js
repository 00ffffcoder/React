//生成一个store 对象，用来把state，action与reducer联系在一起

import {createStore} from 'redux';

import {counter} from './reducers';

const store = createStore(counter); //此时，内部会第一次调用reducer内counter 函数，得到初始state

export default store;