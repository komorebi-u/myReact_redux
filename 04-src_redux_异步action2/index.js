// 引入React核心库
import React from 'react'
// 引入React-dom
import ReactDOM from 'react-dom'
// 引入store
import store from './redux/store'
// 引入App
import App from './App'

ReactDOM.render(<App store={store}/>,document.getElementById("root"))

// store.subscribe用于监测redux状态变化
store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>,document.getElementById("root"))
})