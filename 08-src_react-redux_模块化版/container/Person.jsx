import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPersonAction} from '../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    // 连续解构赋值+重命名
    let {nameNode:{value:name},ageNode:{value:age}} = this.refs
    if(!name || !age){
      alert('名字和年龄均不能为空！')
      return
    }
    // 通知redux添加一个人
    this.props.addPerson({id:Date.now(),name,age})
    // 清空输入框
    this.refs.nameNode.value = ''
    this.refs.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h1>我是Person组件，上方组件求和为：{this.props.count}</h1>
        <input type="text" ref="nameNode" placeholder="输入姓名"/>
        <input type="text" ref="ageNode" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加一个人</button>
        <ul>
          {
            this.props.persons.map((personObj)=>{
              return <li key={personObj.id}>姓名：{personObj.name}，年龄：{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  // 映射状态
  (state) => ({
    count: state.count,
    persons:state.persons
  }),
  // 映射操作状态的方法
  {
    addPerson:addPersonAction
  }
)(Person)