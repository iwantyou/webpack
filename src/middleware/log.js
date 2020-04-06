/**
 * 功能： 打印日志
 * 
 */
export const log = store => next => action =>{
    console.log(`type:${action.type}`)
    next(action)
}