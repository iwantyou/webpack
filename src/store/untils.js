export const combineReducer = (obj) => {
 if(typeof obj === 'object'){
  return (state, action) => {
    Object.keys(obj).reduce((reducer, key) => {
       reducer[key] = obj[key](state[key], action)
       return reducer
    }, {})
  }
 }
 if(typeof obj === 'function'){
  return obj
 }
}