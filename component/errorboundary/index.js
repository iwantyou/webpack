import React from "react"

export default class Errorboundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDgetDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(err, errinfo) {
        console.log("err", err, errinfo)
    }
    render() {
        let { hasError } = this.state
        if (hasError) return <p>页面出现了问题那</p>
        return this.props.children
    }
}
