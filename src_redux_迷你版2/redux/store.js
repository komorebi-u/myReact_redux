// 引入createStore
// 该文件是定义redux中最后的管理者--store

// 引入createStore，用于创建redux中最核心的对象--store
import {createStore} from 'redux'
// 引入countReducer，用于加工Count组件的状态
import countReducer from './count_reducer'

// 调用createStore(xxxRedecer)可以生成一个store对象
const store = createStore(countReducer)

// 暴露
export default store