// 该组件为Count的容器组件
// 1.随意的使用任何redux相关的api
// 2.通过props给其UI组件(子组件)传递：一些标签属性 a=1 b=2 c=()=>{}
// 3.特别注意：容器组件不能靠程序员自己去定义，要靠一个特殊的API去定义

// 引入Count的UI组件，用于展示页面
import CountUI from '../components/Count'
// 引入connet，用于链接
import {connect} from 'react-redux'
// 引入actionCreator
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count_action'

//映射状态为props
function mapStateToProps(state) {
  //return的这个对象，最终会整合到UI组件的this.props对象
  return {count:state}
}

//映射操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    increment:(number) => {dispatch(incrementAction(number))},
    decrement:(number) => {dispatch(decrementAction(number))},
    incrementWait:(number) => {dispatch(incrementWaitAction(number))},
  }
}

// 暴露connect()()生成的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)