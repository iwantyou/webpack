import React from "react"

export default class Transition extends React.Component {
    timer = null
    addClass = (el, name) => {
        if (el.classList.contains(name)) return
        el.classList.add(name)
    }
    removeClass = (el, name) => {
        if (!el.classList.contains(name)) return
        el.classList.remove(name)
    }
    fn = (eain, out) => {
        let { name, noderef, duration = 1000 } = this.props
        this.addClass(noderef.current, `v-${name}-${eain}`)
        this.addClass(noderef.current, `v-${name}-${eain}-active`)
        this.timer = setTimeout(() => {
            this.removeClass(noderef.current, `v-${name}-${eain}`)
            this.addClass(noderef.current, `v-${name}-${out}`)
            clearTimeout(this.timer)
        }, 0)
    }
    clearfn = (eain, out) => {
        let { name, noderef } = this.props
        this.removeClass(noderef.current, `v-${name}-${out}`)
        this.removeClass(noderef.current, `v-${name}-${eain}-active`)
    }
    componentDidMount() {
        this.fn("entering", "enter")
    }
    componentDidUpdate() {
        if (this.props.enterorleave) {
            this.clearfn("leaving", "leaved")
            this.fn("entering", "enter")
            console.log('sss')
        } else {
            this.clearfn("entering", "enter")
            this.fn("leaving", "leaved")
            
        }
        console.log("rrr")
    }
    componentWillUnmount() {
        this.fn("leaving", "leaved")
    }
    render() {
        let { children } = this.props
        console.log(111)
        return React.cloneElement(React.Children.only(children), {class: 'du'})
    }
}
