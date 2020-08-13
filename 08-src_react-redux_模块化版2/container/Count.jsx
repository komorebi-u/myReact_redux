// 该组件为Count的容器组件：
// 1.随意使用任何redux相关的api
// 2.通过props给其UI组件传递: 状态、操作状态的方法
// 3.特别注意：容器组件不能靠程序员自己去定义，要靠connect API去定义

// 引入connect，用于链接
import {connect} from 'react-redux'
// 引入actionCreator
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/actions/count'

import React, { Component } from 'react'

// 定义Count的UI组件
class Count extends Component {

  state = {
    school : '尚硅谷'
  }

  // 加
  increment = () => {
    // 1.获取用户输入
    const {value} = this.refs.selectedNumber
    // 2.通知redux加value
    // store.dispatch({type:'increment',data:value*1})
    this.props.increment(value*1)
  }
  // 减
  decrement = () => {
    // 1.获取用户输入
    const {value} = this.refs.selectedNumber
    // 2.通知redux加value
    // store.dispatch({type:'decrement',data:value*1})
    this.props.decrement(value*1)
  }
  // 奇数加
  incrementIfOdd = () => {
    if(this.props.count % 2 !==0){
      // 1.获取用户输入
      const {value} = this.refs.selectedNumber
      // 2.通知redux加value
      // store.dispatch({type:'increment',data:value*1})
      this.props.increment(value*1)
    }
  }
  // 异步加
  incrementWait = () => {
    // setTimeout(() => {
      // 1.获取用户输入
      const {value} = this.refs.selectedNumber
      // 2.通知redux加value
      // store.dispatch({type:'increment',data:value*1})
      this.props.incrementWait(value*1)
    // },500);
  }

  render() {
    return (
      <div>
				<h1>{this.state.school}-当前求和为：{this.props.count}，下方组件总人数为：{this.props.persons.length}</h1>
				<select ref="selectedNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>若和为奇数 +</button>&nbsp;
				<button onClick={this.incrementWait}>等一等 +</button>&nbsp;
			</div>
    )
  }
}


// 暴露connect()()生成的容器组件
export default connect(
  state => ({count:state.count,persons:state.persons}),
  {
    increment: incrementAction,
    decrement: decrementAction,
    incrementWait: incrementWaitAction,
  }
)(Count)

