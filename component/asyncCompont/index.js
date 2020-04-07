import React from 'react'

function AsyncCompont(getComponent){
 return class Asyncc extends React.Component{
    state = {
     Component: null
    }
    componentWillMount(){
     getComponent().then((module) => {
      this.setState({
       Component: module.default
      })
     })
    }
    render() {
       let { Component } = this.state
      if(Component) {
         return <Component {...this.props} />
      }
      return null
    }
 }
}
export default AsyncCompont