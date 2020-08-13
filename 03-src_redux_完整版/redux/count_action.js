//该文件是定义为Count组件服务器的actionCreator，专门用于创建和Count组件相关的action对象

import {INCREMENT,DECREMENT} from './constant'
// 创建加的action
export const incrementAction = number => ({type:INCREMENT,data:number})
// 创建减的action
export const decrementAction = number => ({type:DECREMENT,data:number})
// 创建 异步 加的action
// export const incrementWaitAction = number => {
//   return (dispatch) => {
//     // 这里我们用一个setTimeout模拟了一个异步代码，以后就是真实的ajax请求了
//     setTimeout(() => {
//       // 调出同步action——incrementAction实现加
//       dispatch(incrementAction(number))
//     },500);
//   }
// }