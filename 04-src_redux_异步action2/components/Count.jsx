import React, { Component } from 'react'
// 引入store
// import store from '../redux/store'
// 引入constant常量
// import {INCREMENT,DECREMENT} from './constant'
// 引入count_action
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count_action'

export default class Count extends Component {

  // 加
  increment = () => {
    // 1.获取用户输入
    const {value} = this.refs.selectedNumber
    // 2.获取原状态
    // const {count} = this.state
    // 3.执行加法后，更新状态
    // this.setState({count:count + value*1})

    // 2.调用store.dispatch，更新redux加value
    // store.dispatch({type:INCREMENT,data:value*1})
    this.props.store.dispatch(incrementAction(value*1))
  }
  // 减
  decrement = () => {
    // 1.获取用户输入
    const {value} = this.refs.selectedNumber
    // 2.获取原状态
    // const {count} = this.state
    // 3.执行减法后，更新状态
    // this.setState({count:count - value*1})

    // 2.调用store.dispatch，更新redux减value
    // store.dispatch({type:DECREMENT,data:value*1})
    this.props.store.dispatch(decrementAction(value*1))
  }
  // 奇数加
  incrementIfOdd = () => {
    if(this.props.store.getState() % 2 !==0){
      // 1.获取用户输入
      const {value} = this.refs.selectedNumber
      // 2.获取原状态
      // const {count} = this.state
      // 3.执行加法后，更新状态
      // this.setState({count:count + value*1})

      
      // 2.调用store.dispatch，更新redux加value
      // store.dispatch({type:INCREMENT,data:value*1})
      this.props.store.dispatch(incrementAction(value*1))
    }
  }
  // 异步加
  incrementWait = () => {
    // setTimeout(() => {
      // 1.获取用户输入
      const {value} = this.refs.selectedNumber
      // 2.获取原状态
      // const {count} = this.state
      // 3.执行加法后，更新状态
      // this.setState({count:count + value*1})

      
      // 2.调用store.dispatch，更新redux加value
      // store.dispatch({type:INCREMENT,data:value*1})
      this.props.store.dispatch(incrementWaitAction(value*1))
    // },500);
  }

  render() {
    return (
      <div>
				<h1>当前求和为：{this.props.store.getState()}</h1>
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
