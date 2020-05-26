import React from "react"
import classnames from "classnames"
export default class Transtion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFirst: true,
            classes: null,
            visiable: true,
        }
    }
    static defaultProps = {
        transitionName: "",
        visiable: true,
        appearEnter: 0,
        appearEnteractive: 0,
        appearEnd: 0,
        onEnterTime: 0,
        onEnterActive: 0,
        onEnterEnd: 0,
        onLeaveTime: 0,
        onLeaveActive: 0,
        onLeaveEnd: 0,
    }
    static getDerivedStateFromProps(props, state) {
        let { visiable } = props
        if (!visiable && state.isFirst) {
            return { ...state, isFirst: false }
        }
        return state
    }
    componentDidMount() {
        let { visiable } = this.props
        if (visiable) {
            this.appearAnimate()
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isFirst && prevState.classes == this.state.classes) {
            if (this.props.visiable) {
                console.log("enter")
                this.enterAnimate()
            } else {
                console.log("leave")
                this.leaveAnimate()
            }
        }
    }
    appearAnimate = () => {
        let {
            transitionName,
            appearEnter,
            appearEnteractive,
            appearEnd,
            visiable,
        } = this.props
        this.setState({ visiable })
        this.handleClass(
            transitionName,
            appearEnter,
            appearEnteractive,
            appearEnd,
            "appear"
        )
    }

    enterAnimate = () => {
        let {
            transitionName,
            onEnterTime,
            onEnterActive,
            onEnterEnd,
        } = this.props
        this.handleClass(transitionName, onEnterTime, onEnterActive, onEnterEnd, "enter")
    }

    leaveAnimate = () => {
        let { transitionName, onLeaveTime, onLeaveActive, onLeaveEnd } = this.props
        this.handleClass(transitionName, onLeaveTime, onLeaveActive, onLeaveEnd, "leave")
    }

    cloneChild = () => {
        let { children } = this.props
        let { classes } = this.state
        return React.cloneElement(React.Children.only(children), {
            className: `${classes}`,
        })
    }

    handleClass = (transitionName, enter = 0, active, end, type) => {
        let { visiable } = this.props
        let { initClass, activeClass, endClass } = this.getClass(transitionName, type)
        this.setState(() => {
            if (type === "enter") {
                return {
                    visiable,
                    classes: initClass,
                }
            }
            return { classes: initClass }
        })
        const timer1 = setTimeout((_) => {
            this.setState({ classes: activeClass })
            clearTimeout(timer1)
        }, enter)
        const timer2 = setTimeout((_) => {
            this.setState({ classes: endClass })
            clearTimeout(timer2)
        }, enter + active)
        const timer3 = setTimeout((_) => {
            this.setState(() => {
                if (type === "leave") {
                    return {
                        visiable,
                        classes: "",
                    }
                }
                return { classes: "" }
            })
            clearTimeout(timer3)
        }, enter + active + end)
    }
    getClass = (transitionName, type) => {
        const initClass = classnames({
            [`${transitionName}-appear`]: type === "appear",
            [`${transitionName}-enter`]: type === "enter",
            [`${transitionName}-leave`]: type === "leave",
        })
        const activeClass = classnames({
            [`${transitionName}-appear-active`]: type === "appear",
            [`${transitionName}-enter-active`]: type === "enter",
            [`${transitionName}-leave-active`]: type === "leave",
        })
        const endClass = classnames({
            [`${transitionName}-appear-end`]: type === "appear",
            [`${transitionName}-enter-end`]: type === "enter",
            [`${transitionName}-leave-end`]: type === "leave",
        })
        return { initClass, activeClass, endClass }
    }
    render() {
        let { visiable } = this.state
        return visiable && this.cloneChild()
    }
}
