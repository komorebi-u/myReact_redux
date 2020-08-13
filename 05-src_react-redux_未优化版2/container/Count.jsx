// 该组件为Count的容器组件：
// 1.随意使用任何redux相关的api
// 2.通过props给其UI组件传递: 状态、操作状态的方法
// 3.特别注意：容器组件不能靠程序员自己去定义，要靠connect API去定义

// 引入Count的UI组件,用于展示页面
import CountUI from '../components/Count'
// 引入connect，用于链接
import {connect} from 'react-redux'
// 引入actionCreator
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count_action'

// 映射状态为props
function mapStateToProps (state) {
  // 由于props接收到的参数，都会收集成对象，所以必须返回一个对象
  // return的这个对象，最终会整合到UI组件的this.props对象
  return {count:state}
}

// 映射操作状态的方法
function mapDispatchToProps (dispatch) {
  // return的这个对象，最终会整合到UI组件的this.props对象
  return {
    increment: (number) => {dispatch(incrementAction(number))},
    decrement: (number) => {dispatch(decrementAction(number))},
    incrementWait: (number) => {dispatch(incrementWaitAction(number))},
  }
}

// 暴露connect()()生成的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)