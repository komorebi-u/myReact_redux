// 该文件是定义redux中最后的管理者——store

// 引入createStore，用于创建redux中最核心的对象——store
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入countReducer，用于加工Count组件的状态
import countReducer from './reducers/count'
// 引入personReducer，用于加工Person组件的状态
import personReducer from './reducers/person'
// 引入thunk---用于支持异步action
import thunk from 'redux-thunk'

// 用于汇总所有reducer
const reducer = combineReducers({
  count:countReducer,
  persons:personReducer
})

// 调用createStore(xxxReducer)可以生成一个store对象
// 举例说明：老板在创业之初，就找好了合伙人
// const store = createStore(countReducer)
const store = createStore(reducer,applyMiddleware(thunk))

// 暴露store对象
export default store