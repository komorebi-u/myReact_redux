// 汇总所有reducer，最终暴露出去一个总的reducer

// 引入combineReducers用于汇总reducer
import {combineReducers} from 'redux'
// 引入countReducer，用于加工Count组件的状态
import countReducer from './count'
// 引入personReducer，用于加工Person组件的状态
import personReducer from './person'

// 用于汇总所有reducer 并暴露
export default combineReducers({
  count:countReducer,
  persons:personReducer
})