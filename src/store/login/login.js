let initState = {
 isLogin: false
}

const loginReducer = function (state = initState, action) {
 let type = action.type
 if(type === 'LOGIN'){
  return {
   ...state,
   isLogin: true
  }
 }
 return state
}
export { loginReducer } 