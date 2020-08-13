import {ADD_PERSON} from '../constant'
// 添加一个人的action(同步)
export const addPersonAction = personObj => ({type:ADD_PERSON,data:personObj})