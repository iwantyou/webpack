import { loginReducer } from './login/login'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { log } from 'middleware/log'

export default createStore(loginReducer, applyMiddleware(thunk))