import { loginReducer } from './login/login'
import { createStore } from 'redux'

export default createStore(loginReducer)