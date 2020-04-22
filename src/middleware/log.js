/**
 * 功能： 打印日志
 * 
 */
export const log = () => next => action =>{
    console.log(`type:${action.type}`)
    next(action)
}
