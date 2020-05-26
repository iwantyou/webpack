import { useCallback, useRef, useEffect, useState } from "react"

const useDebounce = (fn, time, dep = []) => {
    const { current } = useRef({ timer: null })
    return useCallback(function () {
        if (current.timer) {
            clearTimeout(current.timer)
        }
        current.timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, time)
    }, dep)
}

const useThrolle = (fn, time, dep = []) => {
    const { current } = useRef({ timer: null })
    return useCallback(() => {
        if (current.timer) return
        current.timer = setTimeout(() => {
            fn.call(this, ...arguments)
            clearTimeout(current.timer)
        }, time)
    }, dep)
}
const useAsyncMemo = (fn, deps) => {
   let [val, setVal] = useState(null)
   useEffect(() => {
     let propmise = fn()
     if(!propmise instanceof Promise){
         throw new Error('The return must be an instance of a promise')
     }
     setVal(propmise)
   }, deps)
   return val
}
export { useDebounce, useThrolle }
