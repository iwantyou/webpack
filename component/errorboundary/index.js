import React from "react"

export default class Errorboundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(err, errinfo) {
        console.log("err: 错",)
    }
    render() {
        let { hasError } = this.state
        if (hasError) return <p>页面出现了问题那</p>
        return this.props.children
    }
}
