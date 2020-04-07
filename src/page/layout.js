import React from "react";
import { routes } from "../router/router";
import { Route } from "react-router-dom";
import SideLayout from './sideLayout'
import "./layout.less";
class Layout extends React.Component {
  constructor(props){  
    super(props)
    this.state = {
      name: "duzibo",
      toggle: false
    }
}
  render() {
    console.log('layout:', this.props)
    return (
      <div className="main">
        <div className="header">头部100%</div>
        <SideLayout {...this.props}/>
        <div className="right">{this.props.children()}</div>
      </div>
    );
  }
}
function Routercomponent(route, props) {
    if (route.children) {
     return route.children.map(child => Routercomponent(child, props));
    } else {
      return <Route key={route.path} {...route} {...props} />;
    }
  }
const ConnectLayout = props => {
    return <Layout {...props}>{() => {return routes.map(route => Routercomponent(route, props))}}</Layout>;
  };
  
export default ConnectLayout
