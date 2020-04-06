/**
 * 功能： 打印日志
 * 
 */
export const log = store => next => action =>{
    console.log(`type:${actiom.type}`)
    next(action)
}