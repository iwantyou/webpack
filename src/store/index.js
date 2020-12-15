import { loginReducer } from './login/login'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { log } from 'middleware/log'
let reducer = combineReducers({a: loginReducer})
export default createStore(reducer, applyMiddleware(...[thunk, log]))