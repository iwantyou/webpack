import React from "react"
import SideLayout from "./sideLayout"
import "./layout.less"
import RenderRoutes from '../router/index'
class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "duzibo",
            toggle: false
        }
    }
    render() {
        return (
            <div className='main'>
                <div className='header'>头部100%</div>
                <SideLayout {...this.props} />
                <div className='right'>{RenderRoutes(this.props.routes)}</div>
            </div>

        )
    }
}

export default Layout
