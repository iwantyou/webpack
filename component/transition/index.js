import React from 'react'

class Csstransition extends React.Component{
       constructor(props){
        super(props)
        console.log('这是transition动画，仅用于show-hidden')
        this.state = {

        }
       }
       render() {
        let { name } = this.props
        return this.props.children
       }
}