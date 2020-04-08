import React from 'react'

function AsyncCompont(getComponent){
 return class Asyncc extends React.Component{ 
    _unount = true
    state = {
     Component: null
    }
    componentDidMount(){
     getComponent().then(({default: Component}) => {
        if(this._unount){
         this.setState({
            Component
           })
        }
     })
    }
    componentWillUnmount() {
    this._unount = false
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