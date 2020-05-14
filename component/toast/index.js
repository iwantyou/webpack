import React from "react"
import RenderDom from "react-dom"
import "./index.less"
let timer = null
const Toast = (text = "", duration = 800, cb = () => {}) => {
    if (typeof duration == "function") {
        cb = duration
        duration = 8000
    }
    let div = document.createElement("div")

    const Layout = () => <div className='v_toast'>{text}</div>
    RenderDom.render(<Layout />, div)
    document.body.appendChild(div)

    div.firstChild.classList.add("v_t")
    let node = document.body.lastChild.previousSibling.firstChild
    let nodep = document.body.lastChild.previousSibling
    if (node && node.classList.contains("v_t")) {
        node.classList.add("v_unappear")
       timer &&  clearTimeout(timer)
        setTimeout(() => {
            nodep.classList.add("v_hidden")
            nodep.parentNode.contains(nodep) && nodep.parentNode.removeChild(nodep)
        }, 1000)
    }

    timer = setTimeout(() => {
        div.classList.add("v_hidden")
        div.parentNode.contains(div) && div.parentNode.removeChild(div)
        cb()
        clearTimeout(timer)
    }, duration)
}
export { Toast }
