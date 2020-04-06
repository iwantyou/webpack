const initState = {
 user: '',
 password: '' 
}
const input = (state = initState, action = {}) => {
 let { type } = action
 switch (type){
  case "INPUT": 
   return {
    ...state,
    user: 'duzibo',
    password: '123456'
   }
   default: 
   return state;
 }
}
export { input }