import { useCallback, useRef } from "react"

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
export { useDebounce, useThrolle }
