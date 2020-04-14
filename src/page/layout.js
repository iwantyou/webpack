import React, { useState } from "react"
import SideLayout from "./sideLayout"
import "./layout.less"
import RenderRoutes from '../router/index'
function Layout (props) {

        const [name] = useState('duzibo')
        const [toggle] = useState(false)

        return (
            <div className='main'>
                <div className='header'>{name}头部100%</div>
                <SideLayout {...props} />
                <div className='right'>{RenderRoutes(props.routes)}</div>
            </div>

        )
}

export default Layout
