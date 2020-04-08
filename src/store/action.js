import * as constant from './config'
import { createActions, combineActions, handleActions } from 'redux-actions'
// login 模块
export const login = () => ({
    type: constant.LOGIN
})
export const input = () => ({
    type: constant.INPUT 
})
 const action  = createActions({
    [constant.LOGIN]: (id) => {return id },
    [constant.INPUT]: (val) => {return val}
})
// let reducer = handleActions({
//     [combineActions(a, b)] :(state, { payload }) => {return {...state, count: state.count + payload}}
// }, {count: 0})
/* eslint-disable no-console */
// console.log('action', reducer({count: 6}, b(-1)))
// export default action